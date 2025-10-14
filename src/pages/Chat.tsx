import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bot, Paperclip, Send, Download, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Chat() {
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
            <Button variant="outline" size="sm">Switch to AI</Button>
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
                  <h3 className="font-semibold">LoanBot Assistant</h3>
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
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4 mr-2 text-destructive" />
                  Clear
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-[500px]">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shrink-0">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="bg-muted rounded-lg p-4 max-w-[80%]">
                  <p className="text-sm">Hello! I'm your LoanBot Assistant. I can help you with your personal loan application. What would you like to know?</p>
                  <p className="text-xs text-muted-foreground mt-2">Invalid Date</p>
                </div>
              </div>

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
                    <p className="text-lg font-bold">% p.a.</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">📅 Tenure</p>
                    <p className="text-lg font-bold"></p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">🔄 Monthly EMI</p>
                    <p className="text-lg font-bold"></p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t">
                  <Button variant="outline" size="sm">I need a personal loan</Button>
                  <Button variant="outline" size="sm">What's my loan eligibility?</Button>
                  <Button variant="outline" size="sm">Calculate my EMI</Button>
                  <Button variant="outline" size="sm">Upload documents</Button>
                </div>
              </Card>
            </div>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                />
                <Button size="icon">
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
