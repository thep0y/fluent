import { Text } from "../Text";
import type { TextPresetProps } from "../Text/Text.types";

export const createPreset = (
  classList:
    | {
        [k: string]: boolean | undefined;
      }
    | undefined,
) => {
  return (props: TextPresetProps) => <Text classList={classList} {...props} />;
};
