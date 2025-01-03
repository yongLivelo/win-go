import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function BallCaller() {
  return (
    <>
      <div className="bg-red flex w-full flex-col gap-2">
        <div className="flex flex-1 gap-2">
          <Button className="flex-1">Call</Button>
          <Button className="flex-1">Reset</Button>
        </div>
        <div className="flex flex-1 gap-2">
          <Button className="flex-1">Auto</Button>
          <Button className="flex-1">
            <Slider />
          </Button>
        </div>
      </div>
    </>
  );
}
