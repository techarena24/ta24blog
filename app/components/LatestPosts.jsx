import { Button } from '@/components/ui/button'
import { slugify } from '@/lib/slugify'
import { client } from '@/sanity/lib/client'
import { formatDistanceToNow } from 'date-fns'
import { toPlainText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export const posts = [
  { 
    id: 1,
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"),
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 2,
    img: "/images/Galaxy_S24.avif",  
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 3, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 4, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 5,
    img: "/images/Galaxy_S24.avif",  
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 6, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 7, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 8, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 9, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
  { 
    id: 10, 
    img: "/images/Galaxy_S24.avif", 
    title: "Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max",
    slug: slugify("Samsung Galaxy S25 Ultra vs Apple iPhone 16 Pro Max"), 
    content: "This two smartphones are the top-tier flagships with many features that set them apart from other normal phones",
    category: "Phone Comparison",
    author: "John Doe",
    date: "10 mins ago",
  },
]

// Revalidate every 5 mins
export const revalidate = 300;

/*{ fetching all posts from sanity backend }*/
const getAllPosts = async () => {
  const query = `*[_type == 'post'] {
    _id,
    title,
    slug,
    "postImage": postImage.asset->url,
    "author": author->name,
    publishedAt,
    "categories": categories[]->{title, slug},
    body,
  }`

  const posts = await client.fetch(query);
  return posts;
}

const LatestPosts = async () => {
  const data = await getAllPosts()

  // Truncated text function to line-clamp the post paragraphs in the homepage
  const truncatedText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  return (
    <div className=' flex flex-col flex-[2] space-y-6'>
        <h1 className=' text-2xl lg:text-3xl font-semibold'>Latest Posts</h1>
        <div>
            <div className=' grid sm:grid-cols-2 gap-6'>
                {data.map((post) => ( 
                  <Link key={post._id} href={`/${post.slug?.current}`} aria-label={`Read more about ${post.title}`}>
                    <div className=' flex flex-row gap-4 p-1 sm:flex-col overflow-hidden'>
                      <Image 
                        src={post.postImage} 
                        alt={`Image for the post titled ${post.title}`}
                        width={1000} 
                        height={800} 
                        priority
                        className=' w-32 h-28 bg-white object-cover sm:mt-0 sm:ml-0 sm:w-full sm:h-[200px]'
                      />
                      <div className=' space-y-2'>
                        <div className=' hidden sm:flex text-xs text-gray-600 justify-between'>
                          <h4 className=' font-semibold text-primary'>
                            {post.categories.map((category) => (
                              <span key={category.slug.current} className="inline-block mr-2 last:mr-0">
                                {category.title}
                              </span>
                            ))}
                          </h4>
                          <h4>{post.author}</h4>
                        </div>
                        <h2 className=' text-base sm:text-lg font-bold leading-normal hover:text-primary line-clamp-3'>
                          {post.title}
                        </h2>
                        <div className=''>
                          <p className=' hidden sm:block text-sm text-gray-500 line-clamp-3'>
                            {truncatedText(toPlainText(post.body || []), 150)} 
                            <span className=' font-normal text-black/90 dark:text-white/80'>Read more</span>
                          </p>
                        </div>
                        <p className=' text-xs text-gray-400'>
                          {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
        </div>

        <Button className={" py-2 rounded-sm text-white bg-primary"}>
          Load More
        </Button>
    </div>
  )
}

export default LatestPosts