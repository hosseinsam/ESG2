import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Database, BarChart2, Settings, DollarSign, ArrowRight, CheckCircle2, Clock, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Connect Your Data",
    subtitle: "Seamless Integration",
    description: "Connect existing systems via API, upload documents, or integrate IoT sensors for real-time data collection across all ESG metrics.",
    details: [
      "100+ pre-built integrations",
      "CSV/Excel upload support",
      "IoT sensor connectivity",
      "Real-time data sync",
    ],
  },
  {
    number: "02",
    icon: BarChart2,
    title: "AI-Powered Analysis",
    subtitle: "Intelligent Processing",
    description: "Our proprietary AI engine analyzes your data against global ESG frameworks, generating comprehensive scores and identifying trends.",
    details: [
      "Multi-framework analysis",
      "Pattern recognition",
      "Anomaly detection",
      "Predictive modeling",
    ],
  },
  {
    number: "03",
    icon: Settings,
    title: "Optimize & Improve",
    subtitle: "Actionable Insights",
    description: "Receive personalized recommendations and tools to enhance your ESG performance with clear priorities and measurable outcomes.",
    details: [
      "Prioritized action plans",
      "ROI projections",
      "Progress tracking",
      "Expert guidance",
    ],
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Monetize Results",
    subtitle: "Value Creation",
    description: "Convert verified ESG achievements into tokenized assets, access carbon credit markets, and unlock financial incentives for sustainability.",
    details: [
      "Carbon credit generation",
      "ESG token issuance",
      "Marketplace access",
      "Partner incentives",
    ],
  },
];

const timeline = [
  { time: "Day 1", action: "Connect data sources and complete onboarding" },
  { time: "Day 2-3", action: "AI analysis and score generation" },
  { time: "Day 4-5", action: "Review results and action plan" },
  { time: "Ongoing", action: "Continuous monitoring and improvement" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Journey to{" "}
              <span className="text-gradient">ESG Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A streamlined, four-step process that transforms sustainability data 
              into actionable intelligence and measurable business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/solutions/assessment">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-bold text-primary mb-1">{item.time}</div>
                <div className="text-sm text-muted-foreground">{item.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">{step.subtitle}</div>
                      <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="aspect-square rounded-3xl bg-muted border border-border flex items-center justify-center">
                      <step.icon className="w-32 h-32 text-primary/20" />
                    </div>
                    {/* Connection Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-16 left-1/2 -translate-x-1/2">
                        <ArrowRight className="w-8 h-8 text-primary rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ESGPorts */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ESGPorts?
            </h2>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Industry-leading technology and expertise to power your sustainability journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Fast Implementation", description: "Up and running in days, not months" },
              { icon: Zap, title: "Real-time Data", description: "Continuous monitoring and updates" },
              { icon: Shield, title: "Enterprise Security", description: "Bank-grade data protection" },
              { icon: TrendingUp, title: "Proven Results", description: "40% average cost reduction" },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Begin your ESG transformation journey today with a free assessment.
          </p>
          <Button size="xl" asChild>
            <Link to="/solutions/assessment">
              Start Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
