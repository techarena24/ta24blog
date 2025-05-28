import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import SinglePostPage from "@/app/components/SinglePost";
import { fetchDeviceBySlug } from "@/lib/fetchDeviceSpecsBySlug";
import { getPostBySlug } from "@/lib/getPostBySlug";
import { notFound } from "next/navigation";

// Revalidate every 5 mins
export const revalidate = 300;

// MetaData
/* export async function generateMetadata({ params }) {
  // Solution 1: Safest approach - await the params resolution
  const { slug } = await Promise.resolve(params);
  
  // Solution 2 (Alternative): Direct access without destructuring
  // const slug = params.slug;

  try {
    const post = await getPostBySlug(slug);
    if (post) {
      return {
        title: post.title,
        description: post.body?.[0]?.children?.[0]?.text?.slice(0, 160) + "..." || "No description",
        openGraph: {
          title: post.title,
          description: post.body
            ? post.body[0]?.children[0]?.text?.slice(0, 160) + "..."
            : "No description available",
          type: "article",
          locale: "en_US",
          url: `https://techarena24.com/${params.slug}`,
          siteName: "Tech Arena24",
          images: featuredImage
            ? [
                {
                  url: urlFor(featuredImage).width(1200).height(630).url(),
                  width: 1200,
                  height: 630,
                  alt: post.postImage?.alt || post.title,
                },
              ]
            : [], // Handle cases where there's no featured image
        },
      };
    }

    const device = await fetchDeviceBySlug(slug);
    if (device) {
      return {
        title: `${device.name} Specifications`,
        description: `Tech specs for ${device.name}`,
        /* other metadata
      };
    }

    return {
      title: "Not Found",
      description: "Content not available"
    };
  } catch (error) {
    return {
      title: "Error",
      description: "Failed to load content"
    };
  }
} */


const Page = async (props) => {
  const { slug } = await Promise.resolve(props.params);

  // Post fetching
  const post = await getPostBySlug(slug).catch(() => null);
  if (post) {
    return <SinglePostPage post={post} />
  }


  // Device fetching
  const device = await fetchDeviceBySlug(slug).catch(() => null);
  if (device) {
    return <LatestDeviceTable device={device} />
  }


  // If neither found, show 404
  notFound();

}

export default Page;