import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, BarChart3, FileText, TrendingUp, Shield, Clock, Target, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const assessmentSteps = [
  {
    number: "01",
    title: "Data Collection",
    description: "Connect your data sources or upload documents for comprehensive ESG analysis.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our AI engine processes your data against global ESG frameworks and standards.",
  },
  {
    number: "03",
    title: "Score Generation",
    description: "Receive detailed ESG scores with industry benchmarks and peer comparisons.",
  },
  {
    number: "04",
    title: "Action Plan",
    description: "Get personalized recommendations to improve your ESG performance.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Results",
    description: "Get your initial ESG score within 48 hours",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "AI-powered analysis with 99% data accuracy",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Aligned with GRI, SASB, TCFD, and more",
  },
  {
    icon: TrendingUp,
    title: "Benchmarking",
    description: "Compare against industry peers and leaders",
  },
];

const industries = ["All Industries", "Ports & Logistics", "Energy", "Manufacturing", "Finance", "Technology"];

export default function AssessmentPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                ESG Assessment
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Know Your ESG Score in{" "}
                <span className="text-gradient">48 Hours</span>
              </h1>
              <p className="text-xl text-primary-foreground/70 mb-8">
                Comprehensive ESG evaluation with actionable insights, 
                industry benchmarks, and a clear path to improvement.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="hero" size="xl">
                  Start Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  View Sample Report
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Free Initial Report
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  No Credit Card
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  5 Min Setup
                </span>
              </div>
            </div>

            {/* Assessment Start Form */}
            <div className="glass-card rounded-3xl p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-foreground/80">Progress</span>
                  <span className="text-sm text-primary-foreground/60">0% Complete</span>
                </div>
                <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary rounded-full" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                Which industry describes you?
              </h3>
              <p className="text-primary-foreground/60 mb-6">
                Select your primary industry for tailored assessment
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={cn(
                      "p-4 rounded-xl text-left text-sm font-medium transition-all",
                      selectedIndustry === industry
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20"
                    )}
                  >
                    {industry}
                  </button>
                ))}
              </div>

              <Button className="w-full" size="lg">
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How the Assessment Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed to deliver actionable insights quickly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What You'll Receive
              </h2>
              <ul className="space-y-4">
                {[
                  "Comprehensive ESG score across E, S, and G dimensions",
                  "Industry benchmark comparison and peer ranking",
                  "Detailed breakdown by category and subcategory",
                  "Risk identification and materiality assessment",
                  "Prioritized action plan with quick wins",
                  "Executive summary for stakeholders",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aspect-[4/3] rounded-3xl bg-secondary-foreground/5 border border-secondary-foreground/10 flex items-center justify-center">
              <div className="text-center p-8">
                <BarChart3 className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                <div className="text-lg font-medium text-secondary-foreground/50">
                  Sample Dashboard Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to discover your ESG score?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free assessment today and get actionable insights within 48 hours.
          </p>
          <Button size="xl" asChild>
            <Link to="#">
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
