import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutions = [
  { title: "ESG Assessment & Scoring", href: "/solutions/assessment", description: "Comprehensive ESG evaluation for your organization" },
  { title: "Data Intelligence Platform", href: "/solutions/data-intelligence", description: "AI-powered analytics and insights" },
  { title: "Tokenized ESG Assets", href: "/solutions/tokenized-assets", description: "Blockchain-backed sustainability credits" },
  { title: "DAO Governance", href: "/solutions/dao", description: "Decentralized decision-making for impact" },
];

const industries = [
  { title: "Ports & Logistics", href: "/industries/ports", description: "Maritime sustainability solutions" },
  { title: "Energy & Infrastructure", href: "/industries/energy", description: "Green energy transformation" },
  { title: "Enterprises", href: "/industries/enterprises", description: "Corporate ESG compliance" },
  { title: "Governments", href: "/industries/governments", description: "Smart city initiatives" },
];

const resources = [
  { title: "Blog", href: "/resources/blog", description: "Latest insights and updates" },
  { title: "Whitepapers", href: "/resources/whitepapers", description: "In-depth research and reports" },
  { title: "Case Studies", href: "/resources/case-studies", description: "Success stories" },
  { title: "API Documentation", href: "/resources/api-docs", description: "Developer resources" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  const isDarkPage = location.pathname === "/dao" || location.pathname.startsWith("/community");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled || !isHomePage
      ? "bg-background/95 backdrop-blur-lg shadow-md border-b border-border"
      : "bg-transparent"
  );

  const textClass = isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground";
  const logoClass = isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground";

  return (
    <nav className={navClasses}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-gradient flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={cn("text-xl font-bold tracking-tight", logoClass)}>
              ESG<span className="text-gradient">Ports</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("bg-transparent", textClass)}>
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutions.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("bg-transparent", textClass)}>
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {industries.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("bg-transparent", textClass)}>
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[350px] gap-3 p-4">
                      {resources.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <Link to="/how-it-works">
                    <Button variant="ghost" className={cn("bg-transparent", textClass)}>
                      How It Works
                    </Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/dao">
                    <Button variant="ghost" className={cn("bg-transparent", textClass)}>
                      DAO & Community
                    </Button>
                  </Link>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                  <Link to="/about">
                    <Button variant="ghost" className={cn("bg-transparent", textClass)}>
                      About
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant={isScrolled || !isHomePage ? "outline" : "heroOutline"} 
              size="sm"
            >
              Talk to an Expert
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              Request ESG Assessment
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn("lg:hidden p-2 rounded-lg", textClass)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-up">
            <div className="py-4 space-y-2">
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Solutions</span>
                <div className="mt-2 space-y-1">
                  {solutions.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block py-2 text-sm hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Industries</span>
                <div className="mt-2 space-y-1">
                  {industries.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block py-2 text-sm hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 py-2 space-y-1">
                <Link to="/how-it-works" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  How It Works
                </Link>
                <Link to="/dao" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  DAO & Community
                </Link>
                <Link to="/about" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </div>

              <div className="px-4 pt-4 space-y-2 border-t border-border">
                <Button variant="outline" className="w-full">Talk to an Expert</Button>
                <Button className="w-full">Request ESG Assessment</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
