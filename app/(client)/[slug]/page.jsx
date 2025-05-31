import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import SinglePostPage from "@/app/components/SinglePost";
import { fetchDeviceBySlug } from "@/lib/fetchDeviceSpecsBySlug";
import { getPostBySlug } from "@/lib/getPostBySlug";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// Revalidate every 5 mins
export const revalidate = 300;

// Dynamic Metadata
export async function generateMetadata(props) {
  const { slug } = await Promise.resolve(props.params);

  const post = await getPostBySlug(slug).catch(() => null);

  if (post) {
    const metaDataImage = post.postImage?.asset?.url;
    const firstTextBlock = post.body?.find(
      (block) => block._type === "block" && block.children
    );
    const description =
      firstTextBlock?.children?.[0]?.text?.slice(0, 164) ||
      "No description available";
    return {
      title: post.title,
      description,
      openGraph: {
        title: post.title,
        description,
        type: "article",
        locale: "en_US",
        url: `${baseURL}/${slug}`,
        siteName: "Tech Arena24",
        images: metaDataImage
          ? [
              {
                url: urlFor(metaDataImage),
                width: 1200,
                height: 630,
                alt: post.postImage?.alt || post.title,
              },
            ]
          : [], // Handle cases where there's no featured image
      },
    };
  }

  const device = await fetchDeviceBySlug(slug).catch(() => null);
  if (device) {
    return {
      title: device.title,
      description: device.title,
      openGraph: {
        title: device.title,
        description: device.title,
        type: "article",
        locale: "en_US",
        url: `${baseURL}/${slug}`,
        siteName: "Tech Arena24",
        images: device.deviceImage
          ? [
              {
                url: device.deviceImage,
                width: 1200,
                height: 630,
                alt: device.deviceImage.alt || device.title,
              },
            ]
          : [], // Handle cases where there's no featured image
      },
    };
  }

  return {
    title: "Not Found",
    description: "Sorry, this page does not exist.",
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
    return <LatestDeviceTable device={device} />;
  }

  notFound();
};

export default Page;
