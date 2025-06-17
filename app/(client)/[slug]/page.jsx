import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import SinglePostPage from "@/app/components/SinglePost";
import { fetchDeviceBySlug } from "@/lib/fetchDeviceSpecsBySlug";
import { getPostBySlug } from "@/lib/getPostBySlug";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// Revalidate every 5 mins
export const revalidate = 300;

// Old Dynamic Metadata
// export async function generateMetadata(props) {
//   const { slug } = await Promise.resolve(props.params);

//   const post = await getPostBySlug(slug).catch(() => null);

//   if (post) {
//     const metaDataImage = post.postImage?.asset?.url;
//     const description = post.summary || "No description available";
//     return {
//       title: post.title,
//       description,
//       openGraph: {
//         title: post.title,
//         description,
//         type: "article",
//         locale: "en_US",
//         url: `${baseURL}/${slug}`,
//         siteName: "Tech Arena24",
//         images: metaDataImage
//           ? [
//               {
//                 url: urlFor(metaDataImage),
//                 width: 1200,
//                 height: 630,
//                 alt: post.postImage?.alt || post.title,
//               },
//             ]
//           : [], // Handle cases where there's no featured image
//       },
//     };
//   }

//   const device = await fetchDeviceBySlug(slug).catch(() => null);
//   if (device) {
//     return {
//       title: device.title,
//       description: device.summary,
//       openGraph: {
//         title: device.title,
//         description: device.summary,
//         type: "article",
//         locale: "en_US",
//         url: `${baseURL}/${slug}`,
//         siteName: "Tech Arena24",
//         images: device.deviceImage
//           ? [
//               {
//                 url: device.deviceImage,
//                 width: 1200,
//                 height: 630,
//                 alt: device.deviceImage.alt || device.title,
//               },
//             ]
//           : [], // Handle cases where there's no featured image
//       },
//     };
//   }

//   return {
//     title: "Not Found",
//     description: "Sorry, this page does not exist.",
//   };
// }

//New dynamic metadata
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const url = `${baseURL}/${slug}`;

  // Try Blog Post
  const post = await getPostBySlug(slug).catch(() => null);
  if (post) {
    const title = `${post.title} | Tech Arena24`;
    const description =
      post.summary || `Read our latest article: ${post.title}`;
    const imageUrl = post.postImage?.asset?.url
      ? urlFor(post.postImage.asset.url).width(1200).height(630).url()
      : `${base}/opengraph-image.jpg`;
    const published = post.publishedAt;
    const modified = post.updatedAt || published;
    const authorSlug =
      post.authorSlug || post.author.replace(/\s+/g, "-").toLowerCase();
    const authorUrl = `${baseURL}/author/${authorSlug}`;
    const tags = post.categories?.map((c) => c.title) ?? [];

    return {
      title,
      description,

      alternates: { canonical: url },

      openGraph: {
        title,
        description,
        url,
        siteName: "Tech Arena24",
        type: "article",
        locale: "en_US",
        publishedTime: published,
        modifiedTime: modified,
        authors: [authorUrl],
        tags,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.postImage?.alt || post.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
        site: "@techarena24",
        creator: "@techarena24",
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  }

  // Try Device Article
  const device = await fetchDeviceBySlug(slug).catch(() => null);
  if (device) {
    const title = `${device.title} Specs & Review | Tech Arena24`;
    const description =
      device.summary || `Explore specs and insights on the ${device.title}.`;
    const imageUrl = device.deviceImage || `${base}/opengraph-image.jpg`;
    const published = device.publishedAt;
    const modified = device.updatedAt || published;
    const tags = device.categories?.map((c) => c.title) ?? [];

    return {
      title,
      description,

      alternates: { canonical: url },

      openGraph: {
        title,
        description,
        url,
        siteName: "Tech Arena24",
        type: "article",
        locale: "en_US",
        publishedTime: published,
        modifiedTime: modified,
        tags,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: device.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
        site: "@techarena24",
        creator: "@techarena24",
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  }

  // Fallback for 404
  return {
    title: "Not Found | Tech Arena24",
    description: "Sorry, this page does not exist.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

const Page = async (props) => {
  const { slug } = await Promise.resolve(props.params);

  const post = await getPostBySlug(slug).catch(() => null);
  if (post) {
    return <SinglePostPage post={post} />;
  }

  const device = await fetchDeviceBySlug(slug).catch(() => null);
  if (device) {
    return (
      <>
        <LatestDeviceTable device={device} />
      </>
    );
  }

  notFound();
};

export default Page;
