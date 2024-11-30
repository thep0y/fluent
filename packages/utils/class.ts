export const addClassList = ({
  base,
  others = {},
}: {
  base?: string;
  others?: Record<string, string | boolean | undefined | null | 0>;
}): Record<string, boolean> => {
  const classes: Record<string, boolean> = {};

  if (base) {
    classes[base] = true;
  }

  for (const k of Object.keys(others)) {
    classes[k] = !!others[k];
  }

  return classes;
};
