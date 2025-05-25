import { client } from "@/sanity/lib/client";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const offset = parseInt(searchParams.get('offset') || '0', 10);
    const limit = parseInt(searchParams.get('limit') || '2', 10);
    const start = offset;
    const end = offset + limit;


    const query = `*[_type == 'post'] | order(publishedAt desc) [${start}...${end}] {
        _id,
        title,
        slug,
        "postImage": postImage.asset->url,
        "author": author->name,
        publishedAt,
        "categories": categories[]->{title, slug},
        body,
      }`
    
      //const posts = await client.fetch(query);
      const posts = await client.fetch(query, {}, { cache: 'no-store' });
      return Response.json(posts);    
}
