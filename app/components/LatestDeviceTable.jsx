import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "./portableTextComponents";
import AdBanner from "./AdBanner";
import BigAdBanner from "./BigAdBanner";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { fetchedLatestDevices } from "@/lib/fetchedDevices";
import Link from "next/link";
import DeviceSchemaHead from "./DeviceSchemaHead";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const LatestDeviceTable = async ({ device }) => {
  const { posts } = await fetchedLatestDevices();

  // const deviceSchema = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "BlogPosting",
  //       headline: device.title,
  //       description,
  //       author: {
  //         "@type": "Person",
  //         name: device.author,
  //         url: baseURL,
  //       },
  //       datePublished: device.publishedAt,
  //       image: [metaDataImage],
  //       mainEntityOfPage: {
  //         "@type": "WebPage",
  //         "@id": `${baseURL}/${device.slug}`,
  //       },
  //       publisher: {
  //         "@type": "Organization",
  //         name: "Tech Arena24",
  //         logo: {
  //           "@type": "ImageObject",
  //           url: `${baseURL}/images/logoTa24.jpeg`,
  //         },
  //       },
  //       articleSection:
  //         device.categories?.map((cat) => cat.title).join(", ") ||
  //         "Uncategorized",
  //       inLanguage: "en",
  //       isAccessibleForFree: true,
  //       speakable: {
  //         "@type": "SpeakableSpecification",
  //         cssSelector: [`${device.tlte}, ${device.summary}`],
  //       },
  //     },
  //     {
  //       "@type": "Product",
  //       name: device.title,
  //       image: [metaDataImage],
  //       description,
  //       sku: device.sku || device.slug,
  //       brand: {
  //         "@type": "Brand",
  //         name: device.brand || "Generic",
  //       },
  //       review: {
  //         "@type": "Review",
  //         author: {
  //           "@type": "Person",
  //           name: device.author,
  //         },
  //         datePublished: device.publishedAt,
  //         reviewBody: device.summary || "A detailed review of the device.",
  //         reviewRating: {
  //           "@type": "Rating",
  //           ratingValue: device.rating?.toString() || "4.5",
  //           bestRating: "5",
  //         },
  //       },
  //       // aggregateRating: {
  //       //   "@type": "AggregateRating",
  //       //   ratingValue: device.rating?.toString() || "4.5",
  //       //   reviewCount: device.reviewCount?.toString() || "24",
  //       // },
  //       // offers: {
  //       //   "@type": "Offer",
  //       //   priceCurrency: device.currency || "USD",
  //       //   price: device.price || "299",
  //       //   itemCondition: "https://schema.org/NewCondition",
  //       //   availability: "https://schema.org/InStock",
  //       //   url: `${baseURL}/${device.slug}`,
  //       // },
  //     },
  //   ],
  // };

  return (
    <>
      <DeviceSchemaHead
        device={posts}
        baseURL={baseURL}
        metaDataImage={posts.deviceImage}
        description={posts.summary}
      />
      <div className="mb-5">
        <AdBanner />
      </div>
      <section className="flex flex-col lg:flex-row gap-3">
        <div className="gap-2 lg:w-[60%]">
          <div className="">
            <TableHead device={device} />
            <TableBody device={device} />

            {/* ... rest of your component */}
            <section className="px-2">
              <div className="my-5">
                <AdBanner />
              </div>
              <article>
                <h2 className="py-2 font-bold">{device?.title}</h2>
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
          <div>
            <BigAdBanner />
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestDeviceTable;
