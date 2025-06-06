import React from "react";
import Image from "next/image";
import {
  Aperture,
  BatteryFull,
  Cpu,
  Database,
  FolderCode,
  Microchip,
  Network,
  Smartphone,
} from "lucide-react";

function TableHead({ device }) {
  return (
    <>
      <div className="border dark:border-white">
        <h2 className="text-center py-2 border bg-gray-100 font-bold dark:text-gray-800">
          {device.phoneName} Overview
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-center lg:w-[30%]">
            <Image
              src={device?.deviceImage}
              width={1000}
              height={800}
              alt="phone"
              className="w-48 lg:w-full lg:h-full lg:object-fill"
            />
          </div>
          <div className=" lg:w-[70%]">
            <div className="flex h-full">
              <div className="flex-1 flex flex-col text-center">
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-2">
                  <Smartphone />
                  <p className="overflow-hidden">{device?.specs?.display}</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-2">
                  <Aperture />
                  <p className="overflow-hidden">
                    {device?.specs?.maincamera}
                  </p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <Cpu />
                  <p className="overflow-hidden">{device?.specs?.chipset}</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <Network />
                  <p className="overflow-hidden">{device?.specs?.network}</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col text-center">
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <BatteryFull />
                  <p className="overflow-hidden">{device?.specs?.battery}</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <Microchip />
                  <p className="overflow-hidden">{device?.specs?.ram}</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <Database />
                  <p className="overflow-hidden">{device?.specs?.storage}</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <FolderCode />
                  <p className="overflow-hidden">{device?.specs?.software}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableHead;
