// app/components/LatestDeviceTable.jsx
"use client";

import React from "react";
import Image from "next/image";

function LatestDeviceTable(props) {
  const phone = props.phone;

  if (!phone) {
    return <div>No phone data available.</div>;
  }

  return (
    <div className="gap-2 bg-amber-200 w-[60%]">
      <div>
        <table className="bg-green-300 w-full">
          <thead className="bg-orange-100">
            <tr className="bg-yellow-500">
              <td className="bg-green-800 px-2 py-2">{phone.phone_name}</td>
              <td className="bg-blue-800 px-2 py-2">Release Date</td>
            </tr>

            <tr className="phone-row">
              <td className="w-[40%]">
                <Image
                  src={phone.image}
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
                      <li>Battery: {phone.battery}</li>
                      <li>Camera: {phone.camera}</li>
                      <li>Display: {phone.display}</li>
                      <li>Chipset: {phone.chipset}</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <ul>
                      <li>Network: {phone.network_technology}</li>
                      <li>Release Date: {phone.release_date}</li>
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
            {Object.entries(phone).map(([key, value], index) => (
              <tr key={index}>
                <td className="border-2 px-2 py-1">{key}:</td>
                <td className="border-2 px-2 py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* ... rest of your component */}
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
