import { client } from "@/sanity/lib/client"

export const fetchedPhoneComparisonPosts = async () => {
    const query = `*[_type == "post" && "phone-comparison" in categories[] -> slug.current] 
    | order(publishedAt desc)[0...6] {
        _id,
      title,
      "slug": slug.current,
      "postImage": postImage.asset->url,
      "author": author->name,
      publishedAt,
      "category": categories[0]->title,
      body
  }`

  const posts = await client.fetch(query, {}, { cache: 'no-store' });
  return posts;
}