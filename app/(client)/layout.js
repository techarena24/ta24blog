import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/theme-provider";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import Script from "next/script";
import Head from "next/head";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Tech Arena24: Expert Tech News, Reviews, Comparisons & Top Deals",
    template: "%s | Tech Arena24",
  },
  description:
    "Discover the latest smartphones, laptops, and gadgets with expert reviews, side-by-side comparisons, and exclusive tech deals — all at Tech Arena24.",
  twitter: {
    card: "summary_large_image",
  },
};

// JSON-LD Schema
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseURL}/#website`,
      name: "Tech Arena24",
      url: { baseURL },
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseURL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${baseURL}/#webpage`,
      url: { baseURL },
      name: "Tech Arena24 - Latest Tech News, Reviews & Deals",
      isPartOf: { "@id": `${baseURL}/#website` },
      about: { "@id": `${baseURL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${baseURL}/#organization`,
      name: "Tech Arena24",
      url: { baseURL },
      logo: {
        "@type": "ImageObject",
        url: `${baseURL}/images/logoTa24.jpeg`,
      },
      sameAs: [
        "https://www.facebook.com/techarena24blog",
        "https://x.com/techarena24blog",
        "https://www.instagram.com/techarena24blog/",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4XFSF9HS2G');
          `}
      </Script>
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
