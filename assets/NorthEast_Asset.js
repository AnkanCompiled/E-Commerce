import React from "react";

export default function NorthEast_Asset({ color = "#222222", size = "32px" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
    >
      <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
    </svg>
  );
}
