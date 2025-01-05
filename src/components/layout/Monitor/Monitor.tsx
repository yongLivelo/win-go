// import { useAppContext } from "@/AppContext";
import { useAppContext } from "@/AppContext";
import { cn } from "@/lib/utils";
import { bingoColors } from "@/utils/bingo-colors";

export default function Monitor() {
  const { calledBalls, enabledLetters } = useAppContext()!;

  const ballNumbers = Array.from({ length: 75 }, (_, i) => i + 1).reduce(
    (acc: Record<string, number[]>, curr) => {
      const key = ["B", "I", "N", "G", "O"][Math.floor((curr - 1) / 15)];
      acc[key].push(curr);
      return acc;
    },
    { B: [], I: [], N: [], G: [], O: [] },
  );

  return (
    <>
      <div className="flex h-full flex-row rounded border-8 border-slate-900 lg:flex-col">
        {Object.keys(ballNumbers).map((letter) => (
          <div
            key={letter}
            className={`${enabledLetters.includes(letter) ? "opacity-100" : "opacity-20"} flex flex-1 flex-col transition-all duration-500 lg:flex-row`}
          >
            <div
              className={cn(
                `text-3x flex flex-1 items-center justify-center p-2`,
                {
                  "bg-red-500": letter === "B",
                  "bg-yellow-500": letter === "I",
                  "bg-green-500": letter === "N",
                  "bg-blue-500": letter === "G",
                  "bg-violet-500": letter === "O",
                },
              )}
            >
              {letter}
            </div>
            {ballNumbers[letter].map((number) => (
              <div
                key={number}
                className={`${calledBalls.includes(number) ? "opacity-100" : "opacity-20"} flex flex-1 items-center justify-center bg-black p-2 text-2xl transition-all duration-500`}
              >
                {number}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
