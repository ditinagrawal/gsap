"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function DayOne() {
  useGSAP(() => {
    gsap.to(".box1", {
      y: 125,
      duration: 2,
      delay: 1,
    });
    gsap.from(".box2", {
      duration: 2,
      rotate: 90,
      delay: 1,
    });
    gsap.to(".box3", {
      y: -125,
      duration: 2,
      delay: 1,
    });
  });
  return (
    <div className="flex items-center justify-center h-full">
      <div className="box1 w-32 h-32 rounded-lg bg-red-500" />
      <div className="box2 w-32 h-32 rounded-lg bg-green-500" />
      <div className="box3 w-32 h-32 rounded-lg bg-blue-500" />
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 h-10 items-center text-sm">
        Resources used to create this lesson -{" "}
        <Link
          href="https://gsap.com/resources/get-started"
          target="_blank"
          className="text-blue-500 flex items-center gap-1"
        >
          gsap.com <ExternalLinkIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}
