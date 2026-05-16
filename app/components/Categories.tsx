"use client";

import { useEffect, useState } from "react";
import { Category } from "@/types/category";
import { getCategories } from "@/services/categoryService";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    let mounted = true;

    getCategories()
      .then((cats) => {
        if (mounted) setCategories(cats);
      })
      .catch((err) => {
        console.error("Failed to load categories:", err);
      });

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <section className="px-6 py-6">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">
        What are you looking for?
      </h2>

      <div className="flex gap-5 overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex min-w-[120px] cursor-pointer flex-col items-center"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="h-32 w-32 object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <p className="mt-3 text-center text-sm font-medium text-[#1D1D1F]">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}