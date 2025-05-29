import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "./portableTextComponents";
import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";
import { fetchedLatestDevices } from "@/lib/fetchedDevices";
// import LatestPosts from "./LatestPosts";
// import LatestDevices from "./LatestDevicesPosts";

const LatestDeviceTable = async ({ device }) => {
  const posts = await fetchedLatestDevices();

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-3">
        <div className="gap-2 lg:w-[60%]">
          <div className="">
            <TableHead device={device} />
            <TableBody device={device} />

            {/* ... rest of your component */}
            <section className="px-2">
              <article>
                <h2 className="py-2 font-bold">{device?.title}</h2>
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

        <div className="lg:w-[40%]">
          <LatestDevicesPosts
            posts={posts}
            width="w-full lg:75%"
            grid="grid-cols-2"
          />
        </div>
      </section>
    </>
  );
};

export default LatestDeviceTable;
