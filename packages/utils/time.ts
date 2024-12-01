import { createSignal, onCleanup } from "solid-js";

type Timeout = ReturnType<typeof setTimeout>;

export const useTimeout = (): [
  (callback: () => void, delay: number) => void,
  () => void,
] => {
  const [timeoutId, setTimeoutId] = createSignal<Timeout | null>(null);

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

export const useInterval = (): [
  (callback: () => void, delay: number) => void,
  () => void,
] => {
  const [timeoutId, setTimeoutId] = createSignal<Timeout | null>(null);

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
