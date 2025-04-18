import { For, lazy } from "solid-js";

const examples = [
  lazy(() => import("./components/button")),
  lazy(() => import("./components/spinner")),
  lazy(() => import("./components/progress")),
  lazy(() => import("./components/input")),
  lazy(() => import("./components/switch")),
  lazy(() => import("./components/divider")),
  lazy(() => import("./components/slider")),
  lazy(() => import("./components/badge")),
  lazy(() => import("./components/tooltip")),
  lazy(() => import("./components/card")),
];

//const menus = ["Button"];

const App = () => {
  return (
    <div>
      <For each={examples}>{(item) => item()}</For>
    </div>
  );
};

export default App;
