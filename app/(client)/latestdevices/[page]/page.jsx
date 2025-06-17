import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";
import React from "react";
import AdBanner from "@/app/components/AdBanner";
import { fetchedLatestDevices } from "@/lib/fetchedDevices";
import Head from "next/head";

export const dynamic = "force-dynamic";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const POSTS_PER_PAGE = 10;

//commented the metadata below to add a new metadata after this one
// export async function generateMetadata(props) {
//   const params = await props.params;
//   const page = params.page;
//   const pageNumber = parseInt(page, 10);

//   if (isNaN(pageNumber) || pageNumber < 1) {
//     // NOTE: Redirects don't work in generateMetadata. Handle invalid pages in the main component.
//     return {
//       title: `Latest Devices | Tech Arena24`,
//       description: `Discover the latest tech devices at Tech Arena24! Get expert news, first looks, and potential future reviews on the newest smartphones, wearables, gadgets, and more hitting the market.`,
//     };
//   }

//   return {
//     title: `Latest Devices - Page ${pageNumber}`,
//     description: `Browse page ${pageNumber} of the latest tech devices at Tech Arena24! Get expert news, first looks, and potential future reviews on the newest smartphones, wearables, gadgets, and more hitting the market`,
//   };
// }

//metadata added below
export async function generateMetadata({ params }) {
  const pageNumber = parseInt(params.page, 10);
  const isValid = !isNaN(pageNumber) && pageNumber > 0;
  const currentPage = isValid ? pageNumber : null;

  // Dynamic title & description
  const title = isValid
    ? `Latest Tech Devices – Page ${currentPage} | Tech Arena24`
    : `Latest Tech Devices | Tech Arena24`;
  const description = isValid
    ? `Discover page ${currentPage} of the latest tech devices at Tech Arena24: expert news, first impressions, and upcoming reviews on smartphones, wearables, gaming gear, and more.`
    : `Discover the latest tech devices at Tech Arena24: expert news, first impressions, and upcoming reviews on smartphones, wearables, gaming gear, and more.`;

  // Base URL and social image
  const base = process.env.BASE_URL || "https://techarena24.com";
  const url = isValid
    ? `${base}/latestdevices/${currentPage}`
    : `${base}/latestdevices`;
  const ogImage = `${base}/images/latestdevices-og.jpg`;

  return {
    title,
    description,

    // Canonical URL
    alternates: {
      canonical: url,
    },

    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
      title,
      description,
      url,
      siteName: "Tech Arena24",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Latest Tech Devices at Tech Arena24",
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: "@techarena24",
      creator: "@techarena24",
    },

    // Encourage indexing of paginated pages
    robots: {
      index: true,
      follow: true,
    },
  };
}

const LatestDevices = async (props) => {
  const params = await props.params;
  const page = params.page;
  const pageNumber = parseInt(page, 10);

  if (isNaN(pageNumber) || pageNumber < 1) {
    redirect("/latestdevices/1");
  }

  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const { posts, totalCount } = await fetchedLatestDevices(start, end);

  // Debug: Check what's being received
  console.log("Fetched posts:", posts);

  // Ensure posts is always an array
  const safePosts = Array.isArray(posts) ? posts : [];

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber >= totalPages;

  // Generate JSON-LD schema dynamically from posts
  // const itemListSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "ItemList",
  //   name: "Latest Devices",
  //   description: "List of the newest devices published on our site",
  //   url: `${baseURL}/latestdevices/${pageNumber}`,
  //   itemListOrder: "http://schema.org/ItemListOrderDescending",
  //   numberOfItems: posts.length,
  //   itemListElement: posts.map((post, index) => ({
  //     "@type": "ListItem",
  //     position: index + 1,
  //     url: `${baseURL}/${post.slug}`,
  //     name: post.phoneName,
  //   })),
  // };

  // Generate JSON-LD schema dynamically from posts
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. The CollectionPage itself
      {
        "@type": "CollectionPage",
        "@id": `${baseURL}/latestdevices/${pageNumber}#collectionpage`,
        url: `${baseURL}/latestdevices/${pageNumber}`,
        name: "Latest Devices",
        isPartOf: { "@id": `${baseURL}/#website` },
        breadcrumb: {
          "@id": `${baseURL}/latestdevices/${pageNumber}#breadcrumbs`,
        },
        mainEntity: {
          "@id": `${baseURL}/latestdevices/${pageNumber}#itemlist`,
        },
      },

      // 2. The breadcrumb trail (Home → Reviews)
      {
        "@type": "BreadcrumbList",
        "@id": `${baseURL}/latestdevices/${pageNumber}#breadcrumbs`,
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
            name: "Latest Devices",
            item: `${baseURL}/latestdevices`,
          },
        ],
      },

      // 3. Your original ItemList (now with an @id so CollectionPage can reference it)
      {
        "@type": "ItemList",
        "@id": `${baseURL}/latestdevices/${pageNumber}#itemlist`,
        name: "Latest Devices",
        description: "List of the latest devices published on our site",
        url: `${baseURL}/latestdevices/${pageNumber}`,
        itemListOrder: "http://schema.org/ItemListOrderDescending",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${baseURL}/${post.slug}`,
          name: post.title,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section>
        {/* <AdBanner /> */}
        <div className="my-10 flex flex-col lg:flex-row lg:gap-2.5">
          <LatestDevicesPosts
            posts={safePosts}
            width="w-full lg:75%"
            grid="grid-cols-2 md:grid-cols-4"
          />
          <div className="w-[25%] hidden lg:block h-40">
            <AdBanner slot="4220368538" />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-10">
          <Head>
            {!isFirstPage && (
              <Link rel="prev" href={`/latestdevices/${pageNumber - 1}`}>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                  ← Previous
                </button>
              </Link>
            )}
            {!isLastPage && (
              <Link rel="next" href={`/latestdevices/${pageNumber + 1}`}>
                <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded ml-auto">
                  Next →
                </button>
              </Link>
            )}
          </Head>
        </div>
        {/* <AdBanner /> */}
      </section>
    </>
  );
};

export default LatestDevices;
