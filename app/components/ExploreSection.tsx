export default function ExploreSection() {
    return (
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
    );
  }