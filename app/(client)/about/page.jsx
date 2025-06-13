import React from "react";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "About Us",
  description:
    "About Tech Arena24: Your trusted source for expert tech news, reviews, comparisons, and top deals. Get to know our team and our commitment to quality tech information.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tech Arena24",
  url: { baseURL },
  logo: `${baseURL}/images/logoTa24.jpeg`,
  founders: [
    {
      "@type": "Person",
      name: "Marvellous Ayomike",
      description: "Co-founder of Tech Arena24",
    },
    {
      "@type": "Person",
      name: "Festus Ayomike",
      description: "Co-founder of Tech Arena24",
    },
  ],
  description:
    "Tech Arena24 is a mobile phone tech blog offering reviews, comparisons, and pre-order services. Owned and managed by two brothers from South-South Nigeria.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "942 E 57th Avenue",
    addressLocality: "Vancouver, BC",
    postalCode: "V5X 1T5",
    addressCountry: "Canada",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-7349-006479",
    contactType: "Technical Inquiry",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.facebook.com/techarena24blog",
    "https://x.com/techarena24blog",
    "https://www.instagram.com/techarena24blog/",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${baseURL}/about`,
  },
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
