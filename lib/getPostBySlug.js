import { client } from "@/sanity/lib/client";

/*{ fetching single post from sanity backend }*/
export const getPostBySlug = async (slug) => {
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
      "author": author->name,
      "categories": categories[]->{
        title,
        slug
      },
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->{
          _ref,
            url,
            metadata
          }
        },
        _type == "deviceReference" => {
          _type,
          "name": device->name,
          "slug": device->slug
        },
        _type == "postReference" => {
          _type,
          "title": @->title,
          "slug": @->slug
        },
        _type == "link" => {
          _type,
          url,
          title,
          style
        }
      }
  }`;
  
    return await client.fetch(query, { slug }, { cache: "no-store" });
    //return await client.fetch(query, params);
};