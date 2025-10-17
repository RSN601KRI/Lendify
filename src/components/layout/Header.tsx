import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, FileText, Upload, MoreHorizontal } from "lucide-react";
import logoImage from "@/assets/loanbot-logo.png";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="LoanBot Pro" className="h-10 w-10 rounded-lg" />
          <div>
            <h1 className="text-lg font-bold text-foreground">LoanBot Pro</h1>
            <p className="text-xs text-muted-foreground">Tata Capital</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Button
            variant={isActive("/") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>
          
          <Button
            variant={isActive("/chat") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/chat">
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat
            </Link>
          </Button>

          <Button
            variant={isActive("/my-application") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/my-application">
              <FileText className="h-4 w-4 mr-2" />
              My Application
            </Link>
          </Button>

          <Button
            variant={isActive("/documents") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/documents">
              <Upload className="h-4 w-4 mr-2" />
              Documents
            </Link>
          </Button>

          <Button
            variant={isActive("/more") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/more">
              <MoreHorizontal className="h-4 w-4 mr-2" />
              More
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
