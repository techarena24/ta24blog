import AdBanner from "@/app/components/AdBanner";
import BigAdBanner from "@/app/components/BigAdBanner";
import { myPortableTextComponents } from "@/app/components/portableTextComponents";
import { client } from "@/sanity/lib/client";
import { formatDistanceToNow } from "date-fns";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";


// Revalidate every 5 mins
export const revalidate = 300;

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
}`

    const params = { slug };
    return await client.fetch(query, params);
}


const singlePostPage = async ({ params }) => {
    const { slug } = await params;

    try{
        const post = await getPostBySlug(slug);
        console.log(post.body);

        if(!post) {
            notFound()
        }
    

        return (
            <div className=' flex flex-col space-y-10'>
                <div className=' block md:hidden'>
                    <AdBanner />
                </div>

                <div className=' md:flex md:gap-8 items-start md:min-h-screen'>
                    <div className=' block md:flex-[70%] space-y-2 md:space-y-2 md:h-screen md:overflow-y-auto'>
                        <div className=" relative h-48 sm:h-60 md:h-80 w-full bg-gray-200">
                            <Image 
                                src={post.postImage.asset?.url || ""}
                                alt={post.postImage?.alt || post.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 70vw"
                                className=" object-cover"
                            />
                            <div className=" absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80 z-10" />
                            <div className=" absolute bottom-0 p-4 w-full z-20">
                                <h1 className=" text-white text-lg sm:text-2xl md:text-3xl font-bold">
                                    {post.title}
                                </h1>
                            </div>
                        </div>
                        <div className=" flex flex-row justify-between lg:px-4">
                            <div className=" flex flex-col md:block space-x-2">
                                <span className=" text-xs">
                                    {post.author || "Guest"}
                                </span>
                                <span className=" text-xs">{formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}</span>
                            </div>
                            <div>
                                {post.categories?.map((cat) => (
                                    <span key={cat.slug} className="text-xs rounded-xs font-medium bg-primary px-1 py-0.5 text-gray-200">
                                        {cat.title}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className=" lg:px-4 pb-6">
                            <PortableText value={post.body} components={myPortableTextComponents} />
                        </div>
                    </div>

                    <div className=" hidden md:block md:w-[300px] md:h-screen ">
                        <div className=" md:sticky md:top-0 md:h-[100vh] md:overflow-y-auto border">
                            <p>ads</p>
                        </div>
                    </div>
                </div>

                <BigAdBanner />
            </div>
        )
    } catch (error) {
        console.error("Failed to load post:", error);
        notFound();
    }
}

export default singlePostPage