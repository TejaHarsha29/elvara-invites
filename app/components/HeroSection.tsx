"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const banners = [
    "/images/banner-invitations.png",
    "/images/banner-curation.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 pt-6 pb-10 md:px-8 lg:px-12">
      <div className="relative overflow-hidden rounded-[32px] shadow-lg">
        <img
          src={banners[current]}
          alt="Banner"
          className="w-full object-cover"
        />

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all ${
                current === index
                  ? "h-2 w-8 bg-white"
                  : "h-2 w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 