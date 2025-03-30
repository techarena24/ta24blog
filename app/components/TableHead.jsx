import React from "react";
import images from "../../public/images/Galaxy_S24.avif";
import Image from "next/image";

function TableHead() {
  return (
    <>
      <div className=" border">
        <h2 className="text-center py-2 border bg-gray-100">
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
            <div className="flex">
              <div className="flex-1 flex flex-col">
                <div className=" border flex">
                  <Image
                    src={images}
                    width={900}
                    height={900}
                    alt="phone"
                    className="w-12"
                  />
                  <p>6.7 inches, AMOLED</p>
                </div>
                <div className=" border flex">
                  <Image
                    src={images}
                    width={900}
                    height={900}
                    alt="phone"
                    className="w-12"
                  />
                  <p>108MP Main Camera</p>
                </div>
                <div className=" border flex">
                  <Image
                    src={images}
                    width={900}
                    height={900}
                    alt="phone"
                    className="w-12"
                  />
                  <p>Snapdragon 8 Gen 2</p>
                </div>
                <div className=" border flex">
                  <Image
                    src={images}
                    width={900}
                    height={900}
                    alt="phone"
                    className="w-12"
                  />
                  <p>GSM / HSPA / LTE / 5G</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className=" border flex items-center">
                  <Image
                    src={images}
                    width={900}
                    height={900}
                    alt="phone"
                    className="w-12"
                  />
                  <p>5000 mAh</p>
                </div>
                <div className=" border flex">
                  <Image
                    src={images}
                    width={900}
                    height={900}
                    alt="phone"
                    className="w-12"
                  />
                  <p>8GB/12GB RAM</p>
                </div>
                <div className=" border flex">
                  <Image
                    src={images}
                    width={900}
                    height={900}
                    alt="phone"
                    className="w-12"
                  />
                  <p>256GB/512GB Storage</p>
                </div>
                <div className=" border flex">
                  <Image
                    src={images}
                    width={900}
                    height={900}
                    alt="phone"
                    className="w-12"
                  />
                  <p>Android 13</p>
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
