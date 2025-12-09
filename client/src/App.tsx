import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Result from "./pages/Result";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";

// Static Report Pages
import IsThisSportyALegitSite from "./pages/IsThisSportyALegitSite";
import KingsLiquorMarketIsThisSiteLegit from "./pages/KingsLiquorMarketIsThisSiteLegit";
import IsThisSiteLegitBlueskyPsychiatrists from "./pages/IsThisSiteLegitBlueskyPsychiatrists";
import DiscreetCrushIsThisDatingSiteLegit from "./pages/DiscreetCrushIsThisDatingSiteLegit";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/about" component={About} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/contact" component={Contact} />
        
        {/* Legal Pages */}
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/terms" component={Terms} />
        
        {/* Static Report Pages */}
        <Route path="/is-this-sporty-a-legit-site" component={IsThisSportyALegitSite} />
        <Route path="/kingsliquormarket-is-this-site-legit" component={KingsLiquorMarketIsThisSiteLegit} />
        <Route path="/is-this-site-legit-blueskypsychiatrists" component={IsThisSiteLegitBlueskyPsychiatrists} />
        <Route path="/discreetcrush-is-this-dating-site-legit" component={DiscreetCrushIsThisDatingSiteLegit} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
