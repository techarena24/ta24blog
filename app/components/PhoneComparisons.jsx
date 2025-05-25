import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

// Truncated text function to line-clamp the post paragraphs
const truncatedText = (text, length) => {
  return text.length > length ? text.slice(0, length) + '...' : text;
};

const PhoneComparisons = ({ posts }) => {
  return (
    <div className=' flex flex-col'>
        <h1 className=' text-2xl lg:text-3xl font-semibold'>Phone Comparisons</h1>
        <div className=' flex flex-col sm:flex-row sm:overflow-x-auto whitespace-nowrap snap-x snap-mandatory '>
            {posts.map((post) => (
              <Link key={post._id} href={`/${post.slug}`} aria-label={`Read more about ${post.title}`}>
                <div className=' flex flex-row w-full p-4 gap-4 sm:min-w-[350px] sm:flex-col rounded-sm overflow-hidden'>
                  <div className='relative w-[20%] h-15 rounded-sm sm:rounded-sm bg-white object-cover sm:mt-0 sm:ml-0 sm:w-full sm:h-[200px] sm:rounded-t-sm '>
                    <Image 
                      src={post.postImage} 
                      alt={`Image for the post titled ${post.title}`} 
                      fill
                      sizes="(max-width: 640px) 8rem, 100vw"
                      priority
                      className=" object-cover"
                    />
                  </div>
                  <div className=' space-y-2 w-[80%] sm:w-full'>
                    <div className=' hidden sm:flex text-xs text-gray-600 justify-between'>
                      <h4 className=' font-semibold text-primary'>{post.category}</h4>
                      <h4>{post.author}</h4>
                    </div>
                    <h2 className=' text-base sm:text-lg font-bold leading-normal hover:text-primary line-clamp-3 text-wrap'>
                      {post.title}
                    </h2>
                    <p className=' text-xs text-gray-400'>
                      {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default PhoneComparisons