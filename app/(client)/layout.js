import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/theme-provider";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import Script from "next/script";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Your WebSite with a publisher link
    {
      "@type": "WebSite",
      "@id": `${baseURL}/#website`,
      url: baseURL,
      name: "Tech Arena24",
      publisher: { "@id": `${baseURL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseURL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // 2. A NewsMediaOrganization (helps Google recognize you as a news source)
    {
      "@type": "NewsMediaOrganization",
      "@id": `${baseURL}/#organization`,
      name: "Tech Arena24",
      url: baseURL,
      logo: {
        "@type": "ImageObject",
        url: `${baseURL}/images/logoTa24.jpeg`,
      },
      sameAs: [
        "https://www.facebook.com/techarena24blog",
        "https://x.com/techarena24blog",
        "https://www.instagram.com/techarena24blog/",
      ],
      foundingDate: "2018-06-01",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          telephone: "+44-734-900-6479",
        },
      ],
    },

    // 3. Your HomePage with rich metadata
    {
      "@type": "WebPage",
      "@id": `${baseURL}/#homepage`,
      url: baseURL,
      name: "Tech Arena24 – Latest Tech News, Reviews & Deals",
      description:
        "Tech Arena24 brings you the latest technology news, in-depth reviews, and exclusive deals on gadgets.",
      inLanguage: "en-US",
      datePublished: "2018-06-01T08:00:00+00:00",
      dateModified: "2025-06-15T12:00:00+00:00",
      isPartOf: { "@id": `${baseURL}/#website` },
      about: { "@id": `${baseURL}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseURL}/images/TechArena24_Banner.jpg`,
        width: 1200,
        height: 600,
      },
      breadcrumb: { "@id": `${baseURL}/#breadcrumbs` },
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          name: "News",
          url: `${baseURL}/news`,
        },
        {
          "@type": "SiteNavigationElement",
          name: "Reviews",
          url: `${baseURL}/reviews`,
        },
        {
          "@type": "SiteNavigationElement",
          name: "Deals",
          url: `${baseURL}/deals`,
        },
        {
          "@type": "SiteNavigationElement",
          name: "Latest Devices",
          url: `${baseURL}/latest-devices`,
        },
        {
          "@type": "SiteNavigationElement",
          name: "Contact",
          url: `${baseURL}/contact`,
        },
        {
          "@type": "SiteNavigationElement",
          name: "About",
          url: `${baseURL}/about`,
        },
      ],
    },

    // 4. A minimal BreadcrumbList (one item)
    {
      "@type": "BreadcrumbList",
      "@id": `${baseURL}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseURL,
        },
      ],
    },
  ],
};

// JSON-LD Schema
// const schema = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "WebSite",
//       "@id": `${baseURL}/#website`,
//       name: "Tech Arena24",
//       url: { baseURL },
//       potentialAction: {
//         "@type": "SearchAction",
//         target: `${baseURL}/search?q={search_term_string}`,
//         "query-input": "required name=search_term_string",
//       },
//     },
//     {
//       "@type": "WebPage",
//       "@id": `${baseURL}/#webpage`,
//       url: { baseURL },
//       name: "Tech Arena24 - Latest Tech News, Reviews & Deals",
//       isPartOf: { "@id": `${baseURL}/#website` },
//       about: { "@id": `${baseURL}/#organization` },
//     },
//     {
//       "@type": "Organization",
//       "@id": `${baseURL}/#organization`,
//       name: "Tech Arena24",
//       url: { baseURL },
//       logo: {
//         "@type": "ImageObject",
//         url: `${baseURL}/images/logoTa24.jpeg`,
//       },
//       sameAs: [
//         "https://www.facebook.com/techarena24blog",
//         "https://x.com/techarena24blog",
//         "https://www.instagram.com/techarena24blog/",
//       ],
//     },
//   ],
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <section className="w-full max-w-6xl min-h-[80vh] mx-auto">
            <AdBanner slot="4220368538" />
            <main className="px-6 sm:px-4 xl:px-0 overflow-x-hidden flex-1">
              {children}
            </main>
            <div className="mt-10">
              <AdBanner slot="4220368538" />
            </div>
          </section>
          <Footer />
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1557100683793492"
          strategy="lazyOnload"
          crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
