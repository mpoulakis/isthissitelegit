import SiteReport from "@/components/SiteReport";
import { Helmet } from "react-helmet";

export default function IsThisSiteLegitBlueskyPsychiatrists() {
  return (
    <>
      <Helmet>
        <title>Is this site legit: https://www.blueskypsychiatrists.com/ – IsThisSiteLegit.com</title>
      </Helmet>
      <SiteReport
        domain="blueskypsychiatrists.com"
        url="https://www.blueskypsychiatrists.com/"
        title="Is this site legit: https://www.blueskypsychiatrists.com/"
        verdict="This site appears to be legitimate. It represents a verified medical practice with a professional online presence and valid credentials."
        score={92}
        risk="low"
        positiveSigns={[
          "Domain has been registered for over 8 years",
          "Verified physical business address and phone number",
          "Professional medical licensing information is visible",
          "Positive reviews on independent healthcare platforms"
        ]}
        redFlags={[
          "None detected"
        ]}
        guidelines={[
          "Standard online safety practices apply.",
          "Verify appointment details via phone if unsure.",
          "Check insurance compatibility before booking."
        ]}
        lastUpdated="December 05, 2023"
      />
    </>
  );
}
