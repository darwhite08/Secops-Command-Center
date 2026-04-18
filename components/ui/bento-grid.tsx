import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function BentoGrid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-4 md:auto-rows-[24rem] md:grid-cols-3", className)}
      {...props}
    />
  );
}

type BentoGridItemProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
};

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  ...props
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "group relative row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-900/40 p-4 backdrop-blur-sm transition duration-300 hover:border-white/[0.2] hover:bg-neutral-900/70",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {header ? <div className="relative z-10 mb-4">{header}</div> : null}
      <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        {icon ? <div className="mb-2 text-neutral-400">{icon}</div> : null}
        <div className="mb-1 text-lg font-semibold text-neutral-100">{title}</div>
        {description ? <div className="text-sm text-neutral-400">{description}</div> : null}
      </div>
    </div>
  );
}
