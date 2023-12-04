import { Skeleton } from "@/components/ui/skeleton";

export default function ReplacementWordsSkeleton() {
  return Array(10)
    .fill()
    .map((_, i) => (
      <div className="flex items-center space-x-2">
        <Skeleton className="w-[100px] h-[20px] rounded-full" key={i} />
        <Skeleton className="w-[60px] h-[20px] rounded-full" key={i} />
        <Skeleton className="w-[60px] h-[20px] rounded-full" key={i} />
      </div>
    ));
}
