import { useAppContext } from "@/AppContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useRef } from "react";

export default function BallCaller() {
  const { calledBalls, setCalledBalls } = useAppContext()!;
  const bingoNumbers = useRef(Array.from({ length: 75 }, (_, i) => i + 1));

  const Call = () => {
    const calledBall =
      bingoNumbers.current[
        Math.floor(Math.random() * bingoNumbers.current.length) + 1
      ];
    bingoNumbers.current.splice(bingoNumbers.current.indexOf(calledBall), 1);
    setCalledBalls([...calledBalls, calledBall]);
  };

  const Reset = () => {
    setCalledBalls([]);
    bingoNumbers.current = Array.from({ length: 75 }, (_, i) => i + 1);
  };

  const ToggleAuto = () => {};

  return (
    <>
      <div className="bg-red flex flex-col gap-2">
        <div className="flex flex-1 gap-2">
          <Button onClick={Call} className="flex-1">
            Call
          </Button>
          <Button onClick={Reset} className="flex-1">
            Reset
          </Button>
        </div>
        <div className="flex flex-1 gap-2">
          <Button onClick={ToggleAuto} className="flex-1">
            Auto
          </Button>
          <div className="w-100 flex flex-1 rounded bg-blue-500 p-4">
            <Slider className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
