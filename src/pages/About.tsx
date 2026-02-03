import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Globe, Target, Eye, Heart, Users, TrendingUp, Award, ArrowRight, CheckCircle2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Globe,
    title: "Global Impact",
    description: "Driving sustainability transformation across industries and borders.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Blockchain-verified data ensuring complete trust and accountability.",
  },
  {
    icon: Heart,
    title: "Sustainability First",
    description: "Every decision guided by environmental and social responsibility.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Empowering stakeholders through decentralized governance.",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "ESGPorts launched with a vision for blockchain-powered sustainability" },
  { year: "2021", title: "First Assessment", description: "Completed first enterprise ESG assessment" },
  { year: "2022", title: "Platform Launch", description: "Full platform launch with AI-powered analytics" },
  { year: "2023", title: "DAO Launch", description: "Decentralized governance enabled for community participation" },
  { year: "2024", title: "Global Expansion", description: "Operations expanded to 40+ countries" },
];

const team = [
  { name: "Dr. Sarah Chen", role: "CEO & Co-Founder", expertise: "Sustainability Strategy" },
  { name: "Marcus Williams", role: "CTO", expertise: "Blockchain Architecture" },
  { name: "Elena Rodriguez", role: "Chief ESG Officer", expertise: "ESG Frameworks" },
  { name: "James Park", role: "Head of Product", expertise: "Enterprise Software" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About ESGPorts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building the Future of{" "}
              <span className="text-gradient">Sustainable Business</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make sustainability measurable, verifiable, and 
              rewarding for organizations worldwide through blockchain technology and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower organizations worldwide with transparent, blockchain-verified 
                ESG intelligence that transforms sustainability from a compliance burden 
                into a driver of competitive advantage and positive impact.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-accent/5 border border-accent/10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A world where every business decision considers its environmental and 
                social impact, enabled by transparent data, fair incentives, and 
                community-driven governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform ESG
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} pl-12 md:pl-0`}>
                    <div className="p-6 rounded-2xl bg-card border border-border inline-block">
                      <div className="text-sm font-bold text-primary mb-1">{milestone.year}</div>
                      <h3 className="text-lg font-bold mb-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2" />

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Experienced leaders driving sustainable innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="p-6 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 text-center">
                <div className="w-20 h-20 rounded-full bg-secondary-foreground/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-secondary-foreground/30" />
                </div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <div className="text-sm text-primary mb-2">{member.role}</div>
                <div className="text-xs text-secondary-foreground/60">{member.expertise}</div>
                <div className="flex justify-center gap-2 mt-4">
                  <a href="#" className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global Sustainability Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                ESGPorts is trusted by organizations across 40+ countries, helping them 
                measure, improve, and monetize their ESG performance.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Organizations" },
                  { value: "40+", label: "Countries" },
                  { value: "45K", label: "Tons CO2 Offset" },
                  { value: "$50M+", label: "ESG Assets" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square rounded-3xl bg-muted border border-border flex items-center justify-center">
              <Globe className="w-32 h-32 text-muted-foreground/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with ESGPorts to drive sustainable transformation in your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/solutions/assessment">
                Start Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
