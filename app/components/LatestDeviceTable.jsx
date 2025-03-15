"use client";

import React, { useState } from "react";
// import phoneSpecs from "../../app/phones.json";
import deviceImg from "../../public/images/Galaxy_S24.avif";
import Image from "next/image";

function LatestDeviceTable(props) {
  console.log(props.specifications);

  // Use the props.specifications array directly
  const specifications = props.specifications;
  const optionDemos = [
    {
      id: 1,
      features: "Battery",
      specs: "6000mAh",
      overview: "45W Charging",
      image: deviceImg,
    },

    {
      id: 2,
      features: "Camera",
      specs: "50MP",
      overview: "2160p",
      image: deviceImg,
    },

    {
      id: 3,
      features: "Display",
      specs: "6.67-inch",
      overview: "1080x2400 pixels",
      image: deviceImg,
    },

    {
      id: 4,
      features: "Chipset",
      specs: "8/12GB RAM",
      overview: "Snapdragon 8 Gen 4",
      image: deviceImg,
    },
  ];

  return (
    <div className="gap-2 bg-amber-200 w-[60%]">
      <div>
        <table className="bg-green-300 w-full">
          <thead className="bg-orange-100">
            <tr className="bg-yellow-500">
              <td className="bg-green-800 px-2 py-2">
                {specifications[0].phone_name}
              </td>
              <td className="bg-blue-800 px-2 py-2">Release Date</td>
            </tr>

            <tr className="phone-row">
              <td className="w-[40%]">
                <Image
                  src={deviceImg}
                  height={150}
                  width={150}
                  className="h-72 w-64"
                  alt="phone"
                />
              </td>
              <td className="w-[60%]">
                <div className="flex">
                  <div className="flex-1">
                    <ul>
                      {optionDemos &&
                        optionDemos.map(
                          (
                            spec // Check if specifications exist
                          ) => (
                            <li
                              key={spec.id}
                              className="bg-yellow-200 border-2 px-2"
                            >
                              <Image
                                src={spec.image}
                                height={30}
                                width={30}
                                alt="phone"
                              />
                              <h3>{spec.features}</h3>
                              <p>{spec.specs}</p>
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <ul>
                      {optionDemos &&
                        optionDemos.map(
                          (
                            spec // Check if specifications exist
                          ) => (
                            <li
                              key={spec.id}
                              className="bg-yellow-200 border-2 px-2"
                            >
                              <Image
                                src={spec.image}
                                height={30}
                                width={30}
                                alt="phone"
                              />
                              <h3>{spec.features}</h3>
                              <p>{spec.specs}</p>
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="border-2 text-left px-2 py-2">
              <th className="border-2 text-left px-2 py-2">Technology</th>
              <th className="border-2 text-left px-2 py-2">Specifications</th>
            </tr>
          </thead>

          <tbody className="bg-amber-800 col-span-2">
            {Object.entries(specifications[0]).map(
              // Assuming you want to use the first phone in phoneSpecs
              ([key, value], index) => (
                <tr key={index}>
                  <td className="border-2 px-2 py-1">{key}:</td>
                  <td className="border-2 px-2 py-1">{value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <section className="px-2 bg-gray-300">
          <article>
            <h2 className="py-2">Phone Specifications</h2>
            <p>Below are the specifications of the latest phones</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
              repellendus quasi expedita, nulla deleniti enim dolore at
              distinctio quos, pariatur neque eum sapiente minima dolores
              obcaecati nemo aliquam porro!
            </p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
              repellendus quasi expedita, nulla deleniti enim dolore at
              distinctio quos, pariatur neque eum sapiente minima dolores
              obcaecati nemo aliquam porro!
            </p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
              repellendus quasi expedita, nulla deleniti enim dolore at
              distinctio quos, pariatur neque eum sapiente minima dolores
              obcaecati nemo aliquam porro!
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default LatestDeviceTable;
