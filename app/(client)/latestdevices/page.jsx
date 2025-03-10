"use client";

import Image from "next/image";
import React, { useState } from "react";
import phoneImg from "../../../public/images/TA24_light_icon.webp";
import deviceImg from "../../../public/images/Galaxy_S24.avif";
import phoneSpecs from "../../phones.json";

function LatestDevices() {
  const [post, setPost] = useState(0); //code to Initialize post index in state

  const totalPosts = phoneSpecs.phones.length; // Total number of posts (adjust this to match your data length)

  function getNextPost() {
    setPost((prevPost) => {
      // Check if at the end of the posts, if so, return to the first post
      if (prevPost + 1 === totalPosts) {
        return 0; // Reset to the first post
      }
      return prevPost + 1; // Go to the next post
    });
    console.log(post);
  }

  const optionDemos = [
    {
      id: 1,
      features: "Battery",
      specs: "6000mAh",
      overview: "45W Charging",
      image: phoneImg,
    },
    {
      id: 2,
      features: "Camera",
      specs: "50MP",
      overview: "2160p",
      image: phoneImg,
    },
    {
      id: 3,
      features: "Display",
      specs: "6.67-inch",
      overview: "1080x2400 pixels",
      image: phoneImg,
    },
    {
      id: 4,
      features: "Chipset",
      specs: "8/12GB RAM",
      overview: "Snapdragon 8 Gen 4",
      image: phoneImg,
    },
  ];

  return (
    <div className="bg-red-500 max-w-6xl mx-auto my-10">
      <table className="w-[60%] bg-green-300">
        <thead className="bg-orange-100">
          <tr className="bg-yellow-500">
            <td className="bg-green-800 px-2 py-2">
              {phoneSpecs.phones[0].phone_name}
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
                    {optionDemos.map((optionDemo) => (
                      <li
                        key={optionDemo.id}
                        className="bg-yellow-200 border-2"
                      >
                        <Image
                          src={optionDemo.image}
                          height={30}
                          width={30}
                          alt="phone"
                        />
                        <h3>{optionDemo.features}</h3>
                        <p>{optionDemo.specs}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <ul>
                    {optionDemos.map((optionDemo) => (
                      <li
                        key={optionDemo.id}
                        className="bg-yellow-200 border-2"
                      >
                        <Image
                          src={optionDemo.image}
                          height={30}
                          width={30}
                          alt="phone"
                        />
                        <h3>{optionDemo.features}</h3>
                        <p>{optionDemo.specs}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </td>
            {/* <td>game</td> */}
          </tr>

          <tr className="border-2 text-left px-1 py-1">
            <th>Technology</th>
            <th>Specifications</th>
          </tr>
          {/* <tr className="border-2 text-left px-1 py-1">
            <th>Specifications</th>
          </tr> */}
        </thead>

        <tbody className="bg-amber-800 col-span-2">
          {Object.entries(phoneSpecs.phones[post]).map(
            ([key, value], index) => (
              <tr key={index}>
                <td className="border-2 px-1 py-1">{key}:</td>
                <td className="border-2 px-1 py-1">{value}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <button
        className="bg-green-500 my-3 mx-3 px-10 py-2"
        onClick={getNextPost}
      >
        Next
      </button>
    </div>
  );
}

export default LatestDevices;
