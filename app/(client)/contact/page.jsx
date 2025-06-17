import React from "react";
import ContactForm from "@/app/components/ContactForm";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

//old metadata
// export const metadata = {
//   title: "Contact Us",
//   description:
//     "Contact Tech Arena24: Your trusted source for expert tech news, reviews, comparisons, and top deals. Get to know our team and our commitment to quality tech information.",
// };

//new metadata
// app/contact/page.jsx (or wherever your Contact page lives)

export const metadata = {
  title: "Contact Us | Tech Arena24 – Expert Tech Support & Inquiries",
  description:
    "Have a question, feedback, or media inquiry? Reach out to Tech Arena24's expert team for advertising opportunities, press requests, or general support. We're here to help you get the best tech insights.",

  // Self-canonicalization
  alternates: {
    canonical: `${baseURL}/contact`,
  },

  // Open Graph for rich social previews
  openGraph: {
    title: "Contact Us | Tech Arena24",
    description:
      "Have a question, feedback, or media inquiry? Reach out to Tech Arena24's expert team for advertising opportunities, press requests, or general support. We're here to help you get the best tech insights.",
    url: `${baseURL}/contact`,
    siteName: "Tech Arena24",
    type: "website",
    images: [
      {
        url: `${baseURL}/images/contact-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Tech Arena24",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Tech Arena24",
    description:
      "Have a question, feedback, or media inquiry? Reach out to Tech Arena24's expert team for advertising opportunities, press requests, or general support. We're here to help you get the best tech insights.",
    images: [`${baseURL}/images/contact-og.jpg`],
    site: "@techarena24",
    creator: "@techarena24",
  },

  // Tell search engines to index & follow
  robots: {
    index: true,
    follow: true,
  },
};

//old schema
// const schema = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "Organization",
//       "@id": `${baseURL}/#organization`,
//       name: "Tech Arena24",
//       url: { baseURL },
//       logo: {
//         "@type": "ImageObject",
//         url: `${baseURL}/images/logoTa24.jpeg`,
//       },
//       contactPoint: {
//         "@type": "ContactPoint",
//         telephone: "+44-7349-006479",
//         contactType: "Technical Inquiry",
//         areaServed: "Worldwide",
//         availableLanguage: ["English"],
//       },
//       address: {
//         "@type": "PostalAddress",
//         streetAddress: "942 E 57th Avenue",
//         addressLocality: "Vancouver, BC",
//         postalCode: "V5X 1T5",
//         addressCountry: "Canada",
//       },
//       sameAs: [
//         "https://www.facebook.com/techarena24blog",
//         "https://x.com/techarena24blog",
//         "https://www.instagram.com/techarena24blog/",
//       ],
//     },
//     {
//       "@type": "WebPage",
//       "@id": `${baseURL}/#webpage`,
//       name: "Contact Us",
//       url: { baseURL },
//       description:
//         "Reach out to Tech Arena24 for expert tech help, media inquiries, or partnership opportunities. We're here to help.",
//       publisher: {
//         "@id": `${baseURL}/#organization`,
//       },
//     },
//   ],
// };

//new schema
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Your Site — ties every page back to the brand
    {
      "@type": "WebSite",
      "@id": `${baseURL}/#website`,
      url: baseURL,
      name: "Tech Arena24",
      publisher: { "@id": `${baseURL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseURL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // 2. Your Organization with two contact points
    {
      "@type": "Organization",
      "@id": `${baseURL}/#organization`,
      name: "Tech Arena24",
      url: baseURL,
      logo: {
        "@type": "ImageObject",
        url: `${baseURL}/images/logoTa24.jpeg`,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44-7349-006479",
          contactType: "Technical Inquiry",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+44-7349-006479",
          contactType: "Customer Service",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "942 E 57th Avenue",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5X 1T5",
        addressCountry: "CA",
      },
      sameAs: [
        "https://www.facebook.com/techarena24blog",
        "https://x.com/techarena24blog",
        "https://www.instagram.com/techarena24blog/",
      ],
    },

    // 3. The ContactPage itself
    {
      "@type": "ContactPage",
      "@id": `${baseURL}/contact#contactpage`,
      url: `${baseURL}/contact`,
      name: "Contact Us – Tech Arena24",
      description:
        "Have a question, feedback, or media inquiry? Reach out to Tech Arena24's expert team for advertising opportunities, press requests, or general support.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${baseURL}/#website` },
      about: { "@id": `${baseURL}/#organization` },
      publisher: { "@id": `${baseURL}/#organization` },
      breadcrumb: { "@id": `${baseURL}/contact#breadcrumbs` },
      mainEntity: {
        "@id": `${baseURL}/#organization`,
      },
      potentialAction: {
        "@type": "ContactAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseURL}/contact#form`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/AndroidPlatform",
            "http://schema.org/iOSPlatform",
          ],
        },
      },
    },

    // 4. Breadcrumbs: Home → Contact
    {
      "@type": "BreadcrumbList",
      "@id": `${baseURL}/contact#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseURL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: `${baseURL}/contact`,
        },
      ],
    },
  ],
};

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ContactForm />
    </>
  );
}

export default page;
