"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function DayFour() {
  useGSAP(() => {
    let tl = gsap.timeline({ yoyo: true, repeat: -1 });
    tl.to(".box2", {
      y: 50,
      ease: "power2.inOut",
    })
      .to(".box1", {
        y: 50,
        ease: "power2.inOut",
      })
      .to(".box3", {
        y: 50,
        ease: "power2.inOut",
      });
  });
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-full">
      <div className="flex gap-6">
        <div className="w-16 h-16 bg-yellow-600 rounded-full box1" />
        <div className="w-16 h-16 bg-red-600 rounded-full box2" />
        <div className="w-16 h-16 bg-green-600 rounded-full box3" />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 h-10 items-center text-sm">
        Resources used to create this lesson -{" "}
        <Link
          href="https://gsap.com/resources/getting-started/timelines"
          target="_blank"
          className="text-blue-500 flex items-center gap-1"
        >
          gsap.com <ExternalLinkIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}
