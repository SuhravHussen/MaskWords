import { Badge } from "@/components/ui/badge";
import ReplacementWordsSkeleton from "../skeletons/replacementWordsSkeleton";

export default function ReplacementsList({
  list = [],
  handleSelect,
  handleDelete,
}) {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-12 ">
        Replacement words
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-8">
        {list?.map((obj, i) => {
          return (
            <div className="flex items-center space-x-2" key={i}>
              <Badge>{obj.word}</Badge>
              {obj.replacements.map((r, j) => (
                <Badge
                  onClick={() => handleSelect(obj.word, r.replacedName)}
                  key={j}
                  variant="outline"
                  className={`${
                    r.selected ? "bg-violet-700 text-white" : ""
                  } cursor-pointer `}
                >
                  {r.replacedName}
                </Badge>
              ))}
              <Badge
                className="cursor-pointer hover:bg-red-600"
                onClick={() => handleDelete(obj.word)}
              >
                X
              </Badge>
            </div>
          );
        })}

        {list.length === 0 && <ReplacementWordsSkeleton />}
      </div>
    </>
  );
}
