import {
  children,
  createMemo,
  createSignal,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";

import type { CardProps } from "./Card.types";
import { mergeCallbacks } from "~/utils/mergeCallbacks";
import type { RequiredPick } from "~/types";

import * as styles from "./Card.css";
import { useCardInteractive } from "./useCard";

type RequiredCardProps = RequiredPick<
  CardProps,
  "appearance" | "focusMode" | "orientation" | "size"
>;

export const Card = (props: CardProps) => {
  let cardRef: HTMLDivElement | undefined;

  const merged = mergeProps(
    {
      appearance: "filled",
      orientation: "vertical",
      size: "medium",
      focusMode: "off",
    } as RequiredCardProps,
    props,
  );

  const selectable = createMemo(() =>
    [merged.selected, merged.defaultSelected, merged.onSelectionChange].some(
      (prop) => typeof prop !== "undefined",
    ),
  );
  const { interactive, focusAttributes } = useCardInteractive(props);

  const [selected, setSelected] = createSignal(
    merged.defaultSelected ?? merged.selected,
  );
  const [selectFocused, setSelectFocused] = createSignal(false);

  const isSelectableOrInteractive = createMemo(
    () => interactive || selectable(),
  );

  const classList = () => ({
    [styles.card]: true,
    [styles.size[merged.size]]: true,
    [styles.orientation[merged.orientation]]: true,
    [styles.appearance[merged.appearance]]: true,
    [styles.interactive[merged.appearance]]: isSelectableOrInteractive(),
    [styles.selected[merged.appearance]]: selectable() && selected(),
    [styles.selectableFocused]: selectable() && selectFocused(),
    [styles.focused]: !selectable(),
    [merged.class || ""]: !!merged.class,
  });

  const [local, others] = splitProps(merged, [
    "class",
    "children",
    "appearance",
    "focusMode",
    "orientation",
    "size",
    "selected",
    "defaultSelected",
    "onSelectionChange",
    "floatingAction",
    "checkbox",
    "onClick",
    "onKeyDown",
  ]);

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onChangeHandler(e);
    }
  };

  const onChangeHandler = (_: Event) => {
    const newCheckedValue = !selected();
    setSelected(newCheckedValue);
    local.onSelectionChange?.({ selected: newCheckedValue });
  };

  const onClick = mergeCallbacks(
    local.onClick as (
      e: MouseEvent & { currentTarget: HTMLDivElement; target: Element },
    ) => void,
    onChangeHandler,
  );
  const onKeyDown = mergeCallbacks(
    local.onKeyDown as (
      e: KeyboardEvent & { currentTarget: HTMLDivElement; target: Element },
    ) => void,
    onKeyDownHandler,
  );

  const selectableCardProps = createMemo(() => {
    if (!selectable()) {
      return null;
    }

    return {
      onClick,
      onKeyDown,
    };
  });

  const checkboxSlot = children(() => {
    if (!selectable() || local.floatingAction) {
      return null;
    }

    return (
      <input
        {...local.checkbox}
        class={styles.checkbox}
        type="checkbox"
        checked={selected()}
        onChange={onChangeHandler}
        onFocus={() => setSelectFocused(true)}
        onBlur={() => setSelectFocused(false)}
      />
    );
  });

  return (
    <div
      {...(selectable() ? null : focusAttributes)}
      {...others}
      {...selectableCardProps()}
      ref={cardRef}
      onClick={onClick}
      onKeyDown={onKeyDown}
      classList={classList()}
      role={selectable() ? "group" : undefined}
    >
      <Show when={local.floatingAction}>
        <div class={styles.floatingAction}>{local.floatingAction}</div>
      </Show>

      {checkboxSlot()}

      {local.children}
    </div>
  );
};

export default Card;
