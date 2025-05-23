import AdBanner from '@/app/components/AdBanner'
import BigAdBanner from '@/app/components/BigAdBanner'
import { fetchedNewsPosts } from '@/lib/fetchedNewsApi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toPlainText } from '@portabletext/react'
import { formatDistanceToNow } from 'date-fns'


export const metadata = {
  title: "Tech News",
  description: "Get the latest tech news and breaking stories at Tech Arena24. Our expert team delivers timely and insightful coverage on the newest trends, announcements, and developments in the world of technology."
}

  // Truncated text function to line-clamp the post paragraphs
const truncatedText = (text, length) => {
  return text.length > length ? text.slice(0, length) + '...' : text;
};

const page = async () => {
  const posts = await fetchedNewsPosts();

  return (
    <div className=' flex flex-col space-y-10'>
      <div className=' block md:hidden'>
        <AdBanner />
      </div>

      <div className=' md:flex md:gap-8 items-start md:min-h-screen'>
        <div className=' block md:flex-[70%] space-y-6 md:space-y-8 md:h-screen md:overflow-y-auto'>
          <div>
            {posts.length > 0 && (
              <Link key={posts[0]._id} href={`/${posts[0].slug}`} aria-label={`Read more about ${posts[0].title}`}>
                <div className=' flex flex-col shadow-sm border p-4 gap-4 rounded-sm'>
                  <Image 
                    src={posts[0].postImage}
                    alt={`Image for the post titled ${posts[0].title}`}
                    width={1000}
                    height={700}
                    priority
                    className=' h-28 w-full md:h-80 object-cover bg-white rounded-sm'
                  />
                  <div className=' space-y-2'>
                    <div className=' hidden sm:flex text-xs text-gray-600 justify-between'>
                      <h4 className=' font-semibold text-primary'>{posts[0].category}</h4>
                      <h4>{posts[0].author}</h4>
                    </div>
                    <h2 className=' font-bold text-lg md:text-2xl line-clamp-3'>{posts[0].title}</h2>
                    <p className=' text-sm line-clamp-3'>
                      {truncatedText(toPlainText(posts[0].body || []), 150)}
                      <span className=' font-normal text-black/90 dark:text-white/80'>Read more</span>
                    </p>
                    <p className=' text-xs text-gray-400'>
                      {formatDistanceToNow(new Date(posts[0].publishedAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div className=' block md:grid md:grid-cols-2 md:gap-6 space-y-6'>
            {posts.slice(1).map((post) => (
              <Link key={post._id} href={`/${post.slug}`}>
                <div className=' flex flex-col shadow-sm border p-4 gap-4 rounded-sm'>
                  <Image 
                    src={post.postImage}
                    alt={`Image for the post titled ${post.title}`}
                    width={1000}
                    height={700}
                    priority
                    className=' w-full h-28 md:h-40 object-cover bg-white rounded-sm'
                  />
                  <div className=' space-y-2'>
                    <h2 className=' font-bold text-base md:text-lg'>{post.title}</h2>
                    <p className=' text-sm line-clamp-3'>
                      {truncatedText(toPlainText(post.body || []), 150)}
                      <span className=' font-normal text-black/90 dark:text-white/80'>Read more</span>
                    </p>
                    <p className=' text-xs text-gray-400'>
                      {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className=" hidden md:block md:w-[300px] md:h-screen ">
          <div className=" md:sticky md:top-0 md:h-[100vh] md:overflow-y-auto border">
            <p>ads</p>
          </div>
        </div>
      </div>

      <BigAdBanner />
    </div>
  )
}

export default page