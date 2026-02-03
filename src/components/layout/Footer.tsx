import { Link } from "react-router-dom";
import { Globe, Linkedin, Twitter, Github, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  solutions: [
    { title: "ESG Assessment", href: "/solutions/assessment" },
    { title: "Data Intelligence", href: "/solutions/data-intelligence" },
    { title: "Tokenized Assets", href: "/solutions/tokenized-assets" },
    { title: "DAO Governance", href: "/solutions/dao" },
  ],
  industries: [
    { title: "Ports & Logistics", href: "/industries/ports" },
    { title: "Energy & Infrastructure", href: "/industries/energy" },
    { title: "Enterprises", href: "/industries/enterprises" },
    { title: "Governments", href: "/industries/governments" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
    { title: "Partners", href: "/partners" },
  ],
  resources: [
    { title: "Blog", href: "/resources/blog" },
    { title: "Whitepapers", href: "/resources/whitepapers" },
    { title: "Case Studies", href: "/resources/case-studies" },
    { title: "API Docs", href: "/resources/api-docs" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
    { title: "Token Disclaimer", href: "/token-disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container-wide py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to transform your ESG performance?
              </h3>
              <p className="text-secondary-foreground/70 text-lg">
                Start your sustainability journey with ESGPorts today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                Talk to an Expert
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-gradient flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ESGPorts</span>
            </Link>
            <p className="text-sm text-secondary-foreground/70 mb-6">
              The global ESG intelligence ecosystem powering sustainable transformation through blockchain technology.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} ESGPorts. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-secondary-foreground/70">System Operational</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
