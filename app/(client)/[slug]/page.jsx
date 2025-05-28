import LatestDeviceTable from "@/app/components/LatestDeviceTable";
import SinglePostPage from "@/app/components/SinglePost";
import { fetchDeviceBySlug } from "@/lib/fetchDeviceSpecsBySlug";
import { getPostBySlug } from "@/lib/getPostBySlug";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

// Revalidate every 5 mins
export const revalidate = 300;

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