import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "./portableTextComponents";
import LatestDevicesPosts from "@/app/components/LatestDevicesPosts";
import { fetchedLatestDevices } from "@/lib/fetchedDevices";
import AdBanner from "./AdBanner";
import BigAdBanner from "./BigAdBanner";
import Reviews from "./Reviews";
import { formatDistanceToNow } from "date-fns";
// import LatestPosts from "./LatestPosts";
// import LatestDevices from "./LatestDevicesPosts";

const LatestDeviceTable = async ({ device }) => {
  const posts = await fetchedLatestDevices();

  return (
    <>
      <div className="mb-5">
        <AdBanner />
      </div>
      <section className="flex flex-col lg:flex-row gap-3">
        <div className="gap-2 lg:w-[60%]">
          <div className="">
            <TableHead device={device} />
            <TableBody device={device} />

            {/* ... rest of your component */}
            <section className="px-2">
              <div className="my-5">
                <AdBanner />
              </div>
              <article>
                <h2 className="py-2 font-bold">{device?.title}</h2>
                <div>
                  <PortableText
                    value={device.body}
                    components={myPortableTextComponents}
                  />
                </div>
                <div className=" flex justify-between">
                  <span className=" italic text-xs text-gray-700">
                    written by, {device?.author}
                  </span>
                  <span className=" text-xs text-gray-500">
                    {formatDistanceToNow(new Date(device?.publishDate), { addSuffix: true })}
                  </span>
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
          <div>
            <BigAdBanner />
          </div>
          {/* <div>
            <Reviews posts= {posts} />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default LatestDeviceTable;
