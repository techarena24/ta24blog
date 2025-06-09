"use client";
import Head from "next/head";

const DeviceSchemaHead = ({ device, baseURL, metaDataImage, description }) => {
  //   const schema = {
  //     "@context": "https://schema.org",
  //     "@graph": [
  //       {
  //         "@type": "BlogPosting",
  //         headline: device.title,
  //         description,
  //         author: {
  //           "@type": "Person",
  //           name: device.author,
  //           url: baseURL,
  //         },
  //         datePublished: device.publishedAt,
  //         image: [metaDataImage],
  //         mainEntityOfPage: {
  //           "@type": "WebPage",
  //           "@id": `${baseURL}/${device.slug}`,
  //         },
  //         publisher: {
  //           "@type": "Organization",
  //           name: "Tech Arena24",
  //           logo: {
  //             "@type": "ImageObject",
  //             url: `${baseURL}/images/logoTa24.jpeg`,
  //           },
  //         },
  //         articleSection:
  //           device.categories?.map((cat) => cat.title).join(", ") ||
  //           "Uncategorized",
  //         inLanguage: "en",
  //         isAccessibleForFree: true,
  //         speakable: {
  //           "@type": "SpeakableSpecification",
  //           cssSelector: [".post-title", ".post-summary"],
  //         },
  //       },
  //       {
  //         "@type": "Product",
  //         name: device.title,
  //         image: [metaDataImage],
  //         description,
  //         sku: device.sku || device.slug,
  //         brand: {
  //           "@type": "Brand",
  //           name: device.brand || "Generic",
  //         },
  //         review: {
  //           "@type": "Review",
  //           author: {
  //             "@type": "Person",
  //             name: device.author,
  //           },
  //           datePublished: device.publishedAt,
  //           reviewBody: device.summary || "A detailed review of the device.",
  //           reviewRating: {
  //             "@type": "Rating",
  //             ratingValue: device.rating?.toString() || "4.5",
  //             bestRating: "5",
  //           },
  //         },
  //       },
  //     ],
  //   };

  const deviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: device.title,
        description,
        author: {
          "@type": "Person",
          name: device.author,
          url: baseURL,
        },
        datePublished: device.publishedAt,
        image: [metaDataImage],
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseURL}/${device.slug}`,
        },
        publisher: {
          "@type": "Organization",
          name: "Tech Arena24",
          logo: {
            "@type": "ImageObject",
            url: `${baseURL}/images/logoTa24.jpeg`,
          },
        },
        articleSection:
          device.categories?.map((cat) => cat.title).join(", ") ||
          "Uncategorized",
        inLanguage: "en",
        isAccessibleForFree: true,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [`${device.tlte}, ${device.summary}`],
        },
      },
      {
        "@type": "Product",
        name: device.title,
        image: [metaDataImage],
        description,
        sku: device.sku || device.slug,
        brand: {
          "@type": "Brand",
          name: device.brand || "Generic",
        },
        review: {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: device.author,
          },
          datePublished: device.publishedAt,
          reviewBody: device.summary || "A detailed review of the device.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: device.rating?.toString() || "4.5",
            bestRating: "5",
          },
        },
        // aggregateRating: {
        //   "@type": "AggregateRating",
        //   ratingValue: device.rating?.toString() || "4.5",
        //   reviewCount: device.reviewCount?.toString() || "24",
        // },
        // offers: {
        //   "@type": "Offer",
        //   priceCurrency: device.currency || "USD",
        //   price: device.price || "299",
        //   itemCondition: "https://schema.org/NewCondition",
        //   availability: "https://schema.org/InStock",
        //   url: `${baseURL}/${device.slug}`,
        // },
      },
    ],
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deviceSchema) }}
      />
    </Head>
  );
};

export default DeviceSchemaHead;
