import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Settings, 
  HelpCircle, 
  FileText, 
  Shield, 
  Bell, 
  CreditCard, 
  Calculator,
  Download,
  Share2,
  Star,
  MessageSquare,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react";

export default function More() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">More Options</h1>
            <p className="text-muted-foreground">Access additional features and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account & Settings */}
            <Card className="p-6 hover:shadow-card-hover transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Account Settings</h3>
                  <p className="text-sm text-muted-foreground">Manage your profile and preferences</p>
                </div>
              </div>
            </Card>

            {/* Loan Calculator */}
            <Card className="p-6 hover:shadow-card-hover transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 shrink-0">
                  <Calculator className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">EMI Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate your monthly payments</p>
                </div>
              </div>
            </Card>

            {/* Transaction History */}
            <Card className="p-6 hover:shadow-card-hover transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 shrink-0">
                  <CreditCard className="h-6 w-6 text-success" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Transaction History</h3>
                  <p className="text-sm text-muted-foreground">View all your loan transactions</p>
                </div>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="p-6 hover:shadow-card-hover transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10 shrink-0">
                  <Bell className="h-6 w-6 text-warning" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Notifications</h3>
                  <p className="text-sm text-muted-foreground">Manage your alerts and updates</p>
                </div>
              </div>
            </Card>

            {/* Documents & Reports */}
            <Card className="p-6 hover:shadow-card-hover transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-info/10 shrink-0">
                  <FileText className="h-6 w-6 text-info" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Documents & Reports</h3>
                  <p className="text-sm text-muted-foreground">Access all your loan documents</p>
                </div>
              </div>
            </Card>

            {/* Security & Privacy */}
            <Card className="p-6 hover:shadow-card-hover transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 shrink-0">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Security & Privacy</h3>
                  <p className="text-sm text-muted-foreground">Control your data and security</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button variant="outline" className="justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download Statement
              </Button>
              <Button variant="outline" className="justify-start">
                <Share2 className="h-4 w-4 mr-2" />
                Share Application
              </Button>
              <Button variant="outline" className="justify-start">
                <Star className="h-4 w-4 mr-2" />
                Rate Our Service
              </Button>
            </div>
          </Card>

          {/* Help & Support */}
          <Card className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                <HelpCircle className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <p className="font-medium">FAQs</p>
                  <p className="text-xs text-muted-foreground">Find answers to common questions</p>
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <p className="font-medium">Chat Support</p>
                  <p className="text-xs text-muted-foreground">Get instant help from our AI assistant</p>
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Phone className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <p className="font-medium">Call Us</p>
                  <p className="text-xs text-muted-foreground">1800-123-4567 (Toll Free)</p>
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Mail className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <p className="font-medium">Email Support</p>
                  <p className="text-xs text-muted-foreground">support@tatacapital.com</p>
                </div>
              </Button>
            </div>
          </Card>

          {/* Legal & Policies */}
          <Card className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Legal & Policies</h2>
            <div className="space-y-2">
              <Button variant="link" className="justify-start p-0 h-auto">
                Terms & Conditions <ExternalLink className="h-3 w-3 ml-2" />
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto">
                Privacy Policy <ExternalLink className="h-3 w-3 ml-2" />
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto">
                Fair Practice Code <ExternalLink className="h-3 w-3 ml-2" />
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto">
                Grievance Redressal <ExternalLink className="h-3 w-3 ml-2" />
              </Button>
            </div>
          </Card>

          {/* App Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>LoanBot Pro by Tata Capital</p>
            <p className="mt-1">Version 1.0.0 • © 2025 Tata Capital Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
}
