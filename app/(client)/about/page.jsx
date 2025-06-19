import React from "react";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

//new metadata
export const metadata = {
  title: "About Us | Tech Arena24 – Our Story & Team",
  description:
    "Learn about Tech Arena24’s mission, editorial team, and commitment to delivering unbiased tech news, in-depth reviews, and the best gadget deals. Meet the experts behind your favorite tech site.",

  // Self-canonical URL
  alternates: {
    canonical: `${baseURL}/about`,
  },

  // SEO-focused keywords and authors
  keywords: [
    "Tech Arena24",
    "About Tech Arena24",
    "Tech News Team",
    "Tech Reviews",
    "Gadget Deals",
  ],
  authors: [
    {
      name: "Tech Arena24 Editorial Team",
      url: `${baseURL}/about`,
    },
  ],

  // Open Graph for rich social previews
  openGraph: {
    title: "About Us | Tech Arena24",
    description:
      "Discover Tech Arena24’s journey, editorial philosophy, and the team that brings you the latest in tech news, reviews, and deals.",
    url: `${baseURL}/about`,
    siteName: "Tech Arena24",
    type: "website",
    images: [
      {
        url: "https://techarena24.com/images/about-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meet the Tech Arena24 Team",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "About Us | Tech Arena24",
    description:
      "Get to know Tech Arena24’s mission, values, and the expert team behind your go-to tech news, reviews, and deals.",
    images: [`${baseURL}/images/about-us-og.jpg`],
    site: "@techarena24",
    creator: "@techarena24",
  },

  // Guide search engines to index & follow
  robots: {
    index: true,
    follow: true,
  },
};

//new schema
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Your website entity
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

    // 2. Your organization with founders, contact points, etc.
    {
      "@type": "Organization",
      "@id": `${baseURL}/#organization`,
      name: "Tech Arena24",
      url: baseURL,
      logo: {
        "@type": "ImageObject",
        url: `${baseURL}/images/logoTa24.jpeg`,
      },
      foundingDate: "2018-06-01",
      founders: [
        {
          "@type": "Person",
          "@id": `${baseURL}/#person-marvellous`,
          name: "Marvellous Ayomike",
          description: "Co-founder of Tech Arena24",
        },
        {
          "@type": "Person",
          "@id": `${baseURL}/#person-festus`,
          name: "Festus Ayomike",
          description: "Co-founder of Tech Arena24",
        },
      ],
      description:
        "Tech Arena24 is a mobile phone tech blog offering reviews, comparisons, and pre-order services. Owned and operated by two brothers from South-South Nigeria.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "942 E 57th Avenue",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5X 1T5",
        addressCountry: "CA",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44-734-900-6479",
          contactType: "Technical Inquiry",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+44-734-900-6479",
          contactType: "Customer Service",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/techarena24blog",
        "https://x.com/techarena24blog",
        "https://www.instagram.com/techarena24blog/",
      ],
    },

    // 3. The About page as an AboutPage
    {
      "@type": "AboutPage",
      "@id": `${baseURL}/about#aboutpage`,
      url: `${baseURL}/about`,
      name: "About Us – Tech Arena24",
      description:
        "Learn about Tech Arena24’s mission, editorial philosophy, and meet the expert team behind your go-to source for tech news, reviews, and deals.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${baseURL}/#website` },
      about: { "@id": `${baseURL}/#organization` },
      publisher: { "@id": `${baseURL}/#organization` },
      mainEntity: { "@id": `${baseURL}/#organization` },
      breadcrumb: { "@id": `${baseURL}/about#breadcrumbs` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseURL}/images/about-banner.jpg`,
        width: 1200,
        height: 628,
        alt: "Tech Arena24 Team",
      },
    },

    // 4. Breadcrumb trail for Home → About
    {
      "@type": "BreadcrumbList",
      "@id": `${baseURL}/about#breadcrumbs`,
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
          name: "About",
          item: `${baseURL}/about`,
        },
      ],
    },
  ],
};

function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div>
        <h1 className=" font-semibold text-2xl my-8">About</h1>
        <div className=" space-y-6 mb-10">
          <p>
            Tech Arena24 is a Mobile phone tech blog that is owned and managed
            by two brothers. The main aim of Tech Arena24 is to help people make
            choices with regard to buying a phone that suits their needs and
            meets their budget. The long-term goal of Tech Arena24 is to be able
            to build tools that enable other businesses to thrive online. But
            for now, we're focused on online and affiliate marketing.
          </p>
          <p>
            At Tech Arena24 you can be sure to get only the best real updates
            about phone reviews, phone comparisons, and official prices. Phone
            launch events and phone-related news updates. Below is a list of
            things we do here at Tech Arena24
          </p>
          <div>
            <h2 className=" text-[20px] font-bold mb-4">
              What we do at Tech Arena24
            </h2>
            <div className=" space-y-4 pl-6">
              <li>Phone Pre-order</li>
              <li>Phone reviews</li>
              <li>Comparison of Phones</li>
              <li>Live updates from Phone events</li>
              <li>Programming Tools for Business Growth (Long-term goal)</li>
            </div>
          </div>
          <div>
            <h3 className=" text-lg font-bold mb-6">Phone Pre-order</h3>
            <div className=" space-y-4">
              <p>
                Usually, just before a new phone hits the market, the company
                allows users to pre-order the phone. At Tech Arena24, we have
                access to top Mobile Tech companies like Pointek, Slot, Infinix,
                Tecno, etc. We can pre-order a new phone for you and you get to
                be among the very first persons to use the phone in the country.
              </p>
              <p>
                All pre-ordered phones will be delivered to the address given to
                us. Here is something interesting for you, we get to buy the
                phone at a very cheap price because we'll be getting it for you
                at a retail price.
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-lg font-bold mb-6">Phone Reviews</h3>
            <div>
              <p>
                We also give the latest updates on phones and review these
                phones. Our reviews are unbiased and these reviews will better
                help you in making decisions related to buying any phone.
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-lg font-bold mb-6">Phone Comparisons</h3>
            <div>
              <p>
                Have you ever been confused about buying two phones? Well, we
                think this is a very common confusion related to phone users.
                Don't worry we got you covered. We make comparison videos that
                will enable better know which phone is best for you.
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-lg font-bold mb-6">
              Live Updates from Phone events
            </h3>
            <div>
              <p>
                Be it phone launch events or party events, Tech Arena24 will
                always bring you to live updates as its happening. You can join
                our YouTube Channel now to be getting all the live updates as
                they drop.
              </p>
            </div>
          </div>
          <div>
            <h3 className=" text-lg font-bold mb-6">Team Tech Arena24</h3>
            <div>
              <p>
                Tech Arena24 is owned and managed by two brothers from
                South-South Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
