import SiteReport from "@/components/SiteReport";
import { Helmet } from "react-helmet";

export default function DiscreetCrushIsThisDatingSiteLegit() {
  return (
    <>
      <Helmet>
        <title>discreetcrush – is this dating site legit? – IsThisSiteLegit.com</title>
      </Helmet>
      <SiteReport
        domain="discreetcrush.com"
        url="https://discreetcrush.com"
        title="discreetcrush – is this dating site legit?"
        verdict="High risk detected. Numerous user reports indicate potential bot activity, hidden fees, and difficulty cancelling subscriptions."
        score={35}
        risk="high"
        positiveSigns={[
          "Site uses HTTPS encryption",
          "Clear terms of service (though restrictive)"
        ]}
        redFlags={[
          "Aggressive upsell tactics reported by users",
          "Profiles appear generic or AI-generated",
          "Company ownership is hidden behind a shell corporation",
          "Very difficult to contact support for refunds"
        ]}
        guidelines={[
          "Avoid using your primary credit card; use a prepaid card if necessary.",
          "Read the fine print regarding recurring billing carefully.",
          "Consider using more established and reputable dating platforms."
        ]}
        lastUpdated="January 15, 2024"
      />
    </>
  );
}
