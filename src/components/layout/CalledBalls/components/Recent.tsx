import { useAppContext } from "@/AppContext";
import BingoBall from "./BingoBall";

export default function Recent() {
  const { calledBalls } = useAppContext()!;
  const recentFiveBalls = calledBalls.slice(
    Math.max(calledBalls.length - 6, 0),
    -1,
  );
  console.log(recentFiveBalls);
  return (
    <>
      <div className="flex flex-col items-center gap-4 rounded bg-slate-900 p-4">
        <div>Recent Balls</div>
        <div className="flex gap-4">
          {recentFiveBalls.map((number, index) => (
            <BingoBall ballNumber={number} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
