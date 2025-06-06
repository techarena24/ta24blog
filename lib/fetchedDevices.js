import { client } from "@/sanity/lib/client";

export const fetchedLatestDevices = async (start = 0, end = 10) => {
    const query = `*[_type == "device"] | order(publishDate desc) [${start}...${end}] {
        _id,
        title,
        "slug": slug.current,
        summary,
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

    const countQuery = `count(*[_type == "device"])`;

    const [posts, totalCount] = await Promise.all([
        client.fetch(query, {}, { cache: 'no-store' }),
        client.fetch(countQuery, {}, { cache: 'no-store' }),
    ])
    
    return { posts, totalCount }
}