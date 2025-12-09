import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-12 md:py-20">
      <Helmet>
        <title>Terms of Service – IsThisSiteLegit.com</title>
      </Helmet>
      <div className="container max-w-3xl prose dark:prose-invert">
        <h1>Terms of Service</h1>
        <p className="lead">Last updated: December 09, 2025</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using IsThisSiteLegit.com ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>

        <h2>2. Use of the Site</h2>
        <p>
          You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Website.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws and are owned by IsThisSiteLegit.com, unless otherwise stated. You may not reproduce, download, transmit, or re-use any material from the website for commercial purposes without prior written permission.
        </p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          The Website is provided "as is". IsThisSiteLegit.com and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither IsThisSiteLegit.com nor its suppliers and licensors, makes any warranty that the Website will be error free or that access thereto will be continuous or uninterrupted.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event will IsThisSiteLegit.com, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          IsThisSiteLegit.com reserves the right, at its sole discretion, to modify or replace any part of this Agreement. It is your responsibility to check this Agreement periodically for changes. Your continued use of or access to the Website following the posting of any changes to this Agreement constitutes acceptance of those changes.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the company is based and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  );
}
