import { client } from "@/sanity/lib/client";

export const fetchedLatestDevices = async () => {
    const query = `*[_type == "device"] | order(publishDate desc) [0...20] {
        _id,
        title,
        "slug": slug.current,
        "deviceImage": deviceImage.asset->url,
        "author": author->name,
        "categories": categories[]->title,
        specs {
            display,
            chipset,
            network,
            battery,
            ram,
            storage,
            software,
            launchDate,
            availableDate,
        },
        publishDate,
        body
    }`

    const posts = await client.fetch(query, {}, { cache: 'no-store' });
    return posts;
}