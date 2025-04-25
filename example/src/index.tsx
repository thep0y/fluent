/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App.tsx";
import { ToastProvider } from "@/index";

const root = document.getElementById("root");

render(
  () => (
    <ToastProvider>
      <App />
    </ToastProvider>
  ),
  root!,
);
