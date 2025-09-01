import { type MergeProps, mergeProps as _mergeProps } from "solid-js";

export function mergeProps<T, K extends keyof T>(
  defaults: Required<Pick<T, K>>,
  props: T
): MergeProps<[Required<Pick<T, K>>, T]> {
  const resolvedProps = _mergeProps(defaults, props);
  return resolvedProps;
}
