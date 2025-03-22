'use client';

import React, { useEffect, useState } from 'react'
import { posts } from './LatestPosts'
import Image from 'next/image'

const Reviews = () => {
  const [visiblePosts, setVisiblePosts] = useState(5)

  useEffect(() => {
    const updateVisiblePosts = () => {
      if (window.innerWidth >= 1024) {
        setVisiblePosts(3)
      } else {
        setVisiblePosts(5)
      }
    };

    updateVisiblePosts();
    window.addEventListener("resize", updateVisiblePosts);

    return () => window.removeEventListener("resize", updateVisiblePosts);
  }, [])

  return (
    <div className=' flex flex-col flex-[1] space-y-6 '>
        <h1 className=' text-2xl lg:text-3xl font-semibold'>Reviews</h1>
        <div className=' lg:flex lg:flex-col lg:h-full lg:gap-6'>
            <div className=' flex flex-col gap-6'>
                {posts.slice(0, visiblePosts).map((post) => (
                  <div key={post.id} className=' flex flex-row p-4 gap-4 sm:flex-col border border-gray-300 shadow-sm rounded-sm overflow-hidden'>
                    <Image 
                      src={post.img} 
                      alt={post.title}
                      width={100} 
                      height={80} 
                      priority
                      className=' w-32 h-28 rounded-sm bg-white object-contain sm:mt-0 sm:ml-0 sm:w-full sm:h-[200px] sm:rounded-t-sm '
                    />
                      <div className=' space-y-2'>
                      <div className=' hidden sm:flex text-xs text-gray-600 justify-between'>
                        <h4 className=' font-semibold text-primary'>{post.category}</h4>
                        <h4>{post.author}</h4>
                      </div>
                      <h2 className=' text-base sm:text-lg font-bold leading-normal hover:text-primary line-clamp-3'>{post.title}</h2>
                      <p className=' text-sm text-gray-500 line-clamp-3'>{post.content}</p>
                      <p className=' text-xs text-gray-400'>{post.date}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className=' hidden lg:flex flex-1 border border-gray-300 justify-center items-center rounded-md'>
              <p>Ad Space</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews