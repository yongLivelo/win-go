import Current from "./components/Current";
import Recent from "./components/Recent";
import CalledCount from "./components/CalledCount";
import { useAppContext } from "@/AppContext";

export default function CalledBalls() {
  const { calledBalls } = useAppContext()!;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <div className="flex-1">
          <Current />
        </div>{" "}
        <div className="flex-1">
          <CalledCount />
        </div>
        <div className="flex-[2]">
          <Recent />
        </div>
      </div>
    </>
  );
}
