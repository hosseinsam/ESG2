import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, BarChart3, Database, Coins, Users, Shield, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: BarChart3,
    title: "ESG Assessment & Scoring",
    description: "Comprehensive evaluation of your organization's environmental, social, and governance performance with industry benchmarks and actionable insights.",
    features: [
      "Multi-framework assessment (GRI, SASB, TCFD)",
      "Industry-specific benchmarking",
      "Real-time score tracking",
      "Regulatory compliance mapping",
      "Stakeholder reporting tools",
    ],
    href: "/solutions/assessment",
  },
  {
    icon: Database,
    title: "ESG Data Intelligence Platform",
    description: "AI-powered analytics platform providing real-time insights, predictive modeling, and automated reporting for data-driven sustainability decisions.",
    features: [
      "Automated data collection",
      "AI-powered trend analysis",
      "Predictive ESG modeling",
      "Custom dashboard creation",
      "API integrations",
    ],
    href: "/solutions/data-intelligence",
  },
  {
    icon: Coins,
    title: "Tokenized ESG Assets & Credits",
    description: "Transform verified sustainability achievements into tradeable digital assets on the blockchain, creating new revenue streams from ESG performance.",
    features: [
      "Carbon credit tokenization",
      "ESG performance tokens",
      "Marketplace access",
      "Blockchain verification",
      "Instant settlement",
    ],
    href: "/solutions/tokenized-assets",
  },
  {
    icon: Users,
    title: "DAO Governance & Incentives",
    description: "Participate in decentralized decision-making with transparent, community-driven ESG initiatives and earn rewards for positive sustainability actions.",
    features: [
      "Voting rights for stakeholders",
      "Transparent governance",
      "Community proposals",
      "Incentive distribution",
      "Impact tracking",
    ],
    href: "/solutions/dao",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Platform Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete ESG Intelligence{" "}
              <span className="text-gradient">Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Integrated solutions designed to transform sustainability compliance 
              into competitive advantage through AI, blockchain, and data intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/solutions/assessment">
                  Start Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <Link to={solution.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-3xl bg-muted border border-border flex items-center justify-center">
                    <solution.icon className="w-32 h-32 text-muted-foreground/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Enterprise-Grade Security" },
              { icon: TrendingUp, label: "Real-time Analytics" },
              { icon: Zap, label: "API-First Platform" },
              { icon: CheckCircle2, label: "Compliance Ready" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your ESG performance?
          </h2>
          <p className="text-lg text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">
            Get started with a free assessment and see how ESGPorts can help you achieve your sustainability goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/solutions/assessment">Request Assessment</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
