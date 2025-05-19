import { slugify } from '@/lib/slugify'
import { client } from '@/sanity/lib/client'
import { LatestPostsClient } from './LatestPostsClient';


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