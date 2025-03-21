import Deals from "../components/Deals";
import LatestPosts from "../components/LatestPosts";
import News from "../components/News";
import PhoneComparisons from "../components/PhoneComparisons";
import Reviews from "../components/Reviews";


export default function Home() {
  return (
    <div className=" flex flex-col space-y-8">
      <div className=" flex flex-col lg:flex-row justify-between gap-8">
        <LatestPosts />
        <Reviews />
      </div>
      <News />
      <PhoneComparisons />
      <Deals />
    </div>
  );
}
