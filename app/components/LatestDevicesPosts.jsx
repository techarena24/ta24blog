import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestDevicesPosts = (props) => {
  const { posts, width, grid } = props;

  const propStyleForCards = {
    width: width || "100%",
  };

  console.log("card fetch", posts);
  console.log("Get Post Name " + posts.phoneName);

  return (
    <>
      <div className="w-full" style={propStyleForCards}>
        <h2 className="col-span-3 bg-gray-100 self-baseline px-2 py-2 dark:text-gray-800">
          Latest Phones
        </h2>

        {/* personal note "i removed the h-[2rem] from the class below. I used this to size the three card layout of the sidebar component. I might need to add css as props for the sidebar later" */}

        <div
          className={` grid justify-center gap-1 my-2 ${grid || "grid-cols-3"}`}
        >
          {posts.map((post) => (
            <Link key={post._id} href={`/${post.slug}`}>
              <div className="bg-blue-200 flex flex-col items-center h-56 relative">
                <Image
                  src={post.deviceImage}
                  height={1000}
                  width={800}
                  alt={post.title}
                  priority
                  className="w-full h-full object-cover"
                />
                <h3 className="text-center font-bold text-black absolute bottom-0 top-40 bg-white/80 py-1 px-1 left-0 right-0 hover:text-blue-500 dark:text-gray-700 flex flex-row justify-center items-center">
                  {post.phoneName}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestDevicesPosts;
