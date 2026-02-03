import { Building2, Heart, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const segments = [
  {
    icon: Building2,
    title: "Enterprises",
    subtitle: "Compliance & ROI",
    description: "Streamline ESG reporting, achieve regulatory compliance, and demonstrate sustainability ROI to stakeholders.",
    cta: "Enterprise Solutions",
    href: "/industries/enterprises",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Heart,
    title: "NGOs & Citizens",
    subtitle: "Impact & Rewards",
    description: "Track environmental impact, participate in sustainability initiatives, and earn rewards for positive actions.",
    cta: "Community Programs",
    href: "/community",
    gradient: "from-emerald/20 to-mint/20",
  },
  {
    icon: Handshake,
    title: "Partners & Investors",
    subtitle: "Technology & Returns",
    description: "Access API integrations, tokenomics documentation, and investment opportunities in sustainable infrastructure.",
    cta: "Partner Portal",
    href: "/partners",
    gradient: "from-accent/20 to-teal/20",
  },
];

export function TrifectaSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions for Every Stakeholder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're driving corporate sustainability, building community impact, or investing in the future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <Link
              key={index}
              to={segment.href}
              className="group relative p-8 rounded-3xl border border-border bg-card hover:border-primary/30 hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity",
                segment.gradient
              )} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <segment.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="text-sm font-medium text-primary mb-2">{segment.subtitle}</div>
                <h3 className="text-2xl font-bold mb-3">{segment.title}</h3>
                <p className="text-muted-foreground mb-6">{segment.description}</p>

                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>{segment.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
