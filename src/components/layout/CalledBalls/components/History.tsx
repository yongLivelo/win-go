import { Button } from "@/components/ui/button";

export default function History() {
  return (
    <>
      <div className="flex justify-around gap-4 rounded bg-slate-900 p-4">
        <div>
          <div>Number of Calls</div>
          <div></div>
        </div>
        <Button>Show History</Button>
      </div>
    </>
  );
}
