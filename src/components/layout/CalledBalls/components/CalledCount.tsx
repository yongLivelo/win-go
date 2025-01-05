import { useAppContext } from "@/AppContext";

export default function CalledCount() {
  const { calledBalls } = useAppContext()!;

  return (
    <>
      <div className="flex h-full flex-col items-center gap-2 rounded bg-slate-900 p-4">
        <div>Number of Calls</div>
        <div className="mb-2 text-7xl">{calledBalls.length}</div>
      </div>
    </>
  );
}
