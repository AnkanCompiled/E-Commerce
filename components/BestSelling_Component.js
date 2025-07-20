import React from "react";
import ProductCard_Component from "@/components/ProductCard_Component";
import HorizontalScroller from "./HorizontalScroller";

export default function BestSelling_Component() {
  return (
    <section aria-label="Best selling section" className="flex flex-col">
      <div className="relative mt-[20px] text-center">
        <h2 className="mx-[20vw] text-xl/relaxed sm:text-3xl/relaxed font-light">
          Best Selling Fashion
        </h2>
        <p className="mx-[25vw] text-gray-600 text-xs sm:text-md">
          Discover our top-rated fashion, loved by thousands of customers.
        </p>
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={`absolute w-[20vw] h-[2px] top-1/2 -translate-y-1/2 bg-neutral-700 ${
              index === 0 ? "left-0" : "right-0"
            }`}
          ></div>
        ))}
      </div>
      <HorizontalScroller>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="min-w-[360px] h-[432px] snap-start">
            <ProductCard_Component
              title={`Product ${item}`}
              price={item * 100}
              discountType="flat"
              discountValue={50}
            />
          </div>
        ))}
      </HorizontalScroller>
    </section>
  );
}
