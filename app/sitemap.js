import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap() {
  /*{ fetching single post from sanity backend }*/

  const getPostBySlug = async (slug) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      "postImage": postImage{
        alt,
        caption,
        asset->{
          url,
          metadata
        }
      },
  }`;

    const params = { slug };
    return await client.fetch(query, params, { cache: "no-store" });
    //return await client.fetch(query, params);
  };

  const posts = await getPostBySlug(slug);

  const postUrls = posts.map((post) => ({
    url: `${baseURL}/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "Monthly",
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
