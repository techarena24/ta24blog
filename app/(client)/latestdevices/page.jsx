import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";
import React from "react";
import AdBanner from "@/app/components/AdBanner";
import BigAdBanner from "@/app/components/BigAdBanner";
import { fetchedLatestDevices } from "@/lib/fetchedDevices";

export const metadata = {
  title: "Latest Devices",
  description:
    "Discover the latest tech devices at Tech Arena24! Get expert news, first looks, and potential future reviews on the newest smartphones, wearables, gadgets, and more hitting the market.",
};

const LatestDevices = async () => {
  const posts = await fetchedLatestDevices();

  return (
    <>
      <section>
        <AdBanner />
        <div className="my-10 flex flex-col lg:flex-row lg:gap-2.5">
          <LatestDevicesPosts posts={posts} width="w-full lg:75%" grid="grid-cols-2 md:grid-cols-4" />
          <div className="w-[25%] hidden lg:block h-40">
            <BigAdBanner />
          </div>
        </div>
        <AdBanner />
      </section>
    </>
  );
}

export default LatestDevices;
