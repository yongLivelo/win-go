import { useAppContext } from "@/AppContext";
import { cn } from "@/lib/utils";
import { bingoColors } from "@/utils/bingo-colors";
import { useEffect, useState } from "react";
import { Circle } from "lucide-react";

export default function Pattern() {
  const { setEnabledLetters } = useAppContext()!;

  const createBingoCard = (): Record<string, boolean[]> =>
    ["B", "I", "N", "G", "O"].reduce(
      (acc, letter) => ({
        ...acc,
        [letter]: Array(5).fill(false),
      }),
      {} as Record<string, boolean[]>,
    );

  const [bingoCard, setbingoCard] =
    useState<Record<string, boolean[]>>(createBingoCard);

  const markPattern = (letter: string, indexMarked: number) => () => {
    const marked = bingoCard[letter].map((state, index) => {
      if (indexMarked === index) {
        return !state;
      }
      return state;
    });

    setbingoCard({ ...bingoCard, [letter]: marked });
  };

  useEffect(() => {
    const array = Object.keys(bingoCard).map((el) => {
      return bingoCard[el].includes(true) ? el : "";
    });
    setEnabledLetters(array);
  }, [bingoCard]);

  return (
    <div className="flex rounded bg-slate-900 p-2">
      {Object.keys(bingoCard).map((letter, index) => (
        <div key={index} className="flex flex-1 flex-col">
          <div
            className={cn(
              "flex aspect-square flex-1 items-center justify-center bg-slate-600 text-4xl",
              bingoColors[letter],
            )}
          >
            {letter}
          </div>
          {bingoCard[letter].map((state, index) => (
            <div
              key={index}
              onClick={markPattern(letter, index)}
              className="flex aspect-square flex-1 cursor-pointer items-center justify-center border-2 border-gray-500 border-opacity-50 bg-slate-600"
            >
              {state ? <Circle fill="cyan" size="50%" stroke="false" /> : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
