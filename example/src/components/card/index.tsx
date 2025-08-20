import Appearance from "./Appearance";
import Default from "./Default";
import Orientation from "./Orientation";
import Selectable from "./Selectable";
import { Size } from "./Size";
import { Templates } from "./Templates";
import { WithAction } from "./WithAction";

const Cards = () => (
  <div>
    <Default />
    <Orientation />
    <Appearance />
    <Size />
    <Selectable />
    <WithAction />
    <Templates />
  </div>
);

export default Cards;
