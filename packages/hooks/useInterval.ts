import { createSignal, onCleanup } from "solid-js";
import type { TimeoutID } from "~/types";

export const useInterval = (): [
  (callback: () => void, delay: number) => void,
  () => void,
] => {
  const [timeoutId, setTimeoutId] = createSignal<TimeoutID | null>(null);

  const setIntervalFn = (callback: () => void, delay: number) => {
    const id = setInterval(callback, delay);
    setTimeoutId(id);
  };

  const cancelIntervalFn = () => {
    const id = timeoutId();
    if (id) {
      clearTimeout(id);
      setTimeoutId(null);
    }
  };

  onCleanup(() => {
    cancelIntervalFn();
  });

  return [setIntervalFn, cancelIntervalFn];
};
