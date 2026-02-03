import { Database, BarChart2, Settings, DollarSign, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Collect ESG Data",
    description: "Connect your data sources for automated collection across environmental, social, and governance metrics.",
    features: ["API integrations", "Manual uploads", "IoT sensors"],
  },
  {
    number: "02",
    icon: BarChart2,
    title: "Analyze & Score",
    description: "AI-powered analysis generates comprehensive ESG scores benchmarked against industry standards.",
    features: ["Real-time scoring", "Industry benchmarks", "Trend analysis"],
  },
  {
    number: "03",
    icon: Settings,
    title: "Improve & Optimize",
    description: "Receive actionable recommendations and tools to enhance your ESG performance.",
    features: ["Action plans", "Progress tracking", "Expert support"],
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Monetize & Incentivize",
    description: "Convert verified ESG achievements into tokenized assets and unlock financial incentives.",
    features: ["Carbon credits", "ESG tokens", "Partner rewards"],
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Journey to{" "}
            <span className="text-gradient">ESG Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process from data collection to value creation
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  {/* Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-6 relative z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/how-it-works">
              Explore Full Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
