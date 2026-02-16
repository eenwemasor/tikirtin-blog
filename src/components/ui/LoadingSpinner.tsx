import { cn } from "@/utils/cn";

export default function LoadingSpinner({ className, isSecondary }: { className?: string; isSecondary?: boolean }) {
  return (
    <div
      className={cn(
        `h-4.5 w-4.5 animate-spin rounded-full border-2 border-solid shrink-0 ${
          isSecondary ? "border-primary border-t-white" : "border-secondary border-t-transparent"
        }`,
        className,
      )}
    ></div>
  );
}
