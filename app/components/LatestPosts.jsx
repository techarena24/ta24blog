import { client } from '@/sanity/lib/client'
import { LatestPostsClient } from './LatestPostsClient';

// Revalidate every 5 mins
export const revalidate = 300;

/*{ fetching all posts from sanity backend }*/
const getAllPosts = async () => {
  const query = `*[_type == 'post'] | order(publishedAt desc) [0...10] {
    _id,
    title,
    slug,
    "postImage": postImage.asset->url,
    "author": author->name,
    publishedAt,
    "categories": categories[]->{title, slug},
    body,
  }`

  const totalCountQuery = `count(*[_type == "post"])`;

  //const posts = await client.fetch(query);
  const [initialPosts, totalPostCount] = await Promise.all([
    client.fetch(query, {}, { cache: 'no-store' }),
    client.fetch(totalCountQuery, {}, { cache: 'no-store' })
  ]);
  return { initialPosts, totalPostCount };
}

const LatestPosts = async () => {
  const { initialPosts, totalPostCount } = await getAllPosts();

  return (
    <LatestPostsClient initialPosts={initialPosts} totalPostCount={totalPostCount}/>
  )
}

export default LatestPosts