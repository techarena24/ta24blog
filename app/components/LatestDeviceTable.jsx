import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "./portableTextComponents";
import AdBanner from "./AdBanner";
// import BigAdBanner from "./BigAdBanner";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { fetchedLatestDevices } from "@/lib/fetchedDevices";
import Link from "next/link";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const LatestDeviceTable = async ({ device }) => {
  const { posts } = await fetchedLatestDevices();
  //old schema
  // const postSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "BlogPosting",
  //   headline: device.title,
  //   description: device.summary,
  //   author: {
  //     "@type": "Person",
  //     name: device.author,
  //     url: baseURL, // Can be updated dynamically if author has profile pages
  //   },
  //   datePublished: device.publishedAt,
  //   image: [device.deviceImage],
  //   mainEntityOfPage: {
  //     "@type": "WebPage",
  //     "@id": `${baseURL}/${device.slug}`,
  //   },
  //   publisher: {
  //     "@type": "Organization",
  //     name: "Tech Arena24",
  //     logo: {
  //       "@type": "ImageObject",
  //       url: `${baseURL}/images/logoTa24.jpeg`,
  //     },
  //   },
  //   articleSection:
  //     device.categories?.map((cat) => cat.title).join(", ") || "Uncategorized",
  //   inLanguage: "en",
  //   isAccessibleForFree: true,

  //   // Speakable added schema
  //   speakable: {
  //     "@type": "SpeakableSpecification",
  //     cssSelector: [`${device.title}, ${device.summary}`],
  //   },
  // };

  // new schema
  const postSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${baseURL}/${device.slug}#techarticle`,
        headline: device.title,
        description: device.summary,
        author: {
          "@type": "Person",
          name: device.author,
        },
        datePublished: device.publishedAt,
        publisher: {
          "@type": "Organization",
          "@id": `${baseURL}/#organization`,
        },
        mainEntity: {
          "@id": `${baseURL}/${device.slug}#product`,
        },
      },
      {
        "@type": "Product",
        "@id": `${baseURL}/${device.slug}#product`,
        name: device.title,
        image: [device.deviceImage],
        description: device.summary,
        // optional: brand/model fields if you have them
        // "brand": { "@type": "Brand", "name": device.brand },
        // "model": device.model,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Display",
            value: device.specs.display,
          },
          {
            "@type": "PropertyValue",
            name: "Back Camera",
            value: device.specs.backcamera,
          },
          {
            "@type": "PropertyValue",
            name: "Front Camera",
            value: device.specs.frontcamera,
          },
          {
            "@type": "PropertyValue",
            name: "Chipset",
            value: device.specs.chipset,
          },
          {
            "@type": "PropertyValue",
            name: "Battery",
            value: device.specs.battery,
          },
          {
            "@type": "PropertyValue",
            name: "Storage",
            value: device.specs.storage,
          },
          {
            "@type": "PropertyValue",
            name: "RAM",
            value: device.specs.ram,
          },
          {
            "@type": "PropertyValue",
            name: "Software",
            value: device.specs.software,
          },
          {
            "@type": "PropertyValue",
            name: "Network",
            value: device.specs.network,
          },
          {
            "@type": "PropertyValue",
            name: "Announce",
            value: device.specs.announcedDate,
          },
          {
            "@type": "PropertyValue",
            name: "Available Date",
            value: device.specs.availableDate,
          },
          // …repeat for each spec row
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: device.rating?.average || 4.5,
          reviewCount: device.rating?.count || 0,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <section className="flex flex-col lg:flex-row gap-3 my-5">
        <div className="gap-2 lg:w-[60%]">
          <div className="">
            <TableHead device={device} />
            <TableBody device={device} />

            {/* ... rest of your component */}
            <section className="px-2">
              <div className="my-5">
                <AdBanner slot="4220368538" />
              </div>
              <article>
                <h2 className="py-2 font-bold text-[1.5rem]">
                  {device?.title} Overview
                </h2>
                <div>
                  <PortableText
                    value={device.body}
                    components={myPortableTextComponents}
                  />
                </div>
                <div className=" flex justify-between">
                  <span className=" italic text-xs text-gray-700">
                    written by, {device?.author}
                  </span>
                  <span className=" text-xs text-gray-500">
                    {formatDistanceToNow(new Date(device?.publishDate), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </article>
            </section>
          </div>
        </div>

        <div className="lg:w-[40%]">
          <div className=" mt-10 md:mt-0 mb-5">
            <div className=" grid grid-cols-2 gap-3">
              {posts.slice(0, 10).map((post) => (
                <Link key={post._id} href={`/${post.slug}`}>
                  <div className="bg-blue-200 flex flex-col items-center h-56 relative">
                    <Image
                      src={post.deviceImage}
                      height={1000}
                      width={800}
                      alt={post.title}
                      priority
                      className="w-full h-full object-cover"
                    />
                    <h3 className="text-center font-bold text-black absolute bottom-0 top-40 bg-white/80 py-1 px-1 left-0 right-0 hover:text-blue-500 dark:text-gray-700">
                      {post.phoneName}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestDeviceTable;
