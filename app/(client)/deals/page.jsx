import AdBanner from "@/app/components/AdBanner";
import BigAdBanner from "@/app/components/BigAdBanner";
import { posts } from "@/app/components/LatestPosts";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tech Deals",
  description:
    "Discover the best tech deals online at Tech Arena24! Find discounts on the latest smartphones, laptops, gadgets, accessories, and more. Save big on your favorite technology.",
};

const page = () => {
  return (
    <div className=" flex flex-col space-y-10">
      <div className=" block md:hidden">
        <AdBanner />
      </div>

      <div className=" md:flex md:gap-8 items-start md:min-h-screen">
        <div className=" block md:flex-[70%] space-y-6 md:space-y-8 md:h-screen md:overflow-y-auto">
          <div>
            {posts.length > 0 && (
              <Link key={posts[0].id} href={`/${posts[0].slug}`}>
                <div className=" flex flex-col shadow-sm border p-4 gap-4 rounded-sm">
                  <Image
                    src={posts[0].img}
                    alt={posts[0].title}
                    width={1000}
                    height={900}
                    priority
                    className=" h-28 w-full md:h-80 object-contain bg-white rounded-sm"
                  />
                  <div className=" space-y-2">
                    <div className=" hidden sm:flex text-xs text-gray-600 justify-between">
                      <h4 className=" font-semibold text-primary">
                        {posts[0].category}
                      </h4>
                      <h4>{posts[0].author}</h4>
                    </div>
                    <h2 className=" font-bold text-lg md:text-2xl line-clamp-3">
                      {posts[0].title}
                    </h2>
                    <p className=" text-sm line-clamp-3">{posts[0].content}</p>
                    <p className=" text-xs text-gray-400">{posts[0].date}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div className=" block md:grid md:grid-cols-2 md:gap-6 space-y-6">
            {posts.slice(1).map((post) => (
              <Link key={post.id} href={`/${post.slug}`}>
                <div
                  key={post.id}
                  className=" flex flex-col shadow-sm border p-4 gap-4 rounded-sm"
                >
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={1000}
                    height={900}
                    priority
                    className=" w-full h-28 md:h-40 object-contain bg-white rounded-sm"
                  />
                  <div className=" space-y-2">
                    <h2 className=" font-bold text-base md:text-lg line-clamp-3">
                      {post.title}
                    </h2>
                    <p className=" text-sm line-clamp-3">{post.content}</p>
                    <p className=" text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
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
  );
};

export default page;
