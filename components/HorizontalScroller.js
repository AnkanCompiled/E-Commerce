"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function HorizontalScroller({ children }) {
  const scrollRef = useRef();
  const containerRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const EDGE_WIDTH = 200;

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, right } = container.getBoundingClientRect();
    const mouseX = e.clientX;

    setShowLeft(mouseX - left < EDGE_WIDTH);
    setShowRight(right - mouseX < EDGE_WIDTH);
  };

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 400;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setShowLeft(false);
        setShowRight(false);
      }}
      className="relative"
    >
      {/* Left Button */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-1/3 rounded-r-full p-3 bg-white/50 backdrop-blur shadow hover:bg-white transition-opacity cursor-pointer"
        >
          <ChevronLeft size={30} />
        </button>
      )}

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex justify-evenly space-x-4 py-4 mx-4 snap-x snap-mandatory scroll-smooth overflow-x-auto no-scrollbar"
      >
        {children}
      </div>

      {/* Right Button */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-1/3 rounded-l-full p-3 bg-white/50 backdrop-blur shadow hover:bg-white transition-opacity cursor-pointer"
        >
          <ChevronRight size={30} />
        </button>
      )}
    </div>
  );
}
