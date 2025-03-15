import LatestDevicesSidebar from "@/app/components/LatestDevicesSidebar";
import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import phoneSpecs from "../../phones.json";
import React from "react";

function LatestDevice() {
  return (
    <div className=" my-10 bg-purple-700">
      <LatestDeviceTable specifications={phoneSpecs.phones} />
      <LatestDevicesSidebar specifications={phoneSpecs.phones} />
    </div>
  );
}

export default LatestDevice;
