"use client";

import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";
// import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import phoneSpecs from "../../phones.json";
// import images from "../../../public/images/Galaxy_S24.avif"
// import Image from "next/image";
import React, { useState } from "react";
import AdBanner from "@/app/components/AdBanner";
import BigAdBanner from "@/app/components/BigAdBanner";

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
