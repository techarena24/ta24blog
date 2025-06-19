// pages/privacy-policy.jsx
import Head from "next/head";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Tech Arena24</title>
        <meta
          name="description"
          content="Privacy policy for Tech Arena24 tech news blog. Learn how we collect, use, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${baseURL}/privacy-policy`} />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - Tech Arena24" />
        <meta
          property="og:description"
          content="Privacy policy for Tech Arena24 tech news blog. Learn how we collect, use, and protect your personal information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseURL}/privacy-policy`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - Tech Arena24" />
        <meta
          name="twitter:description"
          content="Privacy policy for Tech Arena24 tech news blog. Learn how we collect, use, and protect your personal information."
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy - Tech Arena24",
              url: `${baseURL}/privacy-policy`,
              description:
                "Privacy policy for Tech Arena24 tech news blog. Learn how we collect, use, and protect your personal information.",
              mainEntity: {
                "@type": "PrivacyPolicy",
                name: "Privacy Policy",
                effectiveDate: "2025-06-19",
                publisher: {
                  "@type": "Organization",
                  name: "Tech Arena24",
                  url: { baseURL },
                },
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective date: June 19, 2025</p>
        <p className="mb-6">
          Tech Arena24 ("we", "us", or "our") operates {" " + baseURL} (the
          "Service"). This page informs you of our policies regarding the
          collection, use, and disclosure of personal data when you use our
          Service and the choices you have associated with that data.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
          <p className="mb-2">
            When you contact us through our contact form, we collect:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Name:</strong> to address you properly.
            </li>
            <li>
              <strong>Email address:</strong> to respond to your inquiries.
            </li>
            <li>
              <strong>Phone number:</strong> optionally, if you prefer a call.
            </li>
          </ul>
          <p>
            We may collect additional information you provide in free-text
            fields.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Cookies and Tracking Technologies
          </h2>
          <p className="mb-2">
            We use cookies and similar tracking technologies to track activity
            on our Service and hold certain information.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Essential cookies:</strong> necessary for the website to
              function.
            </li>
            <li>
              <strong>Analytics cookies:</strong> provided by Google Analytics
              to help us understand user behavior.
            </li>
            <li>
              <strong>Advertising cookies:</strong> used by Google AdSense to
              personalize ads. AdSense manages its own cookies; we do not access
              those cookies directly.
            </li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Use of Data</h2>
          <p className="mb-2">
            We use the collected data for various purposes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>To provide and maintain our Service.</li>
            <li>To respond to your inquiries and requests.</li>
            <li>To monitor usage of our Service.</li>
            <li>To detect, prevent, and address technical issues.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Third-Party Services</h2>
          <p className="mb-2">
            We may employ third-party companies and individuals to facilitate
            our Service:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Google Analytics:</strong> for tracking and reporting
              website traffic.
            </li>
            <li>
              <strong>Google AdSense:</strong> for displaying ads. AdSense sets
              its own cookies on users' browsers and manages data collection.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Data Security</h2>
          <p className="mb-4">
            We take reasonable measures to protect your personal information but
            cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Links to Other Sites</h2>
          <p className="mb-4">
            Our Service may contain links to other sites not operated by us. We
            have no control over their content or practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Children's Privacy</h2>
          <p className="mb-4">
            Our Service is not intended for children under 13. We do not
            knowingly collect personal data from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:techarenaz24@gmail.com"
              className="text-blue-600 underline"
            >
              privacy@techarena24.com
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}
