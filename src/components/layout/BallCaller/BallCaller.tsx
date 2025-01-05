import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/AppContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { renderBall } from "@/utils/renderBall";
import useInterval from "@/hooks/useInterval";

export default function BallCaller() {
  const { calledBalls, setCalledBalls, enabledLetters } = useAppContext()!;
  const bingoNumbers = useRef(Array.from({ length: 75 }, (_, i) => i + 1));
  const [isAutoCalling, setisAutoCalling] = useState<boolean>(false);
  const [autoCallingInterval, setAutoCallingInterval] = useState<number>(1000);

  const callBall = () => {
    const calledBall =
      bingoNumbers.current[
        Math.floor(Math.random() * bingoNumbers.current.length)
      ];
    bingoNumbers.current.splice(bingoNumbers.current.indexOf(calledBall), 1);

    if (calledBall) {
      setCalledBalls([...calledBalls, calledBall]);
    }
  };

  const resetBalls = () => {
    setCalledBalls([]);
    bingoNumbers.current = Array.from({ length: 75 }, (_, i) => i + 1);
  };

  useEffect(() => {
    const filteredBingoNumbers = Array.from(
      { length: 75 },
      (_, i) => i + 1,
    ).filter(
      (number) =>
        enabledLetters.includes(renderBall(number)) &&
        !calledBalls.includes(number),
    );
    bingoNumbers.current = filteredBingoNumbers;
  }, [enabledLetters]);

  useInterval(callBall, autoCallingInterval, isAutoCalling);

  const toggleAutoCall = () => {
    setisAutoCalling(!isAutoCalling);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-1 gap-2">
        <Button onClick={callBall} className="flex-1" disabled={isAutoCalling}>
          Call
        </Button>
        <Button onClick={resetBalls} className="flex-1">
          Reset
        </Button>
      </div>
      <div className="flex flex-1 gap-2">
        <Button onClick={toggleAutoCall} className="flex-1">
          Auto
        </Button>
        <div className="w-100 flex flex-1 rounded bg-blue-500 p-4">
          <Slider
            max={5000}
            min={1000}
            step={1000}
            value={[autoCallingInterval]}
            onValueChange={(value) => setAutoCallingInterval(value[0])}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
