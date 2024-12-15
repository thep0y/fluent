import Tooltip from "~/components/tooltip";
import { Button } from "~/index";

const TooltipDemo = () => {
  return (
    <div>
      <div style={{ margin: "40px" }}>
        <Tooltip
          content="add something"
          relationship="label"
          positioning="after"
          visible
        >
          <Button>+</Button>
        </Tooltip>
      </div>

      <div style={{ margin: "40px" }}>
        <Tooltip content="add something" relationship="label" visible>
          <Button>+</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default TooltipDemo;
