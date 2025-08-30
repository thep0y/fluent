import { lazy } from "solid-js";
import type { TextPresetProps } from "../Text/Text.types";

const Text = lazy(() => import("../Text/Text"));

export const createPreset = (
  classList:
    | {
        [k: string]: boolean | undefined;
      }
    | undefined,
) => {
  return (props: TextPresetProps) => <Text classList={classList} {...props} />;
};
