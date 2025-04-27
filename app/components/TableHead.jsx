import React from "react";
import images from "../../public/images/Galaxy_S24.avif";
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

function TableHead() {
  return (
    <>
      <div className="border dark:border-white">
        <h2 className="text-center py-2 border bg-gray-100 dark:text-gray-800">
          Smartphone Specification Highlight
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-center lg:w-[30%]">
            <Image
              src={images}
              width={900}
              height={900}
              alt="phone"
              className="w-48 lg:w-49"
            />
          </div>
          <div className=" lg:w-[70%]">
            <div className="flex h-full">
              <div className="flex-1 flex flex-col text-center">
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-2">
                  <Smartphone/>
                  <p className="overflow-hidden">6.7 inches, AMOLED</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-2">
                  <Aperture />
                  <p className="overflow-hidden">108MP Main Camera</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <Cpu />
                  <p className="overflow-hidden">Snapdragon 8 Gen 2</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <Network />
                  <p className="overflow-hidden">GSM / HSPA / LTE / 5G</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col text-center">
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <BatteryFull />
                  <p className="overflow-hidden">5000 mAh</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <Microchip />
                  <p className="overflow-hidden">8GB/12GB RAM</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <Database />
                  <p className="overflow-hidden">256GB/512GB Storage</p>
                </div>
                <div className=" border dark:border-white flex flex-col md:flex-row gap-2 h-[25%] items-center px-2 py-1">
                  <FolderCode />
                  <p className="overflow-hidden">Android 13</p>
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
