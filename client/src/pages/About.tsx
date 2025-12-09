import { Shield, CheckCircle, Users, Lock } from "lucide-react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="bg-slate-50/50 dark:bg-slate-950/50 min-h-screen py-12 md:py-20">
      <Helmet>
        <title>About Us – IsThisSiteLegit.com</title>
      </Helmet>
      <div className="container max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About IsThisSiteLegit.com</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our mission is to help you navigate the web safely and avoid scams, fraud, and risky websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why we started</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              The internet is becoming increasingly difficult to navigate. With the rise of AI-generated scam sites, dropshipping fraud, and sophisticated phishing attacks, it's harder than ever to know who to trust.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              We built IsThisSiteLegit.com to provide a quick, independent, and data-driven "second opinion" before you click "buy" or share your personal information.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Independent & Unbiased</h3>
                <p className="text-sm text-muted-foreground">We are not sponsored by the sites we review.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Community Driven</h3>
                <p className="text-sm text-muted-foreground">We combine technical signals with real user reports.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Privacy First</h3>
                <p className="text-sm text-muted-foreground">We don't track your browsing history or sell your data.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">What we check</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Domain Age & Registration",
              "SSL/TLS Encryption Status",
              "Server Location & Hosting",
              "Presence of Contact Info",
              "Social Media Footprint",
              "Independent User Reviews",
              "Blacklist Status",
              "Website Content Uniqueness",
              "Return & Refund Policies"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                <CheckCircle className="h-5 w-5 text-success shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
