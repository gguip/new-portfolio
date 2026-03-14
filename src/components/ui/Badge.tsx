import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-brand-mint/10 px-3 py-1 text-xs font-medium text-brand-teal",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
