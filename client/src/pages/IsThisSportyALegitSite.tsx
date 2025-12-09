import SiteReport from "@/components/SiteReport";
import { Helmet } from "react-helmet";

export default function IsThisSportyALegitSite() {
  return (
    <>
      <Helmet>
        <title>Is this sporty a legit site? – IsThisSiteLegit.com</title>
      </Helmet>
      <SiteReport
        domain="sporty.com"
        url="https://sporty.com"
        title="Is this sporty a legit site?"
        verdict="This site has mixed signals. Some aspects look legitimate, while others raise concerns. Here’s what we’ve found."
        score={55}
        risk="medium"
        positiveSigns={[
          "Domain has been registered for over 5 years",
          "Uses valid HTTPS encryption",
          "Active social media presence found"
        ]}
        redFlags={[
          "Recent customer reviews mention shipping delays",
          "Return policy is strict and difficult to find",
          "Customer support is email-only (no phone)"
        ]}
        guidelines={[
          "Use a credit card for payment protection.",
          "Read the return policy carefully before buying.",
          "Check recent reviews on third-party sites."
        ]}
        lastUpdated="October 24, 2023"
      />
    </>
  );
}
