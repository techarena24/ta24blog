import { client } from "@/sanity/lib/client"

export const fetchedNewsPosts = async (start = 0, end = 10) => {
  const query = `*[_type == "post" && "news" in categories[] -> slug.current] 
    | order(publishedAt desc)[${start}...${end}] {
        _id,
      title,
      "slug": slug.current,
      "postImage": postImage.asset->url,
      "author": author->name,
      publishedAt,
      "category": categories[0]->title,
      body
  }`


  const countQuery = `count(*[_type == "post" && "news" in categories[]->slug.current])`;

  const [posts, totalCount] = await Promise.all([
    client.fetch(query, {}, { cache: 'no-store' }),
    client.fetch(countQuery, {}, { cache: 'no-store' }),
  ])

  return { posts, totalCount }
}