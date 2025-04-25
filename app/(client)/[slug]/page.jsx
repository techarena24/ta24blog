import AdBanner from "@/app/components/AdBanner";
import BigAdBanner from "@/app/components/BigAdBanner";
import { posts } from "@/app/components/LatestPosts";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
    return posts.map((post) => (
        {slug: post.slug,}
    ))
}

const singlePostPage = async ( props ) => {
    const params = await props.params;
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
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
                        src={post.img}
                        alt={post.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 70vw"
                        className=" object-contain"
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
                        <span className=" text-xs">{post.author}</span>
                        <span className=" text-xs">{post.date}</span>
                    </div>
                    <div>
                        <span className=" text-sm font-medium">{post.category}</span>
                    </div>
                </div>
                <div className=" lg:px-4 pb-6 text-justify">
                    <p>
                        {post.content}
                    </p>
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
}

export default singlePostPage