import { FiCalendar } from "solid-icons/fi";
import { RiBusinessCalendarFill } from "solid-icons/ri";
import Button from "~/button";

const ButtonDemo = () => {
  return (
    <>
      <div>
        <Button>Example</Button>
      </div>

      <div>
        <Button>Rounded</Button>
        <Button shape="circular">Circular</Button>
        <Button shape="square">Square</Button>
      </div>

      <div>
        <Button icon={<FiCalendar />}>Default</Button>
        <Button appearance="primary" icon={<FiCalendar />}>
          Primary
        </Button>
        <Button appearance="outline" icon={<FiCalendar />}>
          Outline
        </Button>
        <Button appearance="subtle" icon={<RiBusinessCalendarFill />}>
          Subtle
        </Button>
        <Button appearance="transparent" icon={<FiCalendar />}>
          Transparent
        </Button>
      </div>

      <div>
        <Button icon={<RiBusinessCalendarFill />}>
          With calendar icon before contents
        </Button>
        <Button icon={<RiBusinessCalendarFill />} iconPosition="after">
          With calendar icon after contents
        </Button>
        <Button icon={<RiBusinessCalendarFill />} />
      </div>

      <div>
        <div>
          <Button size="small">Small</Button>
          <Button size="small" icon={<RiBusinessCalendarFill />}>
            Small with calendar icon
          </Button>
          <Button size="small" icon={<RiBusinessCalendarFill />} />
        </div>
        <div>
          <Button>Medium</Button>
          <Button icon={<RiBusinessCalendarFill />}>
            Medium with calendar icon
          </Button>
          <Button icon={<RiBusinessCalendarFill />} />
        </div>
        <div>
          <Button size="large">Large</Button>
          <Button size="large" icon={<RiBusinessCalendarFill />}>
            Large with calendar icon
          </Button>
          <Button size="large" icon={<RiBusinessCalendarFill />} />
        </div>
      </div>

      <div>
        <div>
          <Button>Enabled state</Button>
          <Button disabled>Disabled state</Button>
          <Button disabledFocusable>Disabled focusable state</Button>
        </div>
        <div>
          <Button appearance="primary">Enabled state</Button>
          <Button appearance="primary" disabled>
            Disabled state
          </Button>
          <Button appearance="primary" disabledFocusable>
            Disabled focusable state
          </Button>
        </div>
      </div>

      {/*
      <div>
        <Button
          class={buttonClassName}
          disabledFocusable={loadingState !== "initial"}
          icon={buttonIcon}
          onClick={onButtonClick}
        >
          {buttonContent}
        </Button>
        <Button onClick={onResetButtonClick}>Reset loading state</Button>
      </div>
      */}

      <div>
        <Button>Short text</Button>
        <Button style={{ width: "280px" }}>
          Long text wraps after it hits the max width of the component
        </Button>
      </div>
    </>
  );
};

export default ButtonDemo;
