import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Bot, Paperclip, Send, Download, Trash2, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

type Message = { role: "user" | "assistant"; content: string };

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your Lendify Assistant. I can help you with your personal loan application. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAIMode, setIsAIMode] = useState(true);
  const [salarySlipFile, setSalarySlipFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() && !salarySlipFile) return;

    let userMessage = input.trim();
    if (salarySlipFile) {
      userMessage += ` [Uploaded: ${salarySlipFile.name}]`;
    }

    const userMsg: Message = { role: "user", content: userMessage };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setSalarySlipFile(null);
    setIsLoading(true);

    if (!isAIMode) {
      // Human mode - just echo a response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "Thank you for your message. A human agent will review this shortly and get back to you." 
        }]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    let assistantSoFar = "";
    const upsertAssistant = (nextChunk: string) => {
      assistantSoFar += nextChunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && isLoading) {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: (chunk) => upsertAssistant(chunk),
        onDone: () => setIsLoading(false),
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      toast({
        title: "Error",
        description: e instanceof Error ? e.message : "Failed to send message",
        variant: "destructive",
      });
    }
  };

  const streamChat = async ({
    messages,
    onDelta,
    onDone,
  }: {
    messages: Message[];
    onDelta: (deltaText: string) => void;
    onDone: () => void;
  }) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok) {
      if (resp.status === 429) {
        throw new Error("Rate limit exceeded. Please try again later.");
      }
      if (resp.status === 402) {
        throw new Error("AI credits exhausted. Please contact support.");
      }
      throw new Error("Failed to start chat stream");
    }

    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") {
          streamDone = true;
          break;
        }

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    if (textBuffer.trim()) {
      for (let raw of textBuffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch { }
      }
    }

    onDone();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      setSalarySlipFile(file);
      toast({
        title: "File attached",
        description: `${file.name} is ready to upload`,
      });
    }
  };

  const clearChat = () => {
    setMessages([
      { role: "assistant", content: "Hello! I'm your Lendify Assistant. I can help you with your personal loan application. What would you like to know?" }
    ]);
    toast({ title: "Chat cleared" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-6">
          <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="flex-1 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Application ID: TC2025001234</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{isAIMode ? "AI Mode" : "Human Mode"}</span>
              <Switch checked={isAIMode} onCheckedChange={setIsAIMode} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Customer Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-medium">Rajesh Kumar Sharma</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Application ID</p>
                  <p className="font-medium">TC2025001234</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">rajesh.sharma@email.com</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="link" className="w-full justify-start p-0 h-auto text-primary">
                  Upload Documents
                </Button>
                <Button variant="link" className="w-full justify-start p-0 h-auto text-primary">
                  View Application
                </Button>
                <Button variant="link" className="w-full justify-start p-0 h-auto text-primary">
                  Check Status
                </Button>
              </div>
            </Card>
          </div>

          {/* Chat Area */}
          <Card className="flex flex-col">
            <div className="border-b p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Lendify Assistant</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    Personal Loan Specialist
                    <Badge variant="secondary" className="ml-2">
                      <span className="h-2 w-2 rounded-full bg-success mr-1"></span>
                      Online
                    </Badge>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={clearChat}>
                  <Trash2 className="h-4 w-4 mr-2 text-destructive" />
                  Clear
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-[500px]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                  {msg.role === "assistant" && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shrink-0">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                  <div className={`rounded-lg p-4 max-w-[80%] ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
                      <span className="text-sm font-semibold">U</span>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shrink-0">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm">Typing...</p>
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <Card className="p-4 bg-card">
                  <h4 className="font-semibold mb-3">Personal Loan Offer</h4>
                  <p className="text-xs text-muted-foreground mb-4">Pre-approved for you</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">💰 Loan Amount</p>
                      <p className="text-lg font-bold">₹50,000</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">⚡ Interest Rate</p>
                      <p className="text-lg font-bold">10.5% p.a.</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">📅 Tenure</p>
                      <p className="text-lg font-bold">24 months</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">🔄 Monthly EMI</p>
                      <p className="text-lg font-bold">₹2,315</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3 border-t">
                    <Button variant="outline" size="sm" onClick={() => setInput("I need a personal loan")}>I need a personal loan</Button>
                    <Button variant="outline" size="sm" onClick={() => setInput("What's my loan eligibility?")}>What's my loan eligibility?</Button>
                    <Button variant="outline" size="sm" onClick={() => setInput("Calculate my EMI")}>Calculate my EMI</Button>
                    <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                      <Upload className="h-4 w-4 mr-1" />
                      Upload salary slip
                    </Button>
                  </div>
                </Card>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4">
              {salarySlipFile && (
                <div className="mb-2 p-2 bg-muted rounded flex items-center justify-between">
                  <span className="text-sm">{salarySlipFile.name}</span>
                  <Button variant="ghost" size="sm" onClick={() => setSalarySlipFile(null)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <div className="flex gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileSelect}
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  disabled={isLoading}
                />
                <Button size="icon" onClick={sendMessage} disabled={isLoading || (!input.trim() && !salarySlipFile)}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
