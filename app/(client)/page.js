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


export default async function Home() {
  const posts = await fetchedReviewPosts();
  const topStories = await fetchedNewsPosts();
  const phoneComparison = await fetchedPhoneComparisonPosts();
  const deals = await fetchedDealsPosts();

  return (
    <div className=" flex flex-col space-y-8">
      <AdBanner />
      <div className=" flex flex-col lg:flex-row justify-between gap-8">
        <LatestPosts />
        <Reviews posts={posts} />
      </div>
      <News posts={topStories} />
      <BigAdBanner />
      <PhoneComparisons posts={phoneComparison} />
      <Deals posts={deals} />
      <BigAdBanner />
    </div>
  );
}
