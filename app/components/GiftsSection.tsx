const gifts = [
    "Return Gifts",
    "Dryfruit Hampers",
    "Bridesmaid Kits",
    "Wedding Welcome Boxes",
  ];
  
  export default function GiftsSection() {
    return (
      <section id="gifts" className="px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-[#C6A769]">
              Personalized Gifts
            </p>
  
            <h2 className="mt-4 text-4xl font-semibold">
              Curated Wedding Gifting
            </h2>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gifts.map((gift) => (
              <div key={gift} className="rounded-[28px] bg-white p-5 shadow-sm">
                <div className="mb-5 aspect-square rounded-[24px] bg-gradient-to-b from-[#F5E7DA] to-[#EFE2D4]" />
  
                <h3 className="text-xl font-semibold text-[#6E1F28]">
                  {gift}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }