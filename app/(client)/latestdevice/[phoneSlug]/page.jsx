// app/latestdevice/[phoneName]/page.jsx
"use client";

import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import phoneSpecs from "../../../phones.json";
import React from "react";
import LatestDevicesSidebar from "@/app/components/LatestDevicesSidebar";

function LatestDevice({ params }) {
  const { phoneSlug } = params;
  const decodedPhoneSlug = decodeURIComponent(phoneSlug);

  // console.log("params.phoneSlug:", phoneSlug);
  //   console.log("decodedPhoneName:", decodedPhoneName);

  const phone = phoneSpecs.phones.find(
    (phone) => phone.slug === decodedPhoneSlug
  );

  if (!phone) {
    return <div>This Device is not found.</div>;
  }

  return (
    <div className="my-10 bg-purple-700 flex">
      <LatestDeviceTable phone={phone} />
      <LatestDevicesSidebar phone={phoneSpecs.phones}/>
    </div>
  );
}

export default LatestDevice;
