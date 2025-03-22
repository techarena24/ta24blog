
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'


export const posts = [
  { 
    id: 1,
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 2,
    img: "/images/Galaxy_S24.avif",  
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 3, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 4, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 5,
    img: "/images/Galaxy_S24.avif",  
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 6, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 7, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 8, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 9, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 10, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max", 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
]
const LatestPosts = () => {

  return (
    <div className=' flex flex-col flex-[2] space-y-6'>
        <h1 className=' text-xl font-bold'>Latest Posts</h1>
        <div>
            <div className=' grid sm:grid-cols-2 gap-6'>
                {posts.map((post) => (
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
                      <p className=' hidden sm:block text-sm text-gray-500 line-clamp-3'>{post.content}</p>
                      <p className=' text-xs text-gray-400'>{post.date}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>

        <Button className={" py-5 rounded-sm"}>
          Load More
        </Button>
    </div>
  )
}

export default LatestPosts