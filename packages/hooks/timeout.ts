import { createSignal, onCleanup } from "solid-js";
import type { TimeoutID } from "~/types";

export const useTimeout = (): [
  (callback: () => void, delay: number) => void,
  () => void,
] => {
  const [timeoutId, setTimeoutId] = createSignal<TimeoutID | null>(null);

  const setTimeoutFn = (callback: () => void, delay: number) => {
    const id = setTimeout(callback, delay);
    setTimeoutId(id);
  };

  const cancelTimeoutFn = () => {
    const id = timeoutId();
    if (id) {
      clearTimeout(id);
      setTimeoutId(null);
    }
  };

  onCleanup(() => {
    cancelTimeoutFn();
  });

  return [setTimeoutFn, cancelTimeoutFn];
};
