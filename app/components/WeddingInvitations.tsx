"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";
import { products } from "../constants/product-list";

export default function WeddingInvitations() {

  /* Show only wedding invitations */
  const invitations = products.filter(
    (item) => item.category === "weddingInvitations"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  return (
    <section className="px-4 py-12 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A769]">
              Wedding Invitations
            </p>
          </div>

          <a
            href="/wedding-invitations"
            className="text-sm font-medium text-[#6E1F28] transition hover:opacity-70"
          >
            See All →
          </a>
        </div>

        {/* Horizontal Slides */}
        <div
          className="
            flex gap-5 overflow-x-auto pb-4
            snap-x snap-mandatory
            scroll-smooth
          "
        >

          {/* Slide 1 */}
          <div
            className="
              min-w-full snap-start
              grid grid-cols-2 gap-4
            "
          >
            {invitations.slice(0, 2).map((item, index) => (
              <div
              key={index}
              onClick={() => openModal(item)}
              className="
                cursor-pointer
                  overflow-hidden rounded-[24px]
                  bg-white shadow-sm
                  flex flex-col
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
                </div>
              </div>
            ))}
          </div>

          {/* Slide 2 */}
          <div
            className="
              min-w-full snap-start
              grid grid-cols-2 gap-4
            "
          >
            {invitations.slice(2, 4).map((item, index) => (
              <div
              key={index}
              onClick={() => openModal(item)}
              className="
                cursor-pointer
                  overflow-hidden rounded-[24px]
                  bg-white shadow-sm
                  flex flex-col
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
                </div>
              </div>
            ))}
          </div>

          {/* Slide 3 */}
          <div
            className="
              min-w-full snap-start
              grid grid-cols-2 gap-4
            "
          >

            {/* 5th Card */}
            {invitations.slice(4, 5).map((item, index) => (
             <div
             key={index}
             onClick={() => openModal(item)}
             className="
               cursor-pointer
                  overflow-hidden rounded-[24px]
                  bg-white shadow-sm
                  flex flex-col
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
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <a
              href="/wedding-invitations"
              className="
                rounded-[24px]
                bg-[#6E1F28]
                p-3 text-white
                flex flex-col justify-between
              "
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#E8D6C2]">
                  Explore
                </p>

                <h3 className="mt-2 text-sm font-semibold leading-5">
                  View All Invitations
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#F3E9DD]">
                  Explore every curated wedding collection.
                </p>
              </div>

              <div
                className="
                  mt-3 w-fit rounded-full bg-white
                  px-4 py-2 text-[10px] font-medium
                  text-[#6E1F28]
                "
              >
                View All →
              </div>
            </a>
          </div>
        </div>
      </div>
    
      <EnquiryModal
  isOpen={isModalOpen}
  selectedProduct={selectedProduct}
  onClose={() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }}
/>
    </section>
  );
}