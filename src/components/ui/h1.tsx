import { cn } from "@/lib/utils";

export default function H1(prosp: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...prosp}
      className={cn(
        "text-4xl font-extrabold tracking-tighter lg:text-5xl",
        prosp.className,
      )}
    />
  );
}
