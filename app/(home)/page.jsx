import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative h-full container mx-auto">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center h-full space-y-2">
        <h1 className="text-5xl sm:text-8xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          GSAP
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold">
          Let&apos;s get animating!
        </h1>
        <h2 className="sm:text-xl text-center text-muted-foreground mb-8">
          we&apos;re going to cover GSAP&apos;s core fundamentals and animate
          some HTML elements. 🥳
        </h2>
        <Link href="/learn" className={buttonVariants({ size: "lg" })}>
          Start Learning
        </Link>
      </div>
      <div className="absolute bottom-4 left-4 flex justify-center w-full">
        Created by{" "}
        <Link
          href="https://github.com/ditinagrawal"
          target="_blank"
          className={buttonVariants({ variant: "link" })}
        >
          github@ditinagrawal <ArrowUpRightIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}
