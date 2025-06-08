'use client';

import { useState } from 'react';
import { toPlainText } from '@portabletext/react';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const POSTS_PER_PAGE = 2;
export const LatestPostsClient = ({ initialPosts, totalPostCount }) => {
    const [posts, setPosts] = useState([...initialPosts]);
    const [loading, setLoading] = useState(false);
    const [fetchedCount, setFetchedCount] = useState(initialPosts.length);


    const hasMore = fetchedCount < totalPostCount;

    const loadMorePosts = async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/posts?offset=${fetchedCount}&limit=${POSTS_PER_PAGE}`);
            const newPosts = await res.json();

            if (newPosts.length > 0) {
                setPosts(current => {
                  const trimmed = current.slice(POSTS_PER_PAGE); // Remove 2 newest
                  const combined = [...trimmed, ...newPosts];
                  return combined.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
                });
                setFetchedCount(prev => prev + newPosts.length);
            }
        } catch (error) {
            console.error('Failed to load more posts:', error);
        } finally {
            setLoading(false);
        }
      
    };
  

    // Truncated text function to line-clamp the post paragraphs in the homepage
    const truncatedText = (text, length) => {
        return text.length > length ? text.slice(0, length) + '...' : text;
    };

    return (
        <div className=' flex flex-col flex-[2] space-y-6'>
            <h1 className=' text-2xl lg:text-3xl font-semibold'>Latest Posts</h1>
            <div>
                <div className=' grid sm:grid-cols-2 gap-6'>
                    {posts.map((post) => ( 
                      <Link key={post._id} href={`/${post.slug?.current}`} aria-label={`Read more about ${post.title}`}>
                        <div className=' flex flex-row gap-4 p-1 sm:flex-col overflow-hidden'>
                          <div className='relative w-32 h-28 sm:w-full sm:h-[200px] bg-white flex-shrink-0'>
                            <Image 
                              src={post.postImage} 
                              alt={`Image for the post titled ${post.title}`}
                              fill
                              sizes="(max-width: 640px) 128px, 100vw"
                              className="object-cover rounded"
                              priority
                            />
                          </div>
                          <div className=' space-y-2'>
                            <div className=' hidden sm:flex text-xs text-gray-600 justify-between'>
                              <h4 className=' font-semibold text-primary'>
                              {post.categories?.[0] && (
                                <span className="inline-block mr-2">
                                  {post.categories[0].title}
                                </span>
                              )}
                              </h4>
                              <h4 className=' text-[10px] py-0.5 px-1 bg-gray-300 rounded-xs text-black'>
                                {post.author}
                              </h4>
                            </div>
                            <h2 className=' text-base sm:text-lg font-bold leading-normal hover:text-primary line-clamp-3'>
                              {post.title}
                            </h2>
                            <div className=''>
                              <p className=' hidden sm:block text-sm text-gray-500'>
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
    
            {hasMore && (
                <Button onClick={loadMorePosts} disabled={loading} className="py-2 rounded-sm text-white bg-primary" >
                    {loading ? 'Loading...' : 'Load More'}
                </Button>
            )}

        </div>
    )
}