import { fetchedReviewPosts } from "@/lib/fetchedReviewApi";
import AdBanner from "../components/AdBanner";
// import BigAdBanner from "../components/BigAdBanner";
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

const base = process.env.NEXT_PUBLIC_BASE_URL || "https://techarena24.com";

//metadata for the homepage
export const metadata = {
  title: "Tech Arena24 – Latest Tech News, In-Depth Reviews & Exclusive Deals",
  description:
    "Stay ahead with Tech Arena24: your go-to source for the latest technology news, expert gadget reviews, and exclusive deals on smartphones, laptops, gaming consoles, and more.",

  // Self-canonical URL
  alternates: {
    canonical: base,
  },

  // Hand-picked keywords (optional but helpful)
  keywords: [
    "tech news",
    "gadget reviews",
    "tech deals",
    "smartphones",
    "laptops",
    "gaming consoles",
    "phone comparison",
  ],

  // Open Graph for rich link previews on Facebook, LinkedIn, etc.
  openGraph: {
    title: "Tech Arena24 – Latest Tech News, Reviews & Deals",
    description:
      "Stay ahead with Tech Arena24: your go-to source for the latest technology news, expert gadget reviews, and exclusive deals on smartphones, laptops, gaming consoles, and more.",
    url: base,
    siteName: "Tech Arena24",
    type: "website",
    images: [
      {
        url: `${base}/images/TechArena24_Banner.jpg`,
        width: 1200,
        height: 600,
        alt: "Tech Arena24 – Latest Tech News, Reviews & Deals",
      },
    ],
  },

  // Twitter Card for Twitter and other X-compatible services
  twitter: {
    card: "summary_large_image",
    title: "Tech Arena24 – Latest Tech News, Reviews & Deals",
    description:
      "Stay ahead with Tech Arena24: your go-to source for the latest technology news, expert gadget reviews, and exclusive deals on smartphones, laptops, gaming consoles, and more.",
    images: [`${base}/images/TechArena24_Banner.jpg`],
    site: "@techarena24",
    creator: "@techarena24",
  },

  // Tell search engines to index and follow every link on this page
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Home() {
  const { posts: reviewPosts = [] } = await fetchedReviewPosts();
  const { posts: topStories = [] } = await fetchedNewsPosts();
  const phoneComparison = await fetchedPhoneComparisonPosts();
  const { posts: dealPosts = [] } = await fetchedDealsPosts();
  const { posts: latestDevices = [] } = await fetchedLatestDevices();

  return (
    <>
      <div className=" flex flex-col space-y-8 mt-5">
        <div className=" flex flex-col lg:flex-row justify-between gap-8">
          <LatestPosts />
          <Reviews posts={reviewPosts} />
        </div>
        <LatestDevicesHomepage posts={latestDevices} />
        <News posts={topStories} />
        <AdBanner slot="4220368538" />
        <PhoneComparisons posts={phoneComparison} />
        <Deals posts={dealPosts} />
      </div>
    </>
  );
}
