"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const banners = [
    "/images/banner-invitations.png",
    "/images/banner-curation.png",
  ];
  
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
  
    return () => clearInterval(timer);
  }, []);

  const collections = [
    {
      title: "Traditional",
      description: "South Indian and timeless wedding aesthetics.",
    },
    {
      title: "Floral",
      description: "Soft pastel and romantic invitation themes.",
    },
    {
      title: "Krishna Radha",
      description: "Spiritual and artistic wedding concepts.",
    },
    {
      title: "Luxury",
      description: "Premium handcrafted invitation experiences.",
    },
  ];

  const gifts = [
    "Return Gifts",
    "Dryfruit Hampers",
    "Bridesmaid Kits",
    "Wedding Welcome Boxes",
  ];

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#2B2B2B]">
      {/* Navbar */}
<nav className="sticky top-0 z-50 border-b border-[#E8DED1] bg-[#F8F5F0]/90 backdrop-blur">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5">
    
    {/* Logo */}
    <h1 className="text-2xl font-semibold tracking-[0.25em] text-[#6E1F28]">
      ELVARA
    </h1>

    {/* Navigation */}
    <div className="flex items-center gap-6 text-sm md:gap-10">
      <a href="#" className="transition hover:text-[#6E1F28]">
        Home
      </a>

      <a
        href="#collections"
        className="transition hover:text-[#6E1F28]"
      >
        Invitations
      </a>

      <a
        href="#gifts"
        className="transition hover:text-[#6E1F28]"
      >
        Gifts
      </a>

      <a
        href="#explore"
        className="transition hover:text-[#6E1F28]"
      >
        Explore
      </a>
    </div>
  </div>
</nav>

          
  {/* Sliding Banner */}
<section className="px-4 pt-6 pb-10">
  <div className="relative overflow-hidden rounded-[32px] shadow-lg">

    <img
      src={banners[current]}
      alt="Banner"
      className="w-full object-cover"
    />

    {/* Dots */}
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


      {/* Collections */}
      <section
        id="collections"
        className="px-6 py-20 md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-[#C6A769]">
              Signature Collections
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Invitations Designed With Elegance
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#E8DED1] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 h-44 rounded-[22px] bg-gradient-to-b from-[#F7EFE6] to-[#EFE3D7]" />

                <h3 className="text-2xl font-semibold text-[#6E1F28]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#666666]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section
        id="gifts"
        className="px-6 py-20 md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#C6A769]">
                Personalized Gifts
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                Curated Wedding Gifting
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gifts.map((gift) => (
              <div
                key={gift}
                className="rounded-[28px] bg-white p-5 shadow-sm"
              >
                <div className="mb-5 aspect-square rounded-[24px] bg-gradient-to-b from-[#F5E7DA] to-[#EFE2D4]" />

                <h3 className="text-xl font-semibold text-[#6E1F28]">
                  {gift}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section
        id="explore"
        className="bg-white px-6 py-20 md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-[#C6A769]">
              Explore Inspiration
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Discover Wedding Stories & Trends
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-[28px] border border-[#EEE4D8] bg-[#F8F5F0]"
              >
                <div className="aspect-[4/3] bg-gradient-to-b from-[#F7EFE6] to-[#EFE2D4]" />

                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#C6A769]">
                    Wedding Inspiration
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-snug text-[#6E1F28]">
                    Trending South Indian Wedding Themes
                  </h3>

                  <p className="mt-4 leading-7 text-[#666666]">
                    Explore elegant wedding aesthetics and luxury
                    invitation inspirations curated for modern couples.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8DED1] px-6 py-10 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-[0.2em] text-[#6E1F28]">
              ELVARA
            </h2>

            <p className="mt-3 text-[#666666]">
              Luxury wedding invitations & curated gifting experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[#5B5B5B]">
            <a href="#">Home</a>
            <a href="#collections">Invitations</a>
            <a href="#gifts">Gifts</a>
            <a href="#explore">Explore</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
