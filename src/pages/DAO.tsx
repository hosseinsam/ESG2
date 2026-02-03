import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Vote, Coins, Shield, TrendingUp, Eye, Lock, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "$12.5M", label: "Treasury Value" },
  { value: "1,247", label: "Active Members" },
  { value: "89", label: "Proposals Passed" },
  { value: "2.4M", label: "Voting Power" },
];

const features = [
  {
    icon: Vote,
    title: "Democratic Governance",
    description: "Every stakeholder has a voice. Vote on key decisions affecting the ESG ecosystem.",
  },
  {
    icon: Coins,
    title: "Token Incentives",
    description: "Earn rewards for participation, verification, and positive ESG actions.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "All decisions, votes, and treasury movements are publicly visible on-chain.",
  },
  {
    icon: Shield,
    title: "Secure Participation",
    description: "Enterprise-grade security for voting and asset management.",
  },
];

const proposals = [
  {
    id: "EP-089",
    title: "Carbon Credit Integration Partnership",
    status: "Active",
    votes: { for: 842, against: 156 },
    ends: "3 days",
  },
  {
    id: "EP-088",
    title: "New Port Sustainability Standards",
    status: "Active",
    votes: { for: 1023, against: 89 },
    ends: "5 days",
  },
  {
    id: "EP-087",
    title: "Community Grant Program Expansion",
    status: "Passed",
    votes: { for: 1456, against: 234 },
    ends: "Completed",
  },
];

export default function DAOPage() {
  return (
    <div className="min-h-screen bg-secondary text-secondary-foreground">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              DAO & Community
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Decentralized{" "}
              <span className="text-gradient">ESG Governance</span>
            </h1>
            <p className="text-xl text-secondary-foreground/70 mb-8">
              Join a global community of sustainability leaders shaping the future of ESG 
              through transparent, blockchain-powered governance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Join the DAO
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                View Proposals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-8 border-y border-secondary-foreground/10">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-secondary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is DAO */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is the ESGPorts DAO?
              </h2>
              <p className="text-lg text-secondary-foreground/70 mb-6">
                A Decentralized Autonomous Organization (DAO) is a community-governed entity 
                where decisions are made collectively by token holders rather than a central authority.
              </p>
              <p className="text-lg text-secondary-foreground/70 mb-8">
                The ESGPorts DAO empowers enterprises, partners, and sustainability advocates 
                to shape the platform's direction, allocate resources, and verify ESG achievements 
                through transparent, on-chain voting.
              </p>

              <ul className="space-y-3">
                {[
                  "No single point of control or failure",
                  "Transparent decision-making on blockchain",
                  "Aligned incentives for all stakeholders",
                  "Community-driven innovation and growth",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-secondary-foreground/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Proposals */}
      <section className="section-padding bg-secondary-foreground/5">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Active Proposals</h2>
            <Button variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid gap-4">
            {proposals.map((proposal) => (
              <div
                key={proposal.id}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-muted-foreground">{proposal.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      proposal.status === "Active" 
                        ? "bg-primary/20 text-primary" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {proposal.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{proposal.title}</h3>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">{proposal.votes.for}</div>
                    <div className="text-xs text-muted-foreground">For</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-destructive">{proposal.votes.against}</div>
                    <div className="text-xs text-muted-foreground">Against</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold">{proposal.ends}</div>
                    <div className="text-xs text-muted-foreground">
                      {proposal.status === "Active" ? "Ends in" : ""}
                    </div>
                  </div>
                  {proposal.status === "Active" && (
                    <Button size="sm">Vote Now</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Participate
            </h2>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Get involved in shaping the future of ESG governance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Get ESG Tokens",
                description: "Earn tokens through ESG achievements or acquire them on supported exchanges.",
              },
              {
                step: "02",
                title: "Stake & Delegate",
                description: "Stake your tokens to gain voting power or delegate to trusted representatives.",
              },
              {
                step: "03",
                title: "Vote & Earn",
                description: "Participate in proposals and earn rewards for active governance participation.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-secondary-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/10">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the ESG Revolution
          </h2>
          <p className="text-lg text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">
            Be part of a global community driving sustainable change through decentralized governance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Join the DAO
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              Read Whitepaper
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
