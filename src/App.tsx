import { For, lazy } from "solid-js";

const examples = [
  lazy(() => import("./components/button")),
  lazy(() => import("./components/spinner")),
  lazy(() => import("./components/progress")),
  lazy(() => import("./components/input")),
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
