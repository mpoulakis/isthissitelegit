import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-12 md:py-20">
      <Helmet>
        <title>Privacy Policy – IsThisSiteLegit.com</title>
      </Helmet>
      <div className="container max-w-3xl prose dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: December 09, 2025</p>
        
        <p>
          At IsThisSiteLegit.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect minimal information to provide our services:
        </p>
        <ul>
          <li><strong>URLs Checked:</strong> We log the URLs you submit for analysis to improve our database and scam detection algorithms.</li>
          <li><strong>Usage Data:</strong> We use basic analytics to understand how visitors interact with our site (e.g., pages visited, time spent).</li>
          <li><strong>Contact Information:</strong> If you contact us via email or our contact form, we collect your name and email address to respond to your inquiry.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the collected data for the following purposes:
        </p>
        <ul>
          <li>To provide and maintain our website and services.</li>
          <li>To improve our scam detection accuracy.</li>
          <li>To monitor usage trends and detect technical issues.</li>
          <li>To communicate with you regarding your inquiries.</li>
        </ul>

        <h2>3. Cookies and Tracking</h2>
        <p>
          We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect some site functionality.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We may use third-party services for analytics (e.g., Google Analytics) or affiliate links. These third parties have their own privacy policies, and we encourage you to review them.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@isthissitelegit.com.
        </p>
      </div>
    </div>
  );
}
