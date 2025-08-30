import { Divider } from "@/index";
import Appearance from "./Appearance";
import Disabled from "./Disabled";
import Placeholder from "./Placeholder";
import Resize from "./Resize";

const Textarea = () => (
  <div>
    <Divider appearance="strong">
      <h2>Textarea</h2>
    </Divider>

    <Appearance />
    <Disabled />
    <Placeholder />
    <Resize />
  </div>
);

export default Textarea;
