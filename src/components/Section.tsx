import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "secondary" | "primary" | "dark";
}

export default function Section({ children, className, id, bg = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 w-full relative",
        {
          "bg-white": bg === "white",
          "bg-secondary": bg === "secondary",
          "bg-primary text-white": bg === "primary" || bg === "dark",
        },
        className
      )}
    >
      <div className="max-w-7xl mx-auto h-full">{children}</div>
    </section>
  );
}