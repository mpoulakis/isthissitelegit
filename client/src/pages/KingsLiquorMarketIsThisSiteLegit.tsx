import SiteReport from "@/components/SiteReport";
import { Helmet } from "react-helmet";

export default function KingsLiquorMarketIsThisSiteLegit() {
  return (
    <>
      <Helmet>
        <title>kingsliquormarket.com – is this site legit? – IsThisSiteLegit.com</title>
      </Helmet>
      <SiteReport
        domain="kingsliquormarket.com"
        url="https://kingsliquormarket.com"
        title="kingsliquormarket.com – is this site legit?"
        verdict="We advise extreme caution. This site exhibits multiple characteristics common to scam websites, including hidden ownership and template design."
        score={28}
        risk="high"
        positiveSigns={[
          "Site uses HTTPS encryption"
        ]}
        redFlags={[
          "Domain was registered very recently (less than 6 months)",
          "Contact address appears to be a residential location",
          "Content and images are copied from other known sites",
          "Prices are unrealistically low compared to competitors"
        ]}
        guidelines={[
          "Do not provide credit card information to this site.",
          "If you have already purchased, contact your bank immediately.",
          "Report this site to consumer protection agencies."
        ]}
        lastUpdated="November 12, 2023"
      />
    </>
  );
}
