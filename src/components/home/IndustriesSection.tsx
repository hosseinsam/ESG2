import { useState } from "react";
import { Ship, Zap, Building2, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "ports",
    icon: Ship,
    title: "Ports & Logistics",
    tagline: "Maritime sustainability leadership",
    description: "Transform port operations with comprehensive ESG monitoring, emissions tracking, and sustainability certification for maritime infrastructure.",
    benefits: [
      "Vessel emissions monitoring",
      "Green port certification",
      "Supply chain transparency",
      "Carbon offset integration",
    ],
    href: "/industries/ports",
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Infrastructure",
    tagline: "Clean energy transformation",
    description: "Accelerate renewable energy adoption with verifiable green credentials, grid optimization insights, and carbon reduction tracking.",
    benefits: [
      "Renewable energy certificates",
      "Grid sustainability metrics",
      "Clean energy credits",
      "Infrastructure ESG scoring",
    ],
    href: "/industries/energy",
  },
  {
    id: "enterprises",
    icon: Building2,
    title: "Corporations & Enterprises",
    tagline: "Corporate ESG excellence",
    description: "Achieve and demonstrate ESG compliance across your organization with automated reporting, stakeholder dashboards, and competitive benchmarking.",
    benefits: [
      "Automated ESG reporting",
      "Stakeholder dashboards",
      "Regulatory compliance",
      "Industry benchmarking",
    ],
    href: "/industries/enterprises",
  },
  {
    id: "governments",
    icon: Landmark,
    title: "Governments & Smart Cities",
    tagline: "Public sector sustainability",
    description: "Enable sustainable urban development with city-wide ESG intelligence, public infrastructure monitoring, and citizen engagement platforms.",
    benefits: [
      "Smart city integration",
      "Public infrastructure ESG",
      "Climate action tracking",
      "Citizen engagement",
    ],
    href: "/industries/governments",
  },
];

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tailored Solutions for{" "}
            <span className="text-gradient">Every Sector</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Industry-specific ESG intelligence designed for your unique challenges
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all",
                activeIndustry.id === industry.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-secondary-foreground/10 text-secondary-foreground/70 hover:bg-secondary-foreground/20 hover:text-secondary-foreground"
              )}
            >
              <industry.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{industry.title}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <activeIndustry.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">{activeIndustry.tagline}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeIndustry.title}</h3>
            <p className="text-lg text-secondary-foreground/70 mb-8">{activeIndustry.description}</p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {activeIndustry.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-secondary-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" asChild>
              <Link to={activeIndustry.href}>
                Explore {activeIndustry.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-secondary-foreground/5 border border-secondary-foreground/10">
              {/* Placeholder for industry-specific visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <activeIndustry.icon className="w-24 h-24 text-primary/20 mx-auto mb-4" />
                  <div className="text-lg font-medium text-secondary-foreground/50">
                    {activeIndustry.title} Dashboard Preview
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                Live Data
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
