import { Badge } from "@/components/ui/badge";
import getReplacementWords from "@/lib/getReplacementWords";

export default async function ReplacementsList() {
  const replacementList = await getReplacementWords();

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-12 ">
        Replacement Words
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {replacementList.map((obj, i) => {
          return (
            <div className="flex items-center " key={i}>
              <Badge>{obj.word}</Badge>
              {obj.replacements.map((r, j) => (
                <Badge key={j} variant="outline">
                  {r}
                </Badge>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
