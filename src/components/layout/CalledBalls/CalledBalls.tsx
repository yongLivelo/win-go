import Current from "./components/Current";
import Recent from "./components/Recent";
import History from "./components/History";

export default function CalledBalls() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-1 gap-2">
        <div>
          <Current />
        </div>
        <div>
          <Recent />
        </div>
        <div>
          <History />
        </div>
      </div>
    </>
  );
}
