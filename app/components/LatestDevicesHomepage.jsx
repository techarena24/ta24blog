import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestDevicesHomepage = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col space-y-6">
        <h1 className="text-2xl lg:text-3xl font-semibold">Latest Devices</h1>
        <p>No devices available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-2xl lg:text-3xl font-semibold">Latest Devices</h1>
      <div className="flex flex-row overflow-x-auto gap-6 whitespace-nowrap snap-x snap-mandatory">
        {posts.slice(0, 8).map((post) => (
          <Link key={post._id} href={`/${post.slug}`}>
            <div className="w-64 h-56 relative border">
              <div className="h-full">
                <Image
                  src={post.deviceImage}
                  height={1000}
                  width={800}
                  alt={post.title}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-center font-bold text-wrap hover:text-blue-500 absolute bottom-0 top-40 bg-white/80 py-1 px-1
             left-0 right-0 dark:text-gray-700 flex flex-row justify-center items-center border-t"
              >
                {post.phoneName}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestDevicesHomepage;
