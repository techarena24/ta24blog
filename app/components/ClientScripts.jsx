// components/ClientScripts.jsx
"use client";
import Script from "next/script";

export default function ClientScripts() {
  return (
    <>
      {/* <Script
        id="schema-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}

      <Script
        id="cookie-script"
        strategy="afterInteractive"
        src="//cdn.cookie-script.com/s/9cc0a158b8f01befcf6531ca1f825fe3.js"
      />

      {/* <Script
        id="adsbygoogle"
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-…"
        crossOrigin="anonymous"
      /> */}
    </>
  );
}
