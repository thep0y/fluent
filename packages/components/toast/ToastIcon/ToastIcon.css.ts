import { styleVariants } from "@vanilla-extract/css";
import {
  toastError,
  toastInfo,
  toastSuccess,
  toastWarning,
} from "../ToastContent/ToastContent.css";
import { themeContract } from "~/themes";

export const toastIconStyle = styleVariants({
  info: {
    selectors: {
      [`${toastInfo} &`]: {
        color: themeContract.colorBrandBackground,
      },
    },
  },
  success: {
    selectors: {
      [`${toastSuccess} &`]: {
        color: themeContract.colorStatusSuccessBackground3,
      },
    },
  },
  warning: {
    selectors: {
      [`${toastWarning} &`]: {
        color: themeContract.colorStatusWarningBackground3,
      },
    },
  },
  error: {
    selectors: {
      [`${toastError} &`]: {
        color: themeContract.colorStatusDangerBackground3,
      },
    },
  },
});
