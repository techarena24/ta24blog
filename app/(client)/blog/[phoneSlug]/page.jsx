// app/latestdevice/[phoneName]/page.jsx
"use client";

import phoneSpecs from "../../../phones.json";
import React, { use } from "react";
import Reviews from "@/app/components/Reviews";
import TableHead from "@/app/components/TableHead";
import TableBody from "@/app/components/TableBody";
import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";

function LatestDevice({ params }) {
  const resolvedParams = use(params);
  const { phoneSlug } = resolvedParams;
  const decodedPhoneSlug = decodeURIComponent(phoneSlug);

  // console.log("params.phoneSlug:", phoneSlug);
  //   console.log("decodedPhoneName:", decodedPhoneName);

  const phone = phoneSpecs.phones.find(
    (phone) => phone.slug === decodedPhoneSlug
  );

  if (!phone) {
    return <div>This Device is not found.</div>;
  }

  const numberOfPhones = phoneSpecs.phones.slice(0, 4);

  return (
    <>
      <section>
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="flex flex-col md:w-[65%] gap-2 ">
            <TableHead />
            <TableBody />
            <section className="">
              <article className="">
                <h2 className="py-2 px-2 bg-gray-100">Phone Specifications</h2>
                <p className="px-2">
                  Below are the specifications of the latest phones
                </p>
                <p className="py-3 px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  aut repellendus quasi expedita, nulla deleniti enim dolore at
                  distinctio quos, pariatur neque eum sapiente minima dolores
                  obcaecati nemo aliquam porro!
                </p>
                <p className="py-3 px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  aut repellendus quasi expedita, nulla deleniti enim dolore at
                  distinctio quos, pariatur neque eum sapiente minima dolores
                  obcaecati nemo aliquam porro!
                </p>
                <p className="py-3 px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  aut repellendus quasi expedita, nulla deleniti enim dolore at
                  distinctio quos, pariatur neque eum sapiente minima dolores
                  obcaecati nemo aliquam porro!
                </p>
              </article>
            </section>
          </div>
          <div className=" md:w-[35%]">
            <LatestDevicesPosts
              phone={numberOfPhones}
              width="100%"
              grid="grid-cols-2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestDevice;
