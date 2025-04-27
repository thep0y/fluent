import { For, lazy } from "solid-js";
import ToastDemo from "./components/toast";
import { h1 } from "./App.css";

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
  lazy(() => import("./components/toast")),
  //   lazy(() => import("./components/divider")),
];

const App = () => {
  return (
    <>
      {/* <For each={examples}>{(item) => item()}</For> */}
      <h1 class={h1}>Fluent Solid</h1>
      <ToastDemo />
    </>
  );
};

export default App;
