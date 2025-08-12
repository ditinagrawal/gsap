"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

gsap.registerPlugin(useGSAP);

export default function DayTwo() {
  const [anim, setAnim] = useState(null);
  useGSAP(() => {
    const animation = gsap.to(".box", {
      rotate: 90,
      duration: 3,
      ease: "elastic.out",
      paused: true,
    });
    setAnim(animation);
  });
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-full">
      <div className="w-32 h-32 bg-yellow-600 rounded-lg box" />
      <div className="flex gap-3">
        <Button onClick={() => anim?.play()}>Play</Button>
        <Button onClick={() => anim?.pause()}>Pause</Button>
        <Button onClick={() => anim?.restart()}>Restart</Button>
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
