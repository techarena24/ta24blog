import React from 'react'
import { posts } from './LatestPosts'
import Image from 'next/image'
import Link from 'next/link'

const Deals = ({ posts }) => {
  return (
    <div className=' flex flex-col space-y-6'>
        <h1 className=' text-2xl lg:text-3xl font-semibold'>Deals</h1>
        <div className=' flex flex-col gap-6 sm:flex-row sm:overflow-x-auto whitespace-nowrap snap-x snap-mandatory '>
            {posts.map((post) => (
              <Link key={post._id} href={`/${post.slug}`}>
                <div className=' flex flex-row w-full gap-4 sm:min-w-[350px] sm:flex-col shadow-sm rounded-sm overflow-hidden'>
                  <Image 
                    src={post.postImage} 
                    alt={post.title} 
                    width={1000} 
                    height={700} 
                    priority
                    className=' w-32 h-24 rounded-sm sm:rounded-sm bg-white object-cover sm:mt-0 sm:ml-0 sm:w-full sm:h-[200px] sm:rounded-t-sm '
                  />
                  <div className=' space-y-2'>
                    <h2 className=' text-base sm:text-lg font-bold leading-normal hover:text-primary line-clamp-3 text-wrap'>{post.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default Deals