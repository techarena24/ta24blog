import AdBanner from "../components/AdBanner";
import BigAdBanner from "../components/BigAdBanner";
import Deals from "../components/Deals";
import Footer from "../components/Footer";
import LatestPosts from "../components/LatestPosts";
import News from "../components/News";
import PhoneComparisons from "../components/PhoneComparisons";
import Reviews from "../components/Reviews";


export default function Home() {
  return (
    <div className=" flex flex-col space-y-8">
      <AdBanner />
      <div className=" flex flex-col lg:flex-row justify-between gap-8">
        <LatestPosts />
        <Reviews />
      </div>
      <News />
      <BigAdBanner />
      <PhoneComparisons />
      <Deals />
      <BigAdBanner />
      <Footer />
    </div>
  );
}
