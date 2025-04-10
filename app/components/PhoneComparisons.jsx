import React from 'react'
import { posts } from './LatestPosts'
import Image from 'next/image'
import Link from 'next/link'

const PhoneComparisons = () => {
  return (
    <div className=' flex flex-col space-y-6'>
        <h1 className=' text-2xl lg:text-3xl font-semibold'>Phone Comparisons</h1>
        <div className=' flex flex-col gap-6 sm:flex-row sm:overflow-x-auto whitespace-nowrap snap-x snap-mandatory '>
            {posts.slice(0, 6).map((post) => (
              <Link key={post.id} href={`/${post.slug}`}>
                <div className=' flex flex-row w-full p-4 gap-4 sm:min-w-[350px] sm:flex-col shadow-sm rounded-sm overflow-hidden'>
                  <Image 
                    src={post.img} 
                    alt={post.title} 
                    width={100} 
                    height={80}
                    priority
                    className=' w-15 h-15 rounded-sm sm:rounded-sm bg-white object-contain sm:mt-0 sm:ml-0 sm:w-full sm:h-[200px] sm:rounded-t-sm '
                  />
                  <div className=' space-y-2'>
                    <div className=' hidden sm:flex text-xs text-gray-600 justify-between'>
                      <h4 className=' font-semibold text-primary'>{post.category}</h4>
                      <h4>{post.author}</h4>
                    </div>
                    <h2 className=' text-base sm:text-lg font-bold leading-normal hover:text-primary line-clamp-3 text-wrap'>{post.title}</h2>
                    <p className=' hidden text-sm text-gray-500 line-clamp-3 text-wrap'>{post.content}</p>
                    <p className=' text-xs text-gray-400'>{post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default PhoneComparisons