import Current from "./components/Current";
import Recent from "./components/Recent";
import History from "./components/CalledCount";

export default function CalledBalls() {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex-1">
          <Current />
        </div>
        <div className="flex-[2]">
          <Recent />
        </div>
        <div className="flex-1">
          <History />
        </div>
      </div>
    </>
  );
}
