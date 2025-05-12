// import {MetadataRoute} from "next";
// import { client } from "@/sanity/lib/client";

export default async function sitemap() {
  /*{ fetching single post from sanity backend }*/

  // const getPostBySlug = async (slug) => {
  //   const query = `*[_type == "post" && slug.current == $slug][0]{
  //     _id,
  //     title,
  //     slug,
  //     publishedAt,
  //     "postImage": postImage{
  //       alt,
  //       caption,
  //       asset->{
  //         url,
  //         metadata
  //       }
  //     },
  // }`;

  //   const params = { slug };
  //   return await client.fetch(query, params, { cache: "no-store" });
  //   //return await client.fetch(query, params);
  // };

  // const posts = await getPostBySlug(slug);

  // const postUrls = posts.map((post) => ({
  //   url:`https://techarena24.com/${post.slug}`,
  //   lastModified: new Date(post.publishedAt),
  // }))

  return [
    {
      url: "https://techarena24.com",
      lastModified: new Date(),
      changeFrequency: "Monthly",
      priority: 1,
    },

    {
      url: "https://techarena24.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: "https://techarena24.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: "https://techarena24.com/deals",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: "https://techarena24.com/latestdevices",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: "https://techarena24.com/reviews",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    {
      url: "https://techarena24.com/news",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    // ...postUrls,
  ];
}
