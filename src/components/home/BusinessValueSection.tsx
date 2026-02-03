import { Shield, Eye, TrendingUp, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";

const metrics = [
  {
    icon: Shield,
    value: "100%",
    label: "Compliance Coverage",
    description: "Meet global ESG regulations and reporting standards",
    color: "primary",
  },
  {
    icon: Eye,
    value: "360°",
    label: "Full Transparency",
    description: "Blockchain-verified data for complete stakeholder trust",
    color: "accent",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Cost Reduction",
    description: "Average savings through operational ESG optimization",
    color: "emerald",
  },
  {
    icon: Award,
    value: "5x",
    label: "Reputation Impact",
    description: "Improved brand value through verified sustainability",
    color: "teal",
  },
];

const valuePoints = [
  "Automated regulatory compliance reporting",
  "Real-time ESG performance dashboards",
  "Blockchain-verified sustainability claims",
  "Carbon offset marketplace access",
  "AI-powered improvement recommendations",
  "Investor-ready ESG documentation",
];

export function BusinessValueSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Business Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Turn ESG Into{" "}
              <span className="text-gradient">Competitive Advantage</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ESGPorts delivers measurable business outcomes that strengthen your market position, 
              reduce operational costs, and unlock new revenue streams through sustainability.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {valuePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Ready to see your potential?</div>
                <div className="text-sm text-muted-foreground">Get a free ESG readiness assessment</div>
              </div>
            </div>
          </div>

          {/* Right: Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-1">{metric.value}</div>
                <div className="font-semibold mb-2">{metric.label}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
