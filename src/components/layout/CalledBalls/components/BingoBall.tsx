import { cn } from "@/lib/utils";
import { renderBall } from "@/utils/renderBall";

export default function BingoBall({ ballNumber }: { ballNumber: number }) {
  const ballLetter = renderBall(ballNumber);

  return (
    <>
      <div
        className={cn(
          `flex size-20 items-center justify-center rounded-full border-8 bg-white p-2 text-black`,
          {
            "border-red-500": ballLetter === "B",
            "border-yellow-500": ballLetter === "I",
            "border-green-500": ballLetter === "N",
            "border-blue-500": ballLetter === "G",
            "border-violet-500": ballLetter === "O",
          },
        )}
      >
        {ballLetter ? ballLetter + ballNumber : "?"}
      </div>
    </>
  );
}
