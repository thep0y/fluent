import { type Accessor, createEffect, createSignal } from "solid-js";
import {
  createTabster,
  disposeTabster,
  type Types as TabsterTypes,
} from "tabster";

interface WindowWithTabsterShadowDOMAPI extends Window {
  __tabsterShadowDOMAPI?: TabsterTypes.DOMAPI;
}

type UseTabsterFactory<FactoryResult> = (
  tabster: TabsterTypes.TabsterCore,
) => FactoryResult;

const DEFAULT_FACTORY: UseTabsterFactory<TabsterTypes.TabsterCore> = (
  tabster,
) => {
  return tabster;
};

/**
 * Gets the element which is the parent of a given element.
 * @internal
 */
export function getParent(child: Node | null): Node | null {
  if (!child) {
    return null;
  }

  const parent = child.parentNode;

  if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    return (parent as ShadowRoot).host;
  }

  return parent;
}

/**
 * Creates a tabster instance with the provided configuration
 *
 * @internal
 * @param targetDocument
 */
export function createTabsterWithConfig(
  targetDocument: Document | undefined,
): TabsterTypes.TabsterCore | undefined {
  const defaultView = targetDocument?.defaultView || undefined;
  const shadowDOMAPI = (
    defaultView as WindowWithTabsterShadowDOMAPI | undefined
  )?.__tabsterShadowDOMAPI;

  if (defaultView) {
    return createTabster(defaultView, {
      autoRoot: {},
      controlTab: false,
      getParent,
      checkUncontrolledTrappingFocus: (element) =>
        !!element.firstElementChild?.hasAttribute(
          "data-is-focus-trap-zone-bumper",
        ),
      DOMAPI: shadowDOMAPI,
    });
  }
}

/**
 * Tries to get a tabster instance on the current window or creates a new one
 * Since Tabster is single instance only, feel free to call this hook to ensure Tabster exists if necessary
 *
 * @internal
 * @returns Tabster a ref to core instance or a factory result
 */
export function useTabster(): Accessor<TabsterTypes.TabsterCore | null>;
export function useTabster<FactoryResult>(
  factory: UseTabsterFactory<FactoryResult>,
): Accessor<FactoryResult | null>;

export function useTabster<FactoryResult>(factory = DEFAULT_FACTORY) {
  //  const { targetDocument } = useFluent();
  const targetDocument = document;
  const [factoryResultRef, setFactoryResultRef] =
    createSignal<FactoryResult | null>(null);

  createEffect(() => {
    const tabster = createTabsterWithConfig(targetDocument);

    if (tabster) {
      setFactoryResultRef(() => factory(tabster) as FactoryResult);

      return () => {
        disposeTabster(tabster);
        setFactoryResultRef(null);
      };
    }
  });

  return factoryResultRef;
}
