import Spinner from "@/components/spinner/Spinner";
import { Divider, themeContract } from "@/index";
import { box, field, fieldColumn } from "../themes/global.css";

const SpinnerDemo = () => {
  return (
    <div class={box}>
      <Divider appearance="strong">
        <h2>Spinner</h2>
      </Divider>

      <div class={field}>
        <Spinner />
      </div>
      <div class={field}>
        <Spinner
          style={{ padding: "20px" }}
          appearance="primary"
          label="Primary Spinner"
        />

        <div>
          <Spinner
            style={{
              padding: "20px",
              "background-color": themeContract.colorBrandBackgroundStatic,
            }}
            appearance="inverted"
            label="Inverted Spinner"
          />
        </div>
      </div>
      <div class={fieldColumn}>
        <Spinner labelPosition="before" label="Label Position Before..." />

        <Spinner labelPosition="after" label="Label Position After..." />

        <Spinner labelPosition="above" label="Label Position Above..." />

        <Spinner labelPosition="below" label="Label Position Below..." />
      </div>
      <div class={fieldColumn}>
        <Spinner size="extra-tiny" label="Extra Tiny Spinner" />

        <Spinner size="tiny" label="Tiny Spinner" />

        <Spinner size="extra-small" label="Extra Small Spinner" />

        <Spinner size="small" label="Small Spinner" />

        <Spinner size="medium" label="Medium Spinner" />

        <Spinner size="large" label="Large Spinner" />

        <Spinner size="extra-large" label="Extra Large Spinner" />

        <Spinner size="huge" label="Huge Spinner" />
      </div>
    </div>
  );
};

export default SpinnerDemo;
