import { Helmet } from "react-helmet";

export default function Disclaimer() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-12 md:py-20">
      <Helmet>
        <title>Disclaimer – IsThisSiteLegit.com</title>
      </Helmet>
      <div className="container max-w-3xl prose dark:prose-invert">
        <h1>Disclaimer</h1>
        <p className="lead">Last updated: December 09, 2025</p>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6 not-prose">
          <p className="text-yellow-800 dark:text-yellow-200 font-medium m-0">
            The information provided on IsThisSiteLegit.com is for general informational purposes only.
          </p>
        </div>

        <h2>1. No Professional Advice</h2>
        <p>
          The content on this website does not constitute legal, financial, or professional security advice. Our "Trust Scores" and verdicts are opinions based on automated signals and available public data. They should not be the sole basis for your decisions.
        </p>

        <h2>2. No Guarantees</h2>
        <p>
          While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website.
        </p>
        <p>
          A "Low Risk" score does not guarantee that a website is 100% safe, and a "High Risk" score does not definitively prove a site is a scam. Scammers are constantly evolving their tactics.
        </p>

        <h2>3. Limitation of Liability</h2>
        <p>
          In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        </p>

        <h2>4. External Links</h2>
        <p>
          Through this website, you are able to link to other websites which are not under the control of IsThisSiteLegit.com. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
        </p>

        <h2>5. User Responsibility</h2>
        <p>
          You are solely responsible for your own due diligence. Always verify information independently before making financial transactions or sharing personal information online.
        </p>
      </div>
    </div>
  );
}
