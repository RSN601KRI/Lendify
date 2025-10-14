import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, FileText, Download, Share2, Edit, HelpCircle } from "lucide-react";

export default function MyApplication() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Loan Application Summary</h1>
            <p className="text-muted-foreground mt-1">Track your personal loan application progress and manage documents</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Application ID</p>
            <p className="text-lg font-semibold">TC2025001234</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
          <div className="space-y-6">
            {/* Customer Details */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Customer Details</h2>
                <Badge variant="secondary" className="gap-1">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  KYC Verified
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">Rajesh Kumar Sharma</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Address</p>
                    <p className="font-medium">rajesh.sharma@email.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone Number</p>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Customer ID</p>
                    <p className="font-medium">TC2025001234</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">15/03/1985</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">City</p>
                    <p className="font-medium">Mumbai</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">PAN Number</p>
                    <p className="font-medium">ABCDE1234F</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Application Date</p>
                    <p className="font-medium">10/10/2025</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Loan Summary */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Loan Summary</h2>
                <Badge>Processing</Badge>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Requested Amount</p>
                  <p className="text-3xl font-bold text-primary">₹5,00,000</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Approved Amount</p>
                  <p className="text-3xl font-bold text-success">₹4,50,000</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Interest Rate</p>
                  <p className="text-lg font-semibold">12.5% p.a.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tenure</p>
                  <p className="text-lg font-semibold">36 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
                  <p className="text-lg font-semibold text-primary">₹15,127</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Processing Fee</p>
                  <p className="font-medium">₹4,500</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Interest</p>
                  <p className="font-medium">₹94,572</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Amount Payable</p>
                  <p className="font-medium">₹5,44,572</p>
                </div>
              </div>
            </Card>

            {/* Application Progress */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Application Progress</h2>
                <p className="text-sm text-muted-foreground">2 of 5 completed</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Application Started</h3>
                    <p className="text-sm text-muted-foreground">Basic information collected</p>
                    <p className="text-xs text-muted-foreground mt-1">10/10/2025</p>
                  </div>
                </div>

                <Progress value={40} className="h-1" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Document Verification</h3>
                    <p className="text-sm text-muted-foreground">KYC and document validation</p>
                    <p className="text-xs text-muted-foreground mt-1">10/10/2025</p>
                  </div>
                </div>

                <Progress value={60} className="h-1" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Credit Assessment</h3>
                    <p className="text-sm text-muted-foreground">Credit score and eligibility check</p>
                    <p className="text-xs text-muted-foreground mt-1">10/10/2025</p>
                  </div>
                </div>

                <Progress value={0} className="h-1" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Clock className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-muted-foreground">Final Approval</h3>
                    <p className="text-sm text-muted-foreground">Loan approval and terms finalization</p>
                  </div>
                </div>

                <Progress value={0} className="h-1" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Download className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-muted-foreground">Disbursement</h3>
                    <p className="text-sm text-muted-foreground">Loan amount transfer</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Document Status</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">3/5 uploaded</span>
                <Progress value={60} className="w-20 h-2" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Salary Slip</p>
                    <p className="text-xs text-muted-foreground truncate">Latest 3 months salary slips</p>
                  </div>
                  <span className="text-xs text-muted-foreground">10/10/2025</span>
                  <Button variant="ghost" size="sm">View</Button>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Bank Statements</p>
                    <p className="text-xs text-muted-foreground truncate">Last 6 months bank statements</p>
                  </div>
                  <span className="text-xs text-muted-foreground">10/10/2025</span>
                  <Button variant="ghost" size="sm">View</Button>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Identity Proof</p>
                    <p className="text-xs text-muted-foreground truncate">Aadhaar card or passport</p>
                  </div>
                  <span className="text-xs text-muted-foreground">10/10/2025</span>
                  <Button variant="ghost" size="sm">View</Button>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-warning shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Address Proof</p>
                    <p className="text-xs text-muted-foreground truncate">Utility bill or rental agreement</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-warning shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Employment Certificate</p>
                    <p className="text-xs text-muted-foreground truncate">Letter from current employer</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 bg-warning/10 rounded-lg">
                <p className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4 text-warning" />
                  2 documents pending
                </p>
                <p className="text-xs text-muted-foreground mt-1">Upload remaining documents to proceed with your application</p>
                <Button className="w-full mt-3">
                  <Download className="h-4 w-4 mr-2" />
                  Upload Now
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="default" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Check Status
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Upload Documents
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="text-sm font-semibold mb-3">Need to make changes?</h4>
                <p className="text-xs text-muted-foreground mb-3">You can edit certain details before final approval</p>
                <Button variant="ghost" className="w-full justify-start">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Details
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="text-sm font-semibold mb-2">Additional Actions</h4>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-xs">
                    Download Summary
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-xs">
                    Print Application
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-xs">
                    <Share2 className="h-3 w-3 mr-2" />
                    Share Application
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Need assistance?
                </h4>
                <p className="text-xs text-muted-foreground mb-3">Chat with our AI assistant for help</p>
                <Button variant="outline" className="w-full">
                  Get Help
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
