import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "./portableTextComponents";

const LatestDeviceTable = async ({ device }) => {

  return (
    <div className="gap-2 lg:w-[60%]">
      <div className="">
        <TableHead device={device} />
        <TableBody device={device} /> 
        
        {/* ... rest of your component */}
        <section className="px-2">
          <article>
            <h2 className="py-2">
              {device?.title}
            </h2>
            <div>
              <PortableText 
                value={device.body} 
                components={myPortableTextComponents} 
              />
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default LatestDeviceTable;
