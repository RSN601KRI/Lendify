import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, AlertCircle, CheckCircle2, Info, MessageSquare, ArrowLeft, Lightbulb, Eye, Camera, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

export default function Documents() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="border-b bg-muted/30">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-1">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Document Verification
              </Badge>
              <Progress value={65} className="w-32 h-2" />
              <span className="text-sm text-muted-foreground">65%</span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">Processing</Button>
              <Button variant="ghost" size="sm">Summary</Button>
              <Button variant="ghost" size="sm">Docs</Button>
              <Button variant="ghost" size="sm">Status</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Document Upload</h1>
            <p className="text-muted-foreground">Upload your salary slip to verify your income and continue with your loan application</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/chat">
              <MessageSquare className="h-4 w-4 mr-2" />
              Back to Chat
            </Link>
          </Button>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium">Application Started</p>
            </div>
            <div className="flex-1 h-[2px] bg-success mx-2"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success">
                <Info className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium">Information Review</p>
            </div>
            <div className="flex-1 h-[2px] bg-primary mx-2"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Upload className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium text-primary">Document Upload</p>
            </div>
            <div className="flex-1 h-[2px] bg-muted mx-2"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Underwriting</p>
            </div>
            <div className="flex-1 h-[2px] bg-muted mx-2"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <CheckCircle2 className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Final Review</p>
            </div>
            <div className="flex-1 h-[2px] bg-muted mx-2"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <CheckCircle2 className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Decision Ready</p>
            </div>
          </div>
        </div>

        {/* Document Upload Requirements */}
        <Card className="p-8 mb-6">
          <h2 className="text-2xl font-bold text-center mb-3">Document Upload Requirements</h2>
          <p className="text-center text-muted-foreground mb-8">
            To process your loan application, we need to verify your income. Please upload your latest salary slip following the guidelines below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 border-2">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-destructive shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 flex items-center gap-2">
                    Latest Salary Slip
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  </h3>
                  <p className="text-xs text-muted-foreground">Upload your most recent salary slip (within last 3 months)</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 border-2">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-warning shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 flex items-center gap-2">
                    Clear & Readable
                    <AlertCircle className="h-4 w-4 text-warning" />
                  </h3>
                  <p className="text-xs text-muted-foreground">Ensure all text is clearly visible and not blurred</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 border-2">
              <div className="flex items-start gap-3">
                <Maximize className="h-5 w-5 text-warning shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 flex items-center gap-2">
                    Complete Document
                    <AlertCircle className="h-4 w-4 text-warning" />
                  </h3>
                  <p className="text-xs text-muted-foreground">Include all pages if your salary slip has multiple pages</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 border-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 flex items-center gap-2">
                    Valid Format
                    <Info className="h-4 w-4 text-primary" />
                  </h3>
                  <p className="text-xs text-muted-foreground">PDF, JPG, or PNG format with maximum 5MB file size</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-muted/50 border-dashed border-2">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <h3 className="font-semibold">Acceptable Documents</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Company issued salary slip with official letterhead</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Payroll statement showing gross and net salary</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Salary certificate with company seal and signature</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Bank statement showing salary credit (if salary slip unavailable)</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-info/5 border-info mt-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-info shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Photo Quality Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Camera className="h-4 w-4 text-info shrink-0" />
                    <span>Use good lighting when taking photos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Maximize className="h-4 w-4 text-info shrink-0" />
                    <span>Ensure document is flat and in focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-info shrink-0" />
                    <span>Capture the entire document in frame</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Eye className="h-4 w-4 text-info shrink-0" />
                    <span>Avoid shadows and reflections</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Card>

        {/* Upload Area */}
        <Card className="p-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Upload className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">Upload your salary slip</h2>
            <p className="text-muted-foreground mb-8">
              Drag and drop your files here, or click browse to select files from your device
            </p>
            
            <Button size="lg" className="mb-6">
              <FileText className="h-5 w-5 mr-2" />
              Browse Files
            </Button>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>Accepted formats: .PDF, .JPG, .JPEG, .PNG</p>
              <p>Maximum file size: 5MB</p>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-2">Upload Progress</p>
              <p className="text-lg font-semibold mb-2">0/3 completed</p>
              <Progress value={0} className="h-3 mb-6" />
              
              <div className="flex gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Continue with 0 Documents
                </Button>
                <Button variant="ghost" size="lg">
                  Skip for Now →
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-success">
                <CheckCircle2 className="h-4 w-4" />
                <span>Your documents are encrypted and secure</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Help Section */}
        <Card className="p-6 mt-6 bg-muted/30">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shrink-0">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you're having trouble uploading your documents or have questions about the requirements, our AI assistant is here to help guide you through the process.
              </p>
              <div className="flex gap-3">
                <Button variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat with Assistant
                </Button>
                <Button variant="ghost">
                  <FileText className="h-4 w-4 mr-2" />
                  View Application
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
