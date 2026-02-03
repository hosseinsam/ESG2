import { ArrowRight, BarChart3, Database, Coins, Users, Shield, TrendingUp, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: BarChart3,
    title: "ESG Assessment & Scoring",
    description: "Comprehensive evaluation of your organization's environmental, social, and governance performance with industry benchmarks.",
    href: "/solutions/assessment",
    color: "primary",
  },
  {
    icon: Database,
    title: "ESG Data Intelligence",
    description: "AI-powered analytics platform providing real-time insights, predictive modeling, and automated reporting.",
    href: "/solutions/data-intelligence",
    color: "accent",
  },
  {
    icon: Coins,
    title: "Tokenized ESG Assets",
    description: "Transform verified sustainability achievements into tradeable digital assets on the blockchain.",
    href: "/solutions/tokenized-assets",
    color: "emerald",
  },
  {
    icon: Users,
    title: "DAO Governance",
    description: "Participate in decentralized decision-making with transparent, community-driven ESG initiatives.",
    href: "/solutions/dao",
    color: "teal",
  },
];

export function SolutionsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Platform Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Complete ESG Intelligence{" "}
            <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrated solutions designed for enterprise-scale sustainability transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to={solution.href}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {solution.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { icon: Shield, label: "Enterprise Security" },
            { icon: TrendingUp, label: "Real-time Analytics" },
            { icon: Zap, label: "API Integration" },
            { icon: Globe, label: "Global Compliance" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
