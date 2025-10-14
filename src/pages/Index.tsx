import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle2,
  TrendingUp,
  Zap,
  Lock,
  Percent,
  Calendar,
  FileText,
  MessageSquare,
  Calculator,
  Upload,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Bot,
  Users,
  Award,
  Target,
  Heart,
  Activity,
  Clock,
  AlertTriangle,
  Gift,
  Eye,
  Crosshair,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold">LoanBot Pro</h1>
              <p className="text-xs text-muted-foreground">Tata Capital</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-primary font-semibold">
              Home
            </Button>
            <Button variant="ghost">Chat</Button>
            <Button variant="ghost">My Application</Button>
            <Button variant="ghost">Documents</Button>
            <Button variant="ghost">More</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="border-success text-success">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                RBI Approved NBFC
              </Badge>
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Get Your Personal Loan in{" "}
                <span className="text-primary">Minutes</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience India's fastest AI-powered loan approval process. Get instant decisions,
                competitive rates, and personalized loan offers tailored just for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Your Application
                </Button>
                <Button size="lg" variant="outline">
                  <Calculator className="mr-2 h-5 w-5" />
                  Check Eligibility
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Instant Approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="text-sm font-medium">100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Best Rates</span>
                </div>
              </div>
            </div>

            {/* Chat Preview */}
            <Card className="shadow-card-hover">
              <CardContent className="p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Bot className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Meet LoanBot Pro</h3>
                    <p className="text-sm text-muted-foreground">Your AI-powered loan assistant</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1 rounded-2xl bg-muted p-3">
                      <p className="text-sm">Hi! I'm here to help you get the perfect loan.</p>
                      <span className="mt-1 block text-xs text-muted-foreground">Just now</span>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 rounded-2xl bg-primary p-3 text-primary-foreground">
                      <p className="text-sm">I need a personal loan for ₹5 lakhs</p>
                      <span className="mt-1 block text-xs opacity-80">Typing...</span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                      <span className="text-xs font-semibold text-accent-foreground">U</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <span className="text-sm text-muted-foreground">Average approval time:</span>
                  <span className="text-sm font-semibold text-success">3 minutes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Millions</h2>
            <p className="text-muted-foreground">
              Your financial security is our top priority. We're regulated, certified, and trusted
              by customers across India.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
                  <Shield className="h-7 w-7 text-success" />
                </div>
                <h3 className="font-semibold mb-2">RBI Approved</h3>
                <p className="text-sm text-muted-foreground">
                  Licensed NBFC under Reserve Bank of India
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">ISO Certified</h3>
                <p className="text-sm text-muted-foreground">ISO 27001:2013 Information Security</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Lock className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">256-bit SSL</h3>
                <p className="text-sm text-muted-foreground">Bank-grade security encryption</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">5L+ Customers</h3>
                <p className="text-sm text-muted-foreground">Trusted by millions across India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <FileText className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Regulatory Compliance</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">NBFC Registration</h3>
                <p className="text-sm text-muted-foreground">
                  Tata Capital Financial Services Limited is registered with RBI as Non-Banking
                  Financial Company (NBFC) under Certificate of Registration No. N-13.00281 dated
                  March 31, 2007.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Fair Practices Code</h3>
                <p className="text-sm text-muted-foreground">
                  We follow RBI's Fair Practices Code ensuring transparent pricing, responsible
                  lending, and ethical collection practices for all our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose LoanBot Pro?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of personal lending with our AI-powered platform designed for
              speed, convenience, and transparency.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Instant Approval</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get loan approval in minutes with our AI-powered assessment system
                </p>
                <p className="text-accent font-semibold">Up to ₹10 Lakhs</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Competitive Rates</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Starting from 10.99% per annum with flexible repayment options
                </p>
                <p className="text-success font-semibold">From 10.99% p.a.</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Flexible Tenure</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose repayment tenure from 12 to 60 months as per your convenience
                </p>
                <p className="text-primary font-semibold">12-60 Months</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Minimal Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Simple KYC process with digital document upload and verification
                </p>
                <p className="text-foreground font-semibold">Digital Process</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Revolutionary AI-Powered Features</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Beyond traditional credit scoring – our AI understands your emotional intelligence and
              anticipates your financial needs with empathetic care.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="shadow-card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Emotional Credit System (ECS)</h3>
                    <p className="text-sm text-muted-foreground">Beyond CIBIL - Behavioral Intelligence</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Instead of just CIBIL, our platform builds an Emotional Credit Score — measuring
                  responsibility, empathy, and decision maturity. Customers with strong emotional
                  discipline get lower rates and early access to loans.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <MessageSquare className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-xs font-medium">Interaction Tone</p>
                    <p className="text-xs text-muted-foreground">Calm vs. anxious analysis</p>
                  </div>
                  <div>
                    <TrendingUp className="h-5 w-5 mx-auto mb-2 text-success" />
                    <p className="text-xs font-medium">Payment Behavior</p>
                    <p className="text-xs text-muted-foreground">Under stress monitoring</p>
                  </div>
                  <div>
                    <Users className="h-5 w-5 mx-auto mb-2 text-accent" />
                    <p className="text-xs font-medium">Sentiment Analysis</p>
                    <p className="text-xs text-muted-foreground">Financial conversations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Predictive Life Events Modeling</h3>
                    <p className="text-sm text-muted-foreground">AI Anticipates Your Needs</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Our AI anticipates when you might need credit — before you even apply. Using
                  calendar data, transaction flows, and sentiment trends, we proactively offer loans
                  with empathy when life events arise.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Calendar className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-xs font-medium">Calendar Data</p>
                    <p className="text-xs text-muted-foreground">Event pattern analysis</p>
                  </div>
                  <div>
                    <Activity className="h-5 w-5 mx-auto mb-2 text-accent" />
                    <p className="text-xs font-medium">Health Correlation</p>
                    <p className="text-xs text-muted-foreground">Wearable integration</p>
                  </div>
                  <div>
                    <AlertTriangle className="h-5 w-5 mx-auto mb-2 text-destructive" />
                    <p className="text-xs font-medium">Stress Detection</p>
                    <p className="text-xs text-muted-foreground">Proactive empathy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Innovation Highlights</h2>
            <p className="text-muted-foreground">
              How our AI creates a more empathetic lending experience
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary mb-4">
                  <Gift className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Behavioral Incentives</h3>
                <p className="text-sm text-muted-foreground">
                  Rewards emotional intelligence with lower interest rates and premium benefits
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent mb-4">
                  <Heart className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Proactive Empathy</h3>
                <p className="text-sm text-muted-foreground">
                  AI cares before the crisis – detecting stress and offering support proactively
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success mb-4">
                  <Eye className="h-5 w-5 text-success-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Privacy-First Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Health data integration only with explicit consent and strict privacy controls
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary mb-4">
                  <Crosshair className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Precision Timing</h3>
                <p className="text-sm text-muted-foreground">
                  Anticipates financial needs 30-90 days before traditional indicators
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Loan Amounts */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Loan Amounts</h2>
            <p className="text-muted-foreground">
              Choose from our most requested loan amounts for various purposes
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="shadow-card hover:shadow-card-hover transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold mb-2">₹50,000</h3>
                <p className="text-sm text-muted-foreground">Medical Emergency</p>
              </CardContent>
            </Card>
            <Card className="shadow-card-hover border-2 border-primary relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                Popular
              </Badge>
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold mb-2 text-primary">₹2,00,000</h3>
                <p className="text-sm text-muted-foreground">Home Renovation</p>
              </CardContent>
            </Card>
            <Card className="shadow-card-hover border-2 border-primary relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                Popular
              </Badge>
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold mb-2 text-primary">₹5,00,000</h3>
                <p className="text-sm text-muted-foreground">Wedding Expenses</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold mb-2">₹10,00,000</h3>
                <p className="text-sm text-muted-foreground">Business Investment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-muted-foreground">
              Get your personal loan approved in just 4 easy steps
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <MessageSquare className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <Badge className="bg-accent text-accent-foreground">1</Badge>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Chat with AI</h3>
              <p className="text-sm text-muted-foreground">
                Tell our AI assistant about your loan requirements
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <Calculator className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <Badge className="bg-accent text-accent-foreground">2</Badge>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Get Instant Quote</h3>
              <p className="text-sm text-muted-foreground">
                Receive personalized loan offers with competitive rates
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <Upload className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <Badge className="bg-accent text-accent-foreground">3</Badge>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Upload Documents</h3>
              <p className="text-sm text-muted-foreground">
                Submit required documents through our secure platform
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <Badge className="bg-accent text-accent-foreground">4</Badge>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Get Approved</h3>
              <p className="text-sm text-muted-foreground">
                Receive approval and loan amount in your account
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Your Loan?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who got their personal loans approved instantly.
            Start your application now and get money in your account within hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Application Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Talk to Our Team
            </Button>
          </div>
          <Card className="bg-white/10 backdrop-blur border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="h-6 w-6" />
                <h3 className="text-xl font-semibold">Your Security is Our Priority</h3>
              </div>
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>Bank-grade security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Data encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>Privacy protected</span>
                </div>
              </div>
              <p className="text-sm mt-4 opacity-80">
                All your personal and financial information is protected with industry-standard
                encryption and security protocols. We never share your data with third parties.
              </p>
            </CardContent>
          </Card>
          <div className="mt-8 flex items-center justify-center gap-2">
            <Clock className="h-5 w-5" />
            <p className="text-sm opacity-90">Limited time offer: Get instant approval today!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Bot className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">LoanBot Pro</h3>
                  <p className="text-xs opacity-80">by Tata Capital</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                India's most trusted AI-powered personal loan platform. Get instant approvals,
                competitive rates, and personalized loan solutions.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Chat Assistant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Check Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Upload Documents
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Fair Practices Code
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Grievance Redressal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 opacity-80">
                  <Phone className="h-4 w-4 mt-0.5" />
                  <div>
                    <p className="font-medium opacity-100">Customer Care</p>
                    <p>1800-266-0173</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 opacity-80">
                  <Mail className="h-4 w-4 mt-0.5" />
                  <div>
                    <p className="font-medium opacity-100">Email Support</p>
                    <p>support@tatacapital.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 opacity-80">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <div>
                    <p className="font-medium opacity-100">Head Office</p>
                    <p>Mumbai, Maharashtra</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80">
            <p>
              © 2025 LoanBot Pro by Tata Capital. All rights reserved. | NBFC Registration No.
              N-13.00281
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
