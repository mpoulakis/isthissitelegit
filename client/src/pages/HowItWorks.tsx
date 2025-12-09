import { Search, Server, FileText, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "1. Input a URL",
      desc: "Paste the link of the website or product page you want to check into our search bar. Or use our browser extension to check automatically."
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "2. We Analyze Signals",
      desc: "Our system scans the site for technical indicators like domain age, SSL validity, server reputation, and code structure."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "3. We Check Reputation",
      desc: "We cross-reference the domain with blacklists, review platforms, and social media to see what real people are saying."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "4. You Get a Verdict",
      desc: "We provide a simple Trust Score (0-100) along with a breakdown of positive signs, red flags, and safety guidelines."
    }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950/50 min-h-screen py-12 md:py-20">
      <Helmet>
        <title>How It Works – IsThisSiteLegit.com</title>
      </Helmet>
      <div className="container max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">How It Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine automated technical analysis with human-verified data to give you a clear picture of a website's safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Important Disclaimer</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            No tool is perfect. Scammers are constantly evolving. Our score is an opinion based on available data, not a guarantee of safety.
          </p>
          <p className="font-medium text-primary">
            Always double-check and use your own judgment before making a purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
