import { createSignal, lazy } from "solid-js";

const children = [
  lazy(() => import("./components/button")),
  lazy(() => import("./components/spinner")),
];

const menus = ["Button"];

const App = () => {
  const [index, setIndex] = createSignal(0);

  return children;
};

export default App;
