import { products } from "../constants/product-list";

export default function WeddingInvitationsPage() {
  const invitations = products.filter(
    (item) => item.category === "weddingInvitations"
  );

  return (
    <main className="min-h-screen bg-[#F8F5F0] px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A769]">
            Wedding Invitations
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-[#6E1F28] md:text-4xl">
            Explore Our Collection
          </h1>

          <p className="mt-3 text-sm text-[#6B6B6B]">
            Curated luxury invitations crafted for timeless celebrations.
          </p>
        </div>

        {/* Grid */}
       
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
  {invitations.map((item, index) => (
    <div
      key={index}
      className="
        overflow-hidden rounded-[24px]
        bg-white shadow-sm
        flex flex-col
        transition hover:-translate-y-1
      "
    >

      {/* Image */}
      <div className="h-[115px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#C6A769]">
          {item.title}
        </p>

        <h3 className="mt-1 line-clamp-2 text-xs font-semibold leading-5 text-[#6E1F28]">
          {item.subtitle}
        </h3>
        <div className="mt-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#6E1F28]">
          {item.price}
        </p>

        <p className="rounded-full bg-[#F5EEE4] px-2 py-1 text-[10px] text-[#8B7355]">
          {item.moq}
        </p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </main>
  );
}