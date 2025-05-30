// import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap() {
  // ✅ Fetch all posts instead of one by slug
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt
  }`;

  const posts = await client.fetch(query, {}, { cache: "no-store" });

  const postUrls = posts.map((post) => ({
    url: `${baseURL}/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/deals`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/latestdevices`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/reviews`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/news`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...postUrls,
  ];
}
