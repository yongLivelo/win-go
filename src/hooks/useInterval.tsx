import { useEffect, useRef } from "react";

function useInterval(
  callBack: () => void,
  interval: number,
  shouldRun: boolean,
) {
  const callBackRef = useRef(callBack);

  useEffect(() => {
    callBackRef.current = callBack;
  }, [callBack]);

  useEffect(() => {
    if (!shouldRun) {
      return;
    }
    const id = setInterval(() => callBackRef.current(), interval);

    return () => clearInterval(id);
  }, [interval, shouldRun]);
}

export default useInterval;
