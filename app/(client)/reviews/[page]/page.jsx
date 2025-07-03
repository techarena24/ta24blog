import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { toPlainText } from "@portabletext/react";
import AdBanner from "@/app/components/AdBanner";
import { fetchedReviewPosts } from "@/lib/fetchedReviewApi";
// import { Metadata } from "next";

export const dynamic = "force-dynamic";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const POSTS_PER_PAGE = 10;

const truncate = (text, length) =>
  text.length > length ? text.slice(0, length) + "..." : text;

export async function generateMetadata({ params }) {
  const pageNumber = parseInt(params.page, 10);
  const isValid = !isNaN(pageNumber) && pageNumber > 0;
  const currentPage = isValid ? pageNumber : 1;

  const title = isValid
    ? `Tech Gadget Reviews – Page ${currentPage} | Tech Arena24`
    : `Tech Gadget Reviews | Tech Arena24`;

  const description = isValid
    ? `Explore page ${currentPage} of in-depth tech gadget reviews—from the latest smartphones and gaming consoles to laptops and desktops—at Tech Arena24.`
    : `Explore in-depth tech gadget reviews on Tech Arena24: smartphones, gaming consoles, laptops, desktops, and more.`;

  const url = `${baseURL}/reviews/${currentPage}`;
  const ogImage = `${baseURL}/images/reviews-page.jpg`;

  return {
    title,
    description,

    // canonical link
    alternates: {
      canonical: url,
    },

    // Open Graph for Facebook, LinkedIn, etc.
    openGraph: {
      title,
      description,
      url,
      siteName: "Tech Arena24",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Tech Arena24 Reviews",
        },
      ],
    },

    // Twitter card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: "@techarena24",
      creator: "@techarena24",
    },

    // Tell bots to index and follow
    robots: {
      index: true,
      follow: true,
    },
  };
}

const ReviewPage = async (props) => {
  const params = await props.params;
  const page = params.page;
  const pageNumber = parseInt(page, 10);

  if (isNaN(pageNumber) || pageNumber < 1) {
    redirect("/reviews/1");
  }

  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const { posts, totalCount } = await fetchedReviewPosts(start, end);
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber >= totalPages;

  // Generate JSON-LD schema dynamically from posts
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. The CollectionPage itself
      {
        "@type": "CollectionPage",
        "@id": `${baseURL}/reviews/${pageNumber}#collectionpage`,
        url: `${baseURL}/reviews/${pageNumber}`,
        name: "Latest Reviews",
        isPartOf: { "@id": `${baseURL}/#website` },
        breadcrumb: { "@id": `${baseURL}/reviews/${pageNumber}#breadcrumbs` },
        mainEntity: { "@id": `${baseURL}/reviews/${pageNumber}#itemlist` },
      },

      // 2. The breadcrumb trail (Home → Reviews)
      {
        "@type": "BreadcrumbList",
        "@id": `${baseURL}/reviews/${pageNumber}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseURL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Reviews",
            item: `${baseURL}/reviews`,
          },
        ],
      },

      // 3. Your original ItemList (now with an @id so CollectionPage can reference it)
      {
        "@type": "ItemList",
        "@id": `${baseURL}/reviews/${pageNumber}#itemlist`,
        name: "Latest Reviews",
        description: "List of the latest reviews published on our site",
        url: `${baseURL}/reviews/${pageNumber}`,
        itemListOrder: "http://schema.org/ItemListOrderDescending",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${baseURL}/${post.slug}`,
          name: post.title,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="flex flex-col space-y-10 mt-5">
        {/* <div className="block md:hidden">
          <AdBanner />
        </div> */}

        <div className="md:flex md:gap-8 items-start md:min-h-screen">
          <div className="flex flex-col gap-6 md:flex-[70%] md:h-screen md:overflow-y-auto">
            {/* Featured Post */}
            {posts[0] && (
              <Link href={`/${posts[0].slug}`} key={posts[0]._id}>
                <div className="flex flex-col gap-4">
                  <div className="relative h-40 w-full md:h-80">
                    <Image
                      src={posts[0].postImage}
                      alt={posts[0].title}
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="hidden sm:flex justify-between text-xs text-gray-600">
                      <h4 className="font-semibold text-primary">
                        {posts[0].category}
                      </h4>
                      <h4 className="bg-gray-300 rounded-xs px-1 py-0.5 text-black text-[10px]">
                        {posts[0].author}
                      </h4>
                    </div>
                    <h2 className="font-bold text-lg md:text-2xl line-clamp-3">
                      {posts[0].title}
                    </h2>
                    <p className="text-sm line-clamp-3">
                      {truncate(toPlainText(posts[0].body || []), 150)}
                      <span className="font-normal text-black/90 dark:text-white/80">
                        {" "}
                        Read more
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatDistanceToNow(new Date(posts[0].publishedAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining Posts */}
            <div className="grid gap-7 md:grid-cols-2">
              {posts.slice(1).map((post) => (
                <Link href={`/${post.slug}`} key={post._id}>
                  <div className="flex flex-col gap-3.5">
                    <Image
                      src={post.postImage}
                      alt={post.title}
                      width={1000}
                      height={700}
                      priority
                      className="w-full h-40 md:h-48 object-cover bg-white"
                    />
                    <div className="space-y-2">
                      <h2 className="font-bold text-base md:text-lg">
                        {post.title}
                      </h2>
                      <p className="text-sm line-clamp-3">
                        {truncate(toPlainText(post.body || []), 150)}
                        <span className="font-normal text-black/90 dark:text-white/80">
                          {" "}
                          Read more
                        </span>
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatDistanceToNow(new Date(post.publishedAt), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between mt-10">
              {!isFirstPage && (
                <Link href={`/reviews/${pageNumber - 1}`}>
                  <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                    ← Previous
                  </button>
                </Link>
              )}
              {!isLastPage && (
                <Link href={`/reviews/${pageNumber + 1}`}>
                  <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded ml-auto">
                    Next →
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar Ads */}
          <aside className="hidden md:block md:w-[300px] md:h-screen">
            <div className="md:sticky md:top-0 md:h-[100vh] md:overflow-y-auto border">
              <AdBanner slot="4220368538" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
