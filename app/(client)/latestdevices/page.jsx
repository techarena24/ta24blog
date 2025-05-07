// "use client";

import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";
import phoneSpecs from "../../phones.json";
import React from "react";
import AdBanner from "@/app/components/AdBanner";
import BigAdBanner from "@/app/components/BigAdBanner";

export const metadata = {
  title: "Latest Devices",
  description:
    "Discover the latest tech devices at Tech Arena24! Get expert news, first looks, and potential future reviews on the newest smartphones, wearables, gadgets, and more hitting the market.",
};

function LatestDevices() {
  return (
    <>
      <section>
        <AdBanner />
        <div className="my-10 flex flex-col lg:flex-row lg:gap-2.5">
          <LatestDevicesPosts
            phone={phoneSpecs.phones}
            width="w-full lg:75%"
            grid="grid-cols-2 md:grid-cols-4"
          />
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
