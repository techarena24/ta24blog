// import createImageUrlBuilder from '@sanity/image-url'

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source) => {
//   return builder.image(source)
// }

import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";

// Sanity Image URL Builder
const builder = createImageUrlBuilder({
  projectId,
  dataset,
  useCdn: true, // optional: enables cached images from the edge
  apiVersion: "2025-03-07", // replace with your Sanity API version
});

export const urlFor = (source) => builder.image(source);
