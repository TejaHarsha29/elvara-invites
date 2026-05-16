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
  
  export default function CollectionsSection() {
    return (
      <section id="collections" className="px-6 py-20 md:px-10 lg:px-20">
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
                className="rounded-[28px] border border-[#E8DED1] bg-white p-6"
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
    );
  }