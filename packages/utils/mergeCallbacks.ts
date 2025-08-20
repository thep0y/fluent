export const mergeCallbacks = <Args extends unknown[]>(
  callback1: ((...args: Args) => void) | undefined,
  callback2: ((...args: Args) => void) | undefined,
) => {
  return (...args: Args) => {
    callback1?.(...args);
    callback2?.(...args);
  };
};
