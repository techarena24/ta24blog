import React from 'react'
import { posts } from './LatestPosts'
import Image from 'next/image'

const Reviews = () => {

  return (
    <div className=' flex flex-col flex-[1] space-y-6 '>
        <h1 className=' text-xl font-bold'>Reviews</h1>
        <div>
            <div className=' flex flex-col gap-6'>
                {posts.slice(0, 5).map((post) => (
                  <div key={post.id} className=' border border-gray-300 shadow-sm rounded-sm overflow-hidden'>
                    <Image 
                      src={post.img} 
                      alt={post.title} 
                      width={300} 
                      height={250} 
                      priority
                      className=' bg-gray-500 object-contain w-full h-[250px] rounded-t-sm'
                    />
                    <div className=' p-4 space-y-2'>
                      <h2 className=' text-lg font-bold leading-normal hover:text-primary'>{post.title}</h2>
                      <p className=' text-xs text-gray-400'>{post.date}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Reviews