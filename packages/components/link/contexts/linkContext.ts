import { createContext, useContext } from "solid-js";

export type LinkContextValue = {
  inline?: boolean;
};

const LinkContext = createContext<LinkContextValue | undefined>(undefined);

export const linkContextDefaultValue: LinkContextValue = {
  inline: false,
};

export const LinkContextProvider = LinkContext.Provider;
export const useLinkContext = () =>
  useContext(LinkContext) ?? linkContextDefaultValue;
