import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { days } from "@/lib/days";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="h-16 sticky top-0 z-10 bg-background/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Learn GSAP
          </Link>
          <ModeToggle />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {days.map((day) => (
          <DayCard key={day.title} {...day} />
        ))}
      </div>
    </div>
  );
}

const DayCard = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          href={props.href}
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Jump In <ArrowRightIcon className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};
