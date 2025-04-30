import { AiFillHeart } from "solid-icons/ai";
import { Button, Spinner } from "@/index";
import { RiBusinessCalendarFill } from "solid-icons/ri";
import { children, createMemo, createSignal } from "solid-js";
import { useTimeout } from "@/hooks/useTimeout";
import { VsCheck } from "solid-icons/vs";
import { themeContract } from "@/themes/theme.css";
import { vars } from "@/themes/var.css";
import { Divider } from "@/index";
import { box, field, fieldColumn } from "../themes/global.css";

const buttonNonInteractive = {
  "background-color": themeContract.colorNeutralBackground1,
  border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStroke1}`,
  color: themeContract.colorNeutralForeground1,
  cursor: "default",
  pointerEvents: "none",
};

type LoadingState = "initial" | "loading" | "loaded";

const LoadingButton = () => {
  const [loadingState, setLoadingState] = createSignal<LoadingState>("initial");

  const [setTimeout, cancelTimeout] = useTimeout();

  const onButtonClick = () => {
    setLoadingState("loading");
    setTimeout(() => setLoadingState("loaded"), 5000);
  };

  const buttonContent = createMemo(() =>
    loadingState() === "loading"
      ? "Loading"
      : loadingState() === "loaded"
        ? "Loaded"
        : "Start loading",
  );

  const buttonIcon = children(() =>
    loadingState() === "loading" ? (
      <Spinner size="tiny" />
    ) : loadingState() === "loaded" ? (
      <VsCheck
        color={
          loadingState() === "loaded"
            ? themeContract.colorStatusSuccessForeground1
            : undefined
        }
      />
    ) : null,
  );

  const onResetButtonClick = () => {
    cancelTimeout();
    setLoadingState("initial");
  };

  return (
    <div class={field}>
      <Button
        style={loadingState() === "initial" ? undefined : buttonNonInteractive}
        disabledFocusable={loadingState() !== "initial"}
        icon={buttonIcon()}
        onClick={onButtonClick}
      >
        {buttonContent()}
      </Button>
      <Button onClick={onResetButtonClick}>Reset loading state</Button>
    </div>
  );
};

const ButtonDemo = () => {
  return (
    <div class={box}>
      <Divider appearance="strong">
        <h2>Button</h2>
      </Divider>

      <div class={field}>
        <Button>Example</Button>
      </div>

      <div class={field}>
        <Button>Rounded</Button>
        <Button shape="circular">Circular</Button>
        <Button shape="square">Square</Button>
      </div>

      <div class={field}>
        <Button icon={<AiFillHeart />}>Default</Button>
        <Button appearance="primary" icon={<AiFillHeart />}>
          Primary
        </Button>
        <Button appearance="outline" icon={<AiFillHeart />}>
          Outline
        </Button>
        <Button appearance="subtle" icon={<AiFillHeart />}>
          Subtle
        </Button>
        <Button appearance="transparent" icon={<AiFillHeart />}>
          Transparent
        </Button>
        <Button appearance="danger" icon={<AiFillHeart />}>
          Danger
        </Button>
      </div>

      <div class={field}>
        <Button icon={<RiBusinessCalendarFill />}>
          With calendar icon before contents
        </Button>
        <Button icon={<RiBusinessCalendarFill />} iconPosition="after">
          With calendar icon after contents
        </Button>
        <Button icon={<RiBusinessCalendarFill />} />
      </div>

      <div class={fieldColumn}>
        <div class={field}>
          <Button size="small">Small</Button>
          <Button size="small" icon={<RiBusinessCalendarFill />}>
            Small with calendar icon
          </Button>
          <Button size="small" icon={<RiBusinessCalendarFill />} />
        </div>
        <div class={field}>
          <Button>Medium</Button>
          <Button icon={<RiBusinessCalendarFill />}>
            Medium with calendar icon
          </Button>
          <Button icon={<RiBusinessCalendarFill />} />
        </div>
        <div class={field}>
          <Button size="large">Large</Button>
          <Button size="large" icon={<RiBusinessCalendarFill />}>
            Large with calendar icon
          </Button>
          <Button size="large" icon={<RiBusinessCalendarFill />} />
        </div>
      </div>

      <div class={fieldColumn}>
        <div class={field}>
          <Button>Enabled state</Button>
          <Button disabled>Disabled state</Button>
          <Button disabledFocusable>Disabled focusable state</Button>
        </div>
        <div class={field}>
          <Button appearance="primary">Enabled state</Button>
          <Button appearance="primary" disabled>
            Disabled state
          </Button>
          <Button appearance="primary" disabledFocusable>
            Disabled focusable state
          </Button>
        </div>
      </div>

      <LoadingButton />

      <div class={field}>
        <Button>Short text</Button>
        <Button style={{ width: "280px" }}>
          Long text wraps after it hits the max width of the component
        </Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
