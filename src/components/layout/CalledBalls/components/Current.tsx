import { useAppContext } from "@/AppContext";
import BingoBall from "./BingoBall";

export default function Current() {
  const { calledBalls } = useAppContext()!;
  let lastCalledBall = calledBalls[calledBalls.length - 1];

  return (
    <>
      <div className="flex flex-col items-center gap-4 rounded bg-slate-900 p-4">
        <p>Current Ball</p>
        <BingoBall ballNumber={lastCalledBall} />
      </div>
    </>
  );
}
