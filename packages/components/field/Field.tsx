import { lazy, Match, mergeProps, Show, splitProps, Switch } from "solid-js";
import { Dynamic } from "solid-js/web";

import { BiSolidErrorCircle } from "solid-icons/bi";
import { AiFillWarning } from "solid-icons/ai";
import { FaSolidCircleCheck } from "solid-icons/fa";

import type { LabelProps } from "../label";

import type { FieldProps } from "./Field.types";

import * as styles from "./Field.css";

const Label = lazy(() => import("../label"));

type RequiredProps<T extends keyof FieldProps> = NonNullable<FieldProps[T]>;

export const Field = (props: FieldProps) => {
  const merged = mergeProps(
    {
      orientation: "vertical" as RequiredProps<"orientation">,
      required: false,
      size: "medium" as RequiredProps<"size">,
      validationState: "none" as RequiredProps<"validationState">,
    },
    props,
  );

  const [local, others] = splitProps(merged, [
    "orientation",
    "required",
    "size",
    "validationState",
    "hint",
    "label",
    "orientation",
    "validationMessageIcon",
    "validationMessage",
    "class",
    "classList",
    "children",
  ]);

  const rootClassList = () => ({
    [styles.root]: true,
    [styles.horizontal]: local.orientation === "horizontal",
    [styles.horizontalNoLabel]:
      local.orientation === "horizontal" && !local.label,
    [local.class ?? ""]: !!local.class,
    ...local.classList,
  });

  const labelClassList = () => ({
    [styles.label.horizontal]: local.orientation === "horizontal",
    [styles.label.horizontalSmall]:
      local.orientation === "horizontal" && local.size === "small",
    [styles.label.horizontalLarge]:
      local.orientation === "horizontal" && local.size === "large",
    [styles.label.vertical]: local.orientation === "vertical",
    [styles.label.verticalLarge]:
      local.orientation === "vertical" && local.size === "large",
  });

  const validationMessageClassList = () => ({
    [styles.secondaryTextBase]: true,
    [styles.secondaryText.error]: local.validationState === "error",
    [styles.secondaryText.withIcon]:
      local.validationState !== "none" || !!local.validationMessageIcon,
  });

  const validationMessageIconClassList = () => ({
    [styles.validationMessageIcon[
      local.validationState as Exclude<
        (typeof local)["validationState"],
        "none"
      >
    ]]: local.validationState !== "none",
  });

  const hintClassList = () => ({
    [styles.hint]: !!local.hint,
    [styles.secondaryTextBase]: !!local.hint,
  });

  return (
    <div classList={rootClassList()} {...others}>
      <Show when={local.label}>
        <Show
          when={typeof local.label === "string"}
          fallback={
            <Dynamic component={Label} {...(local.label as LabelProps)} />
          }
        >
          <Label
            classList={labelClassList()}
            required={local.required}
            size={local.size}
          >
            {local.label as string}
          </Label>
        </Show>
      </Show>

      {/* TODO: Size propagation to child elements not yet handled */}
      {local.children}

      <Show when={local.validationMessage}>
        <div classList={validationMessageClassList()}>
          <Show when={local.validationState !== "none"}>
            <span classList={validationMessageIconClassList()}>
              <Show
                when={!local.validationMessageIcon}
                fallback={local.validationMessageIcon}
              >
                <Switch>
                  <Match when={local.validationState === "error"}>
                    <BiSolidErrorCircle />
                  </Match>
                  <Match when={local.validationState === "warning"}>
                    <AiFillWarning />
                  </Match>
                  <Match when={local.validationState === "success"}>
                    <FaSolidCircleCheck />
                  </Match>
                </Switch>
              </Show>
            </span>
          </Show>

          {local.validationMessage}
        </div>
      </Show>

      <Show when={local.hint}>
        <div classList={hintClassList()}>{local.hint}</div>
      </Show>
    </div>
  );
};
