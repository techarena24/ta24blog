import Image from "next/image";
// import AdBanner from "./AdBanner";
import { formatDistanceToNow } from "date-fns";
import { PortableText } from "next-sanity";
// import BigAdBanner from "./BigAdBanner";
import { notFound } from "next/navigation";
import { myPortableTextComponents } from "./portableTextComponents";
import AdBanner from "./AdBanner";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// SinglePost Code
const SinglePostPage = async ({ post }) => {
  const description = post.summary || "No description available";

  const metaDataImage = post.postImage?.asset?.url;

  // old schema
  // const postSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "BlogPosting",
  //   headline: post.title,
  //   description,
  //   author: {
  //     "@type": "Person",
  //     name: post.author,
  //     url: baseURL, // Can be updated dynamically if author has profile pages
  //   },
  //   datePublished: post.publishedAt,
  //   image: [metaDataImage],
  //   mainEntityOfPage: {
  //     "@type": "WebPage",
  //     "@id": `${baseURL}/${post.slug}`,
  //   },
  //   publisher: {
  //     "@type": "Organization",
  //     name: "Tech Arena24",
  //     logo: {
  //       "@type": "ImageObject",
  //       url: `${baseURL}/images/logoTa24.jpeg`,
  //     },
  //   },
  //   articleSection:
  //     post.categories?.map((cat) => cat.title).join(", ") || "Uncategorized",
  //   inLanguage: "en",
  //   isAccessibleForFree: true,

  //   // Speakable added schema
  //   speakable: {
  //     "@type": "SpeakableSpecification",
  //     cssSelector: [`${post.tlte}, ${post.summary}`],
  //   },
  // };

  // new schema
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${baseURL}/${post.slug}#blogpost`,
    url: `${baseURL}/${post.slug}`,
    headline: post.title,
    alternativeHeadline: post.subtitle || "",
    description: description,
    image: [
      {
        "@type": "ImageObject",
        url: metaDataImage,
        width: post.postImage?.asset?.metadata?.dimensions?.width || 1200,
        height: post.postImage?.asset?.metadata?.dimensions?.height || 630,
        caption: post.postImage?.caption || post.title,
      },
    ],
    author: {
      "@type": "Person",
      name: post.author,
      // If you have author profile pages, point here:
      url: { baseURL },
      // url: `${baseURL}/author/${post.authorSlug || post.author.replace(/\s+/g, "-").toLowerCase()}`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseURL}/#organization`,
      name: "Tech Arena24",
      logo: {
        "@type": "ImageObject",
        url: `${baseURL}/images/logoTa24.jpeg`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseURL}/${post.slug}`,
    },
    keywords: (
      post.tags?.join(", ") ||
      post.categories?.map((c) => c.title).join(", ") ||
      ""
    ).trim(),
    articleSection: post.categories?.map((c) => c.title) || ["Uncategorized"],
    inLanguage: "en-US",
    isAccessibleForFree: true,
    wordCount: post.readingTime?.words || post.content?.split(/\s+/).length,
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: "http://schema.org/CommentAction",
        userInteractionCount: post.commentCount || 0,
      },
      {
        "@type": "InteractionCounter",
        interactionType: "http://schema.org/ShareAction",
        userInteractionCount: post.shareCount || 0,
      },
    ],
    discussionUrl: `${baseURL}/${post.slug}#comments`,
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: ["/html/head/title", "//article//p[1]"],
    },
  };

  try {
    // console.log("Post body blocks:", post.body);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
        />

        <div className=" flex flex-col space-y-10 mt-5">
          <div className=" md:flex md:gap-8 items-start md:min-h-screen">
            <div className=" block md:flex-[70%] space-y-2 md:space-y-2 md:h-screen md:overflow-y-auto">
              <div className=" relative h-48 sm:h-60 md:h-80 w-full bg-gray-200">
                <Image
                  src={post.postImage.asset?.url || ""}
                  alt={post.postImage?.alt || post.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 75vw, (max-width: 768px) 66vw, (max-width: 1024px) 50vw, 33vw"
                  className=" object-cover w-[1200px] h-[630px]"
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
                  {post.categories?.[0] && (
                    <span className="text-sm rounded-xs font-medium bg-gray-500 px-1 py-0.5 text-white">
                      {post.categories[0].title}
                    </span>
                  )}
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
                <AdBanner slot="4220368538" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Failed to load post:", error);
    notFound();
  }
};

export default SinglePostPage;
