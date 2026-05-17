"use client";

import { useState } from "react";

export default function EnquiryModal({
  isOpen,
  selectedProduct,
  onClose,
}: any) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("100");
  const [deliveryDate, setDeliveryDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [customization, setCustomization] = useState("");

  const isFormValid =
  name &&
  quantity &&
  deliveryDate &&
  deliveryLocation &&
  customization;

  const handleWhatsApp = () => {
    const message = `
  Hi Elvara,
  
  I'm interested in the following invitation:
  
  Product: ${selectedProduct?.title}
  Price: ${selectedProduct?.price}
  MOQ: ${selectedProduct?.moq}
  
  Name: ${name}
  Quantity: ${quantity}
  Expected Delivery Date: ${deliveryDate}
  Delivery Location: ${deliveryLocation}
  
  Customizations:
  ${customization}
    `;
  
    const whatsappUrl = `https://wa.me/919032971949?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen || !selectedProduct) return null;

  const closeModal = () => {
    setName("");
    setQuantity("100");
    setDeliveryDate(new Date().toISOString().split("T")[0]);
    setDeliveryLocation("");
    setCustomization("");

    onClose();
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-end
        bg-black/40
      "
    >
      <div
        className="
          w-full bg-white p-4 shadow-xl
          animate-[slideUp_.25s_ease-out]
        "
      >

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C6A769]">
              Enquiry
            </p>

            <h2 className="mt-2 text-xl font-semibold text-[#6E1F28]">
              {selectedProduct?.title}
            </h2>
          </div>

          <button
            onClick={closeModal}
            className="text-xl text-[#6E1F28]"
          >
            ×
          </button>
        </div>

        {/* Selected Product */}
        <div className="mt-4 rounded-2xl bg-[#F8F5F0] p-3">
          <div className="flex gap-3">

            {/* Image */}
            <div className="h-20 w-20 overflow-hidden rounded-xl">
              <img
                src={selectedProduct?.image}
                alt={selectedProduct?.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#C6A769]">
                  {selectedProduct?.title}
                </p>

                <h3 className="mt-1 text-sm font-semibold text-[#6E1F28]">
                  {selectedProduct?.subtitle}
                </h3>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-[#6E1F28]">
                  {selectedProduct?.price}
                </p>

                <p className="rounded-full bg-white px-2 py-1 text-[10px] text-[#8B7355]">
                  {selectedProduct?.moq}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="mt-4 space-y-3">

          {/* Name */}
          <div className="space-y-2">
            <label className="text-xs text-[#6E1F28]">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full rounded-xl border
                border-[#E8DED1]
                px-4 py-2 text-sm text-[#2B2B2B]
                outline-none
              "
            />
          </div>

          {/* Delivery Date */}
          <div className="space-y-2">
            <label className="text-xs text-[#6E1F28]">
              Expected Delivery Date
            </label>

            <input
              type="date"
              value={deliveryDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="
                w-full rounded-xl border
                border-[#E8DED1]
                px-4 py-2 text-sm text-[#2B2B2B]
                outline-none
              "
            />
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label className="text-xs text-[#6E1F28]">
              Quantity
            </label>

            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="
                w-full rounded-xl border
                border-[#E8DED1]
                px-4 py-2 text-sm text-[#2B2B2B]
                outline-none bg-white
              "
            >
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="250">250</option>
              <option value="300">300</option>
              <option value="500">500</option>
              <option value="1000+">1000+</option>
            </select>
          </div>

          {/* Delivery Location */}
          <div className="space-y-2">
            <label className="text-xs text-[#6E1F28]">
              Delivery Location
            </label>

            <input
              type="text"
              placeholder="Enter city/location"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              className="
                w-full rounded-xl border
                border-[#E8DED1]
                px-4 py-2 text-sm text-[#2B2B2B]
                outline-none
              "
            />
          </div>

          {/* Customization */}
          <div className="space-y-2">
            <label className="text-xs text-[#6E1F28]">
              Customizations Required
            </label>

            <textarea
              rows={3}
              placeholder="Mention names, colors, themes, language, etc."
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
              className="
                w-full rounded-xl border
                border-[#E8DED1]
                px-4 py-2 text-sm text-[#2B2B2B]
                outline-none
              "
            />
          </div>

          {/* CTA */}
          <button
            onClick={handleWhatsApp}
            disabled={!isFormValid}
            className="
              flex w-full items-center justify-center
              rounded-full bg-[#25D366]
              px-5 py-2 text-sm font-medium text-white
            "
          >
            Continue on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}