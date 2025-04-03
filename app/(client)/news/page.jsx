import BigAdBanner from '@/app/components/BigAdBanner'
import { posts } from '@/app/components/LatestPosts'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col space-y-20'>
      <div className=' flex gap-8 items-start min-h-screen'>
        <div className=' flex-[70%] space-y-8 h-screen overflow-y-auto'>
          <div>
            {posts.length > 0 && (
              <div key={posts[0].id} className=' flex flex-col shadow-sm border p-4 gap-4 rounded-sm'>
                <Image 
                  src={posts[0].img}
                  alt={posts[0].title}
                  width={500}
                  height={300}
                  priority
                  className=' w-full h-80 object-contain bg-white rounded-sm'
                />
                <div className=' space-y-2'>
                  <div className=' hidden sm:flex text-xs text-gray-600 justify-between'>
                    <h4 className=' font-semibold text-primary'>{posts[0].category}</h4>
                    <h4>{posts[0].author}</h4>
                  </div>
                  <h2 className=' font-bold text-2xl line-clamp-3'>{posts[0].title}</h2>
                  <p className=' text-sm line-clamp-3'>{posts[0].content}</p>
                  <p className=' text-xs text-gray-400'>{posts[0].date}</p>
                </div>
              </div>
            )}
          </div>

          <div className=' grid grid-cols-2 gap-6'>
            {posts.slice(1).map((post) => (
              <div key={post.id} className=' flex flex-col shadow-sm border p-4 gap-4 rounded-sm'>
                <Image 
                  src={post.img}
                  alt={post.title}
                  width={200}
                  height={150}
                  priority
                  className=' w-full h-40 object-contain bg-white rounded-sm'
                />
                <div className=' space-y-2'>
                  <h2 className=' font-bold text-lg line-clamp-3'>{post.title}</h2>
                  <p className=' text-sm line-clamp-3'>{post.content}</p>
                  <p className=' text-xs text-gray-400'>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[300px] h-screen ">
          <div className="sticky top-0 h-[100vh] overflow-y-auto border">
            <p>ads</p>
          </div>
        </div>
      </div>

      <div>
        <BigAdBanner />
      </div>
    </div>
  )
}

export default page