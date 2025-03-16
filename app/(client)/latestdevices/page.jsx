"use client";

import LatestDevicesSidebar from "@/app/components/LatestDevicesSidebar";
// import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import phoneSpecs from "../../phones.json";
// import images from "../../../public/images/Galaxy_S24.avif"
// import Image from "next/image";
import React, { useState } from "react";

function LatestDevices() {
  return (
    <div className=" my-10 bg-purple-700">
      <LatestDevicesSidebar
        phone={phoneSpecs.phones}
        width="100%"
        grid="grid-cols-2 md:grid-cols-4"
      />
    </div>
  );
}

export default LatestDevices;
