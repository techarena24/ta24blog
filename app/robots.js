const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/", "/private/"],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
