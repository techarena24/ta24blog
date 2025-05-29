import { client } from "@/sanity/lib/client";

export const fetchDeviceBySlug = async (slug) => {
  const query = `*[_type == "device" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      "deviceImage": deviceImage.asset->url,
      "author": author->name,
      "categories": categories[]->title,
      specs {
        display,
        camera,
        chipset,
        network,
        battery,
        ram,
        storage,
        software,
        launchDate,
        availableDate
      },
      publishDate,
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

  const device = await client.fetch(query, { slug }, { cache: "no-store" });
  return device;
};
