import { Shield, AlertTriangle, CheckCircle, AlertCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface SiteReportProps {
  domain: string;
  url: string;
  title: string;
  verdict: string;
  score: number;
  risk: "low" | "medium" | "high";
  positiveSigns: string[];
  redFlags: string[];
  guidelines: string[];
  lastUpdated: string;
}

export default function SiteReport({
  domain,
  url,
  title,
  verdict,
  score,
  risk,
  positiveSigns,
  redFlags,
  guidelines,
  lastUpdated
}: SiteReportProps) {

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-success";
    if (score >= 40) return "text-warning";
    return "text-danger";
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low": 
        return <span className="px-3 py-1 rounded-full bg-success/10 text-success border border-success/20 font-bold text-sm flex items-center gap-1"><CheckCircle className="h-4 w-4"/> LOW RISK</span>;
      case "medium": 
        return <span className="px-3 py-1 rounded-full bg-warning/10 text-warning border border-warning/20 font-bold text-sm flex items-center gap-1"><AlertTriangle className="h-4 w-4"/> MEDIUM RISK</span>;
      case "high": 
        return <span className="px-3 py-1 rounded-full bg-danger/10 text-danger border border-danger/20 font-bold text-sm flex items-center gap-1"><AlertCircle className="h-4 w-4"/> HIGH RISK</span>;
      default: return null;
    }
  };

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950/50 min-h-screen pb-20">
      {/* Header / Title Section */}
      <div className="bg-white dark:bg-slate-900 border-b py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <Shield className="h-4 w-4" />
                <span>Static Analysis Report</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold break-all max-w-3xl">
                {title}
              </h1>
              <p className="text-muted-foreground mt-2 break-all max-w-2xl">
                Target: <a href={url} target="_blank" rel="noreferrer" className="hover:underline">{url}</a>
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/">
                <div className={buttonVariants({ variant: "outline" })}>Check Another</div>
              </Link>
              <Button>Install Extension</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Analysis Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Score Card */}
            <Card className="overflow-hidden border-t-4 border-t-warning shadow-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative flex items-center justify-center h-32 w-32 shrink-0">
                    <svg className="h-full w-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="text-slate-100 dark:text-slate-800 stroke-current"
                        strokeWidth="8"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                      ></circle>
                      <circle
                        className={`${getScoreColor(score)} stroke-current`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray={`${score * 2.51} 251.2`}
                      ></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-4xl font-bold ${getScoreColor(score)}`}>
                        {score}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase font-medium">Score</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left space-y-3">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <h2 className="text-2xl font-bold">Verdict</h2>
                      {getRiskBadge(risk)}
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      {verdict}
                    </p>
                    <p className="text-xs text-muted-foreground pt-2">
                      Last updated: {lastUpdated}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Positive Signs */}
              <Card className="border-l-4 border-l-success shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <CheckCircle className="h-5 w-5" />
                    Positive Signs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {positiveSigns.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Red Flags */}
              <Card className="border-l-4 border-l-danger shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-danger">
                    <AlertCircle className="h-5 w-5" />
                    Red Flags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {redFlags.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-danger shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Guidelines */}
            <Card className="bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                  <Shield className="h-5 w-5" />
                  Safety Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {guidelines.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            
            {/* Promo Card */}
            <Card className="bg-slate-900 text-white border-none shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
              <CardHeader>
                <CardTitle className="text-lg text-white">Get Real-time Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-sm text-slate-300">
                  Stop copying and pasting URLs. Our browser extension checks every site you visit automatically.
                </p>
                <Button variant="secondary" className="w-full font-semibold">
                  Add to Chrome
                </Button>
              </CardContent>
            </Card>

            <div className="text-center">
               <Link href="/">
                 <div className={buttonVariants({ variant: "ghost", className: "w-full" })}>Check another site</div>
               </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
