import { createMemo } from "solid-js";
import {
  getTabsterAttribute,
  type Types as TabsterTypes,
  TABSTER_ATTRIBUTE_NAME,
} from "tabster";
import { useTabster } from "./useTabster";

/**
 * @internal
 * Hook that returns tabster attributes while ensuring tabster exists
 */
export const useTabsterAttributes = (
  props: TabsterTypes.TabsterAttributeProps,
): (() => TabsterTypes.TabsterDOMAttribute) => {
  // A tabster instance is not necessary to generate tabster attributes
  // but calling the hook will ensure that a tabster instance exists internally and avoids consumers doing the same
  useTabster();

  const strAttr = createMemo(() => getTabsterAttribute(props, true));

  return () => ({
    [TABSTER_ATTRIBUTE_NAME]: strAttr(),
  });
};
