import { For, lazy } from "solid-js";
import { h1 } from "./App.css";
import { ToastProvider } from "@/index";

const examples = [
  lazy(() => import("./components/button")),
  lazy(() => import("./components/spinner")),
  lazy(() => import("./components/switch")),
  lazy(() => import("./components/badge")),
  lazy(() => import("./components/card")),
  lazy(() => import("./components/progress")),
  lazy(() => import("./components/tooltip")),
  lazy(() => import("./components/input")),
  lazy(() => import("./components/slider")),
  lazy(() => import("./components/label")),
  lazy(() => import("./components/textarea")),
  lazy(() => import("./components/link")),
  lazy(() => import("./components/toast")),
];

const App = () => {
  return (
    <ToastProvider>
      <h1 class={h1}>Fluent Solid</h1>

      <For each={examples}>{(item) => item()}</For>
    </ToastProvider>
  );
};

export default App;
