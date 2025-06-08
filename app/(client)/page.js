import { fetchedReviewPosts } from "@/lib/fetchedReviewApi";
import AdBanner from "../components/AdBanner";
import BigAdBanner from "../components/BigAdBanner";
import Deals from "../components/Deals";
import LatestPosts from "../components/LatestPosts";
import News from "../components/News";
import PhoneComparisons from "../components/PhoneComparisons";
import Reviews from "../components/Reviews";
import { fetchedNewsPosts } from "@/lib/fetchedNewsApi";
import { fetchedPhoneComparisonPosts } from "@/lib/fetchedPhoneComparisonApi";
import { fetchedDealsPosts } from "@/lib/fetchedDealsApi";
import LatestDevicesHomepage from "../components/LatestDevicesHomepage";
import { fetchedLatestDevices } from "@/lib/fetchedDevices";

export default async function Home() {
  const { posts: reviewPosts = [] } = await fetchedReviewPosts();
  const { posts: topStories = [] } = await fetchedNewsPosts();
  const phoneComparison = await fetchedPhoneComparisonPosts();
  const { posts: dealPosts = [] } = await fetchedDealsPosts();
  const { posts: latestDevices = [] } = await fetchedLatestDevices();

  // ✅ JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.techarena24.com/#website",
        name: "Tech Arena24",
        url: "https://www.techarena24.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.techarena24.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.techarena24.com/#webpage",
        "url": "https://www.techarena24.com/",
        "name": "Tech Arena24 - Latest Tech News, Reviews & Deals",
        "isPartOf": { "@id": "https://www.techarena24.com/#website" },
        "about": { "@id": "https://www.techarena24.com/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://www.techarena24.com/#organization",
        name: "Tech Arena24",
        url: "https://www.techarena24.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.techarena24.com/images/logoTa24.jpeg", // Make sure this path is correct
        },
        sameAs: [
          "https://www.facebook.com/techarena24blog",
          "https://x.com/techarena24blog",
          "https://www.instagram.com/techarena24blog/",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className=" flex flex-col space-y-8">
        <AdBanner />
        <div className=" flex flex-col lg:flex-row justify-between gap-8">
          <LatestPosts />
          <Reviews posts={reviewPosts} />
        </div>
        <LatestDevicesHomepage posts={latestDevices} />
        <News posts={topStories} />
        <BigAdBanner />
        <PhoneComparisons posts={phoneComparison} />
        <Deals posts={dealPosts} />
        <BigAdBanner />
      </div>
    </>
  );
}
