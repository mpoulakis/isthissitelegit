import { useState } from "react";
import { useLocation, Link } from "wouter";
import { Search, Shield, AlertTriangle, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Home() {
  const [, setLocation] = useLocation();
  const [url, setUrl] = useState("");
  const [isHuman, setIsHuman] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast.error("Please enter a URL to check");
      return;
    }
    
    if (!isHuman) {
      toast.error("Please confirm you are human");
      return;
    }

    setIsLoading(true);
    
    // Simulate processing delay for better UX
    setTimeout(() => {
      const encodedUrl = encodeURIComponent(url);
      setLocation(`/result?url=${encodedUrl}`);
    }, 800);
  };

  const latestReports = [
    {
      title: "Is this sporty a legit site?",
      domain: "sporty.com", // Hypothetical
      summary: "Mixed signals found. While the domain is old, recent reviews suggest shipping delays.",
      link: "/is-this-sporty-a-legit-site",
      risk: "medium"
    },
    {
      title: "kingsliquormarket.com – is this site legit?",
      domain: "kingsliquormarket.com",
      summary: "Potential scam alert. The site lacks clear ownership info and uses a template design.",
      link: "/kingsliquormarket-is-this-site-legit",
      risk: "high"
    },
    {
      title: "Is this site legit: blueskypsychiatrists.com",
      domain: "blueskypsychiatrists.com",
      summary: "Appears legitimate. Valid SSL, professional presence, and verifiable contact info.",
      link: "/is-this-site-legit-blueskypsychiatrists",
      risk: "low"
    },
    {
      title: "discreetcrush – is this dating site legit?",
      domain: "discreetcrush.com",
      summary: "High risk. Many user reports of bot activity and difficult cancellation policies.",
      link: "/discreetcrush-is-this-dating-site-legit",
      risk: "high"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-success border-success/20 bg-success/5";
      case "medium": return "text-warning border-warning/20 bg-warning/5";
      case "high": return "text-danger border-danger/20 bg-danger/5";
      default: return "text-muted-foreground";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "low": return <CheckCircle className="h-4 w-4" />;
      case "medium": return <AlertTriangle className="h-4 w-4" />;
      case "high": return <AlertTriangle className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white z-10 dark:from-slate-950/80 dark:to-background"></div>
          <img 
            src="/images/hero-bg.jpg" 
            alt="Security Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Shield className="h-4 w-4" />
            <span>Trusted by over 10,000 users daily</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Is this site <span className="text-primary">legit?</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Input your URL and we’ll analyze it for risk. If you’re looking at a product page, paste the full URL, not just the domain.
          </p>

          <Card className="max-w-2xl mx-auto border-2 shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="url" 
                    placeholder="https://example.com/product/123" 
                    className="pl-10 h-12 text-lg bg-white dark:bg-slate-950"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="human-check" 
                      checked={isHuman}
                      onCheckedChange={(checked) => setIsHuman(checked as boolean)}
                    />
                    <Label htmlFor="human-check" className="text-sm font-medium cursor-pointer">
                      I am a human (no bots allowed)
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto font-semibold text-base px-8"
                    disabled={isLoading}
                  >
                    {isLoading ? "Analyzing..." : "Check if this site is legit"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Reports Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Latest Reports</h2>
            <Link href="/latest">
              <span className="text-primary font-medium hover:underline flex items-center gap-1 cursor-pointer">
                View all <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestReports.map((report, index) => (
              <Link key={index} href={report.link}>
                <div className="block h-full group cursor-pointer">
                  <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-slate-200 dark:border-slate-800">
                    <CardHeader className="pb-3">
                      <div className={`w-fit px-2 py-1 rounded text-xs font-medium flex items-center gap-1 mb-2 ${getRiskColor(report.risk)}`}>
                        {getRiskIcon(report.risk)}
                        {report.risk.toUpperCase()} RISK
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {report.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {report.summary}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0 text-xs text-muted-foreground flex items-center gap-1 mt-auto">
                      Read full report <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardFooter>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Promo Section */}
      <section className="py-20 border-t">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl blur-xl opacity-70"></div>
              <img 
                src="/images/analysis-concept.jpg" 
                alt="Browser Extension Preview" 
                className="relative rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                <ExternalLink className="h-3 w-3" />
                <span>Browser Extension</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Stay safe while you browse</h2>
              <p className="text-lg text-muted-foreground">
                Don't want to copy-paste URLs? Install our free Chrome extension to check site reputation automatically as you browse. Get instant alerts before you enter sensitive information.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time scam detection",
                  "One-click safety reports",
                  "Privacy-focused (we don't track history)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button size="lg" className="gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" alt="Chrome" className="h-5 w-5" />
                  Add to Chrome - It's Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
