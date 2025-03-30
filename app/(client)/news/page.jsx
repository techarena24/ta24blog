import { posts } from '@/app/components/LatestPosts'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' flex gap-8 items-start'>
      <div className=' flex-[70%] border'>
        <div>
          {posts.length > 0 && (
            <div key={posts[0].id} className=''>
              <Image 
                src={posts[0].img}
                alt={posts[0].title}
                width={500}
                height={300}
                priority
                className=' w-full h-80 object-contain'
              />
            </div>
          )}
        </div>
      </div>
      <div className=' flex-[30%] border h-screen'>
        <p>ads</p>
      </div>
    </div>
  )
}

export default page