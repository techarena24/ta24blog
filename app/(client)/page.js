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
