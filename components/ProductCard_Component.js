import React from "react";

export default function ProductCard_Component({
  image,
  title,
  price,
  rating,
  reviews = 0,
  discountValue,
  discountType,
}) {
  function getFinalPrice() {
    if (discountType === "percentage") {
      return price - (price * discountValue) / 100;
    } else if (discountType === "flat") {
      return price - discountValue;
    } else {
      return price;
    }
  }
  return (
    <div className="grid grid-rows-[4fr_1fr] w-full h-full bg-white rounded-xl shadow-lg gap-3 p-4">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-neutral-200 rounded-lg flex items-center justify-center">
          <span className="text-neutral-500 text-sm">No Image</span>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <span className="text-md">{title}</span>
        <span className="flex items-center gap-2">
          {rating && (
            <div className="bg-teal-600 px-2 rounded-sm">
              <span className="text-sm font-semibold text-white">{`${rating.toFixed(
                1
              )} / 5`}</span>
            </div>
          )}
          <span className="text-sm text-neutral-500">{`(${reviews} reviews)`}</span>
        </span>
        <span className="flex items-center gap-2">
          {discountValue ? (
            <>
              <span className="text-md font-semibold">₹{getFinalPrice()}</span>
              <span className="text-sm text-neutral-500 font-semibold line-through">
                ₹{price}
              </span>
              <span className="text-sm text-emerald-500 font-semibold">
                {`${Math.round(
                  discountType === "percentage"
                    ? discountValue
                    : (discountValue / price) * 100
                )}% off`}
              </span>
            </>
          ) : (
            <span className="text-md font-semibold">₹{price}</span>
          )}
        </span>
        <div className="flex justify-center space-x-2">
          {["add to cart", "buy now"].map((item, index) => (
            <button
              key={index}
              className={`uppercase text-md font-semibold cursor-pointer w-full h-max rounded-lg py-2 px-4 duration-200 ${
                index === 0
                  ? "bg-neutral-700 text-white hover:bg-neutral-600"
                  : "border-2 border-neutral-700 hover:bg-neutral-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
