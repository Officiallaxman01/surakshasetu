import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Calendar, CheckCircle, AlertCircle, Code } from "lucide-react";

const DecorativeBracket = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M40 1H1V40" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const changelogEntries = [
  {
    version: "3.5.0",
    date: "January 15, 2025",
    type: "major",
    changes: [
      { type: "feature", text: "Added AI-powered threat prediction engine" },
      { type: "feature", text: "New real-time dashboard with enhanced analytics" },
      { type: "feature", text: "Integrated zero-day vulnerability scanner" },
      { type: "improvement", text: "Improved threat detection accuracy by 35%" },
      { type: "improvement", text: "Enhanced API rate limiting and security" },
      { type: "fix", text: "Fixed memory leak in continuous monitoring module" }
    ]
  },
  {
    version: "3.4.2",
    date: "December 10, 2024",
    type: "minor",
    changes: [
      { type: "improvement", text: "Optimized database query performance" },
      { type: "improvement", text: "Updated security certificates" },
      { type: "fix", text: "Resolved issue with email notification delivery" },
      { type: "fix", text: "Fixed timezone display bug in reports" }
    ]
  },
  {
    version: "3.4.0",
    date: "November 20, 2024",
    type: "major",
    changes: [
      { type: "feature", text: "New compliance reporting dashboard (GDPR, ISO, SOC2)" },
      { type: "feature", text: "Added automated incident response workflows" },
      { type: "feature", text: "Multi-factor authentication for all user accounts" },
      { type: "improvement", text: "Enhanced cloud integration with AWS, Azure, GCP" },
      { type: "fix", text: "Fixed scanning timeout on large file systems" }
    ]
  },
  {
    version: "3.3.1",
    date: "October 15, 2024",
    type: "patch",
    changes: [
      { type: "fix", text: "Critical security patch for CVE-2024-XXXX" },
      { type: "fix", text: "Resolved API authentication issues" },
      { type: "improvement", text: "Performance improvements for large-scale deployments" }
    ]
  },
  {
    version: "3.3.0",
    date: "September 30, 2024",
    type: "major",
    changes: [
      { type: "feature", text: "Container security scanning for Docker and Kubernetes" },
      { type: "feature", text: "New threat intelligence feed integration" },
      { type: "improvement", text: "Redesigned user interface with dark mode" },
      { type: "improvement", text: "Faster scan speeds (up to 50% improvement)" },
      { type: "fix", text: "Fixed false positive detection in vulnerability scanner" }
    ]
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "feature":
      return <CheckCircle className="w-4 h-4 text-primary" />;
    case "improvement":
      return <Code className="w-4 h-4 text-blue-500" />;
    case "fix":
      return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    default:
      return <CheckCircle className="w-4 h-4 text-white" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "feature":
      return "NEW";
    case "improvement":
      return "IMPROVED";
    case "fix":
      return "FIXED";
    default:
      return "";
  }
};

const getVersionBadge = (type: string) => {
  switch (type) {
    case "major":
      return <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">MAJOR</span>;
    case "minor":
      return <span className="bg-blue-500/20 text-blue-500 text-xs font-bold px-3 py-1 rounded-full">MINOR</span>;
    case "patch":
      return <span className="bg-yellow-500/20 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full">PATCH</span>;
    default:
      return null;
  }
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-[100px]">
        <section className="relative bg-black py-[120px] lg:py-20 md:py-15">
          <div className="absolute top-0 left-0 w-10 h-10 text-[rgba(255,255,255,0.2)]">
            <DecorativeBracket />
          </div>
          <div className="absolute top-0 right-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-x-100">
            <DecorativeBracket />
          </div>
          <div className="absolute bottom-0 left-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-y-100">
            <DecorativeBracket />
          </div>
          <div className="absolute bottom-0 right-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-x-100 -scale-y-100">
            <DecorativeBracket />
          </div>
          
          <div className="container max-w-[900px]">
            <div className="text-center mb-16">
              <p className="sub-title">/ version history</p>
              <h1 className="h1 mt-4 mb-6">CHANGELOG</h1>
              <p className="text-text-secondary text-lg">
                Track all updates, improvements, and fixes to the SurakshaSetu security platform.
              </p>
            </div>

            <div className="space-y-8">
              {changelogEntries.map((entry, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-4">
                      <h2 className="h3 font-monospace">v{entry.version}</h2>
                      {getVersionBadge(entry.type)}
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Calendar className="w-4 h-4" />
                      <span>{entry.date}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {entry.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                          {getTypeIcon(change.type)}
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-bold text-text-muted mr-3">
                            {getTypeLabel(change.type)}
                          </span>
                          <span className="text-text-secondary">{change.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-secondary border border-border rounded-2xl p-8 mt-12 text-center">
              <h3 className="h4 mb-3">Stay Updated</h3>
              <p className="text-text-secondary mb-6">
                Subscribe to our newsletter to receive notifications about new releases and security updates.
              </p>
              <div className="flex gap-4 max-w-[500px] mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
                <button className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-8 py-3 transition-colors whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
