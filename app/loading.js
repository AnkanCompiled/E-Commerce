import { Loader2 } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="w-full flex justify-center">
      <div className="animate-spin py-20">
        <Loader2 size={40} />
      </div>
    </div>
  );
}
