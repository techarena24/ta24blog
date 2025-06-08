import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";
import React from "react";
import AdBanner from "@/app/components/AdBanner";
import BigAdBanner from "@/app/components/BigAdBanner";
import { fetchedLatestDevices } from "@/lib/fetchedDevices";
import Head from "next/head";

export const dynamic = "force-dynamic";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const POSTS_PER_PAGE = 10;

export async function generateMetadata(props) {
  const params = await props.params;
  const page = params.page;
  const pageNumber = parseInt(page, 10);

  if (isNaN(pageNumber) || pageNumber < 1) {
    // NOTE: Redirects don't work in generateMetadata. Handle invalid pages in the main component.
    return {
      title: `Latest Devices | Tech Arena24`,
      description: `Discover the latest tech devices at Tech Arena24! Get expert news, first looks, and potential future reviews on the newest smartphones, wearables, gadgets, and more hitting the market.`,
    };
  }

  return {
    title: `Latest Devices - Page ${pageNumber} | Tech Arena24`,
    description: `Browse page ${pageNumber} of the latest tech devices at Tech Arena24! Get expert news, first looks, and potential future reviews on the newest smartphones, wearables, gadgets, and more hitting the market`,
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
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest Devices",
    description: "List of the newest devices published on our site",
    url: `${baseURL}/latestdevices/${pageNumber}`,
    itemListOrder: "http://schema.org/ItemListOrderDescending",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseURL}/${post.slug}`,
      name: post.phoneName,
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      </Head>

      <section>
        <AdBanner />
        <div className="my-10 flex flex-col lg:flex-row lg:gap-2.5">
          <LatestDevicesPosts
            posts={safePosts}
            width="w-full lg:75%"
            grid="grid-cols-2 md:grid-cols-4"
          />
          <div className="w-[25%] hidden lg:block h-40">
            <BigAdBanner />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-10">
          {!isFirstPage && (
            <Link href={`/latestdevices/${pageNumber - 1}`}>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                ← Previous
              </button>
            </Link>
          )}
          {!isLastPage && (
            <Link href={`/latestdevices/${pageNumber + 1}`}>
              <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded ml-auto">
                Next →
              </button>
            </Link>
          )}
        </div>
        <AdBanner />
      </section>
    </>
  );
};

export default LatestDevices;
