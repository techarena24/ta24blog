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
        src="https://cmp.gatekeeperconsent.com/min.js"
        data-cfasync="false"
        strategy="afterInteractive"
      />
      <Script
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        data-cfasync="false"
        strategy="afterInteractive"
      />

      <Script async src="//www.ezojs.com/ezoic/sa.min.js">
        {`window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd =
        ezstandalone.cmd || [];`}
      </Script>

      {/* google adsense code */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1557100683793492"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      ></Script>

      {/* <Script
        id="cookie-script"
        strategy="afterInteractive"
        src="//cdn.cookie-script.com/s/9cc0a158b8f01befcf6531ca1f825fe3.js"
      /> */}

      {/* <Script
        id="adsbygoogle"
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-…"
        crossOrigin="anonymous"
      /> */}
    </>
  );
}
