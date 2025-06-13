import React from "react";
import ContactForm from "@/app/components/ContactForm";
import Head from "next/head";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Tech Arena24: Your trusted source for expert tech news, reviews, comparisons, and top deals. Get to know our team and our commitment to quality tech information.",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseURL}/#organization`,
      name: "Tech Arena24",
      url: { baseURL },
      logo: {
        "@type": "ImageObject",
        url: `${baseURL}/images/logoTa24.jpeg`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+44-7349-006479",
        contactType: "Technical Inquiry",
        areaServed: ["GB", "US", "CA"],
        availableLanguage: ["English"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lewisham Shopping Centre",
        addressLocality: "London",
        postalCode: "SE13 7EP",
        addressCountry: "GB",
      },
      sameAs: [
        "https://www.facebook.com/techarena24blog",
        "https://x.com/techarena24blog",
        "https://www.instagram.com/techarena24blog/",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${baseURL}/#webpage`,
      name: "Contact Us",
      url: { baseURL },
      description:
        "Reach out to Tech Arena24 for expert tech help, media inquiries, or partnership opportunities. We're here to help.",
      publisher: {
        "@id": `${baseURL}/#organization`,
      },
    },
  ],
};

function page() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <ContactForm />
    </>
  );
}

export default page;
