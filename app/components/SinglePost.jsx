import Image from "next/image";
import AdBanner from "./AdBanner";
import { formatDistanceToNow } from "date-fns";
import { PortableText } from "next-sanity";
import BigAdBanner from "./BigAdBanner";
import { notFound } from "next/navigation";
import { myPortableTextComponents } from "./portableTextComponents";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// SinglePost Code
const SinglePostPage = async ({ post }) => {
  // const { slug } = await params;
  const firstTextBlock = post.body?.find(
    (block) => block._type === "block" && block.children
  );
  const description =
    firstTextBlock?.children?.[0]?.text?.slice(0, 170) ||
    "No description available";

  const metaDataImage = post.postImage?.asset?.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    author: {
      "@type": "Person",
      name: post.author,
      url: baseURL, //this should be dynamic. this is just to test the schema on Google
    },
    datePublished: post.publishedAt,
    image: [metaDataImage],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseURL}/${post.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Arena24",
      logo: {
        "@type": "ImageObject",
        url: `${baseURL}/images/logoTa24.jpeg`,
      },
    },
  };

  try {
    // console.log(post.body);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className=" flex flex-col space-y-10">
          <div className=" block md:hidden">
            <AdBanner />
          </div>

          <div className=" md:flex md:gap-8 items-start md:min-h-screen">
            <div className=" block md:flex-[70%] space-y-2 md:space-y-2 md:h-screen md:overflow-y-auto">
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
                  <span className=" text-[10px] py-0.5 px-1 bg-gray-300 rounded-xs text-black">
                    {post.author || "Guest"}
                  </span>
                  <span className=" text-xs">
                    {formatDistanceToNow(new Date(post.publishedAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <div>
                  {post.categories?.map((cat) => (
                    <span
                      key={cat.slug}
                      className="text-xs rounded-xs font-medium bg-primary px-1 py-0.5 text-gray-200"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
              </div>
              <div className=" lg:px-4 pb-6">
                <PortableText
                  value={post.body}
                  components={myPortableTextComponents}
                />
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
      </>
    );
  } catch (error) {
    console.error("Failed to load post:", error);
    notFound();
  }
};

export default SinglePostPage;
