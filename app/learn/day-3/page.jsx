"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function DayThree() {
  useGSAP(() => {
    gsap.to(".box", {
      y: 100,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    });
    gsap.to(".box", {
      y: 20,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-full">
      <div className="flex gap-6">
        <div className="w-16 h-16 bg-yellow-600 rounded-full box" />
        <div className="w-16 h-16 bg-red-600 rounded-full box" />
        <div className="w-16 h-16 bg-green-600 rounded-full box" />
        <div className="w-16 h-16 bg-blue-600 rounded-full box" />
        <div className="w-16 h-16 bg-purple-600 rounded-full box" />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 h-10 items-center text-sm">
        Resources used to create this lesson -{" "}
        <Link
          href="https://gsap.com/resources/getting-started/Easing"
          target="_blank"
          className="text-blue-500 flex items-center gap-1"
        >
          gsap.com <ExternalLinkIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}
