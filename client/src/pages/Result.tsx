import { useLocation } from "wouter";
import { Shield, AlertTriangle, CheckCircle, AlertCircle, ExternalLink, ArrowRight, Search } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";

export default function Result() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const urlParam = searchParams.get("url");
  
  // Basic validation and domain extraction
  let domain = "";
  let isValidUrl = false;
  
  try {
    if (urlParam) {
      const urlObj = new URL(urlParam.startsWith('http') ? urlParam : `https://${urlParam}`);
      domain = urlObj.hostname.replace('www.', '');
      isValidUrl = true;
    }
  } catch (e) {
    isValidUrl = false;
  }

  // Mock Data
  const mockReport = {
    score_0_100: 62,
    risk: "medium",
    looks_ok: [
      "Uses HTTPS encryption",
      "Website has been online for more than 2 years",
      "Valid SSL certificate detected"
    ],
    red_flags: [
      "Very few independent reviews found",
      "Unclear returns policy",
      "Contact information is hidden or generic"
    ],
    guidelines: [
      "Prefer paying with a credit card so you can dispute charges.",
      "Avoid very large first orders from unfamiliar sites.",
      "Check for a physical address on the contact page."
    ],
    conclusion: "We see a mix of positive signs and potential concerns. Proceed with caution and always do your own research before making a purchase.",
    similar_sites: [
      { name: "Amazon", desc: "Global trusted marketplace", url: "https://amazon.com" },
      { name: "eBay", desc: "Established auction site", url: "https://ebay.com" },
      { name: "Etsy", desc: "Handmade & vintage goods", url: "https://etsy.com" }
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-success";
    if (score >= 40) return "text-warning";
    return "text-danger";
  };

  const getScoreBg = (score: number) => {
    if (score >= 70) return "bg-success";
    if (score >= 40) return "bg-warning";
    return "bg-danger";
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

  if (!urlParam || !isValidUrl) {
    return (
      <div className="container py-20 text-center max-w-lg mx-auto">
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Invalid or Missing URL</h1>
          <p className="text-muted-foreground mb-6">Please go back to the homepage and enter a valid URL to analyze.</p>
          <Link href="/">
            <div className={buttonVariants({ variant: "default" })}>Back to Home</div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950/50 min-h-screen pb-20">
      {/* Header / Title Section */}
      <div className="bg-white dark:bg-slate-900 border-b py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <Shield className="h-4 w-4" />
                <span>Security Report</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold break-all">
                Result for <span className="text-primary">{domain}</span>
              </h1>
              <p className="text-muted-foreground mt-2 break-all max-w-2xl">
                {urlParam}
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
                        className={`${getScoreColor(mockReport.score_0_100)} stroke-current transition-all duration-1000 ease-out`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray={`${mockReport.score_0_100 * 2.51} 251.2`}
                      ></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-4xl font-bold ${getScoreColor(mockReport.score_0_100)}`}>
                        {mockReport.score_0_100}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase font-medium">Score</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left space-y-3">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <h2 className="text-2xl font-bold">Trust Analysis</h2>
                      {getRiskBadge(mockReport.risk)}
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      {mockReport.conclusion}
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
                    {mockReport.looks_ok.map((item, i) => (
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
                    {mockReport.red_flags.map((item, i) => (
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
                  {mockReport.guidelines.map((item, i) => (
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
            
            {/* Similar Sites */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Trusted Alternatives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  These are suggestions based on general reputation. Always do your own research.
                </p>
                {mockReport.similar_sites.map((site, i) => (
                  <div key={i} className="p-3 rounded-lg border bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm">{site.name}</h4>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{site.desc}</p>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium hover:underline">
                      Visit site
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

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

          </div>
        </div>
      </div>
    </div>
  );
}
