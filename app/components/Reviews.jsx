"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toPlainText } from "@portabletext/react";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

const Reviews = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(5);

  useEffect(() => {
    const updateVisiblePosts = () => {
      if (window.innerWidth >= 1024) {
        setVisiblePosts(3);
      } else {
        setVisiblePosts(5);
      }
    };

    updateVisiblePosts();
    window.addEventListener("resize", updateVisiblePosts);

    return () => window.removeEventListener("resize", updateVisiblePosts);
  }, []);

  // Truncated text function to line-clamp the post paragraphs
  const truncatedText = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <div className=" flex flex-col flex-[1] space-y-6 ">
      <h1 className=" text-2xl lg:text-3xl font-semibold">Reviews</h1>
      <div className=" lg:flex lg:flex-col lg:h-full lg:gap-6">
        <div className=" flex flex-col gap-6">
          {posts.slice(0, visiblePosts).map((post) => (
            <Link
              key={post._id}
              href={`/${post.slug}`}
              aria-label={`Read more about ${post.title}`}
            >
              <div
                key={post._id}
                className=" flex flex-row p-4 gap-4 sm:flex-col border border-gray-300 shadow-sm rounded-sm overflow-hidden"
              >
                <div className=" relative w-[35%] h-28 sm:w-full sm:h-[200px] rounded-sm sm:rounded-t-sm bg-white overflow-hidden">
                  <Image
                    src={post.postImage}
                    alt={`Image for the post titled ${post.title}`}
                    fill
                    sizes="(max-width: 640px) 8rem, 100vw"
                    priority
                    className=" bg-white object-cover"
                  />
                </div>
                <div className=" space-y-2 w-[65%] sm:w-full">
                  <div className=" hidden sm:flex text-xs text-gray-600 justify-between">
                    <h4 className=" font-semibold text-primary">
                      {post.category}
                    </h4>
                    <h4 className=" text-[10px] py-0.5 px-1 bg-gray-300 rounded-xs text-black">
                      {post.author}
                    </h4>
                  </div>
                  <h2 className=" text-base sm:text-lg font-bold leading-normal hover:text-primary line-clamp-3">
                    {post.title}
                  </h2>
                  <p className=" text-sm text-gray-500">
                    {truncatedText(toPlainText(post.body || []), 120)}
                    <span className=" font-normal text-black/90 dark:text-white/80">
                      Read more
                    </span>
                  </p>
                  <p className=" text-xs text-gray-400">
                    {formatDistanceToNow(new Date(post.publishedAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className=" hidden lg:flex flex-1 border border-gray-300 justify-center items-center rounded-md">
          <p>Ad Space</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
