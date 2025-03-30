"use client";

import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";
// import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import phoneSpecs from "../../phones.json";
// import images from "../../../public/images/Galaxy_S24.avif"
// import Image from "next/image";
import React, { useState } from "react";
// import LatestDeviceTable from "@/app/components/LatestDeviceTable";

function LatestDevices() {
  return (
    <div className="my-10">
      <LatestDevicesPosts
        phone={phoneSpecs.phones}
        width="100%"
        grid="grid-cols-2 md:grid-cols-4"
      />
      {/* <LatestDeviceTable /> */}
    </div>
  );
}

export default LatestDevices;
