"use client";
import { useEffect, useRef, useState } from "react";

const AdBanner = ({
  slot,
  format = "auto",
  responsive = "true",
  height = "192px",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const adRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error", e);
      }
    }
  }, [isVisible]);

  return (
    <div className=" w-100% md:w-[80%] h-48 mx-auto">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          height: height, // explicitly setting height
        }}
        data-ad-client="ca-pub-1557100683793492"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdBanner;
