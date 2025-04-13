// app/components/LatestDeviceTable.jsx
"use client";

import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function LatestDeviceTable() {
  return (
    <div className="gap-2 lg:w-[60%]">
      <div className="">
        <TableHead />
        <TableBody />
        {/* ... rest of your component */}
        <section className="px-2">
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
