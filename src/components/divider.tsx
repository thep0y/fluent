import Divider from "~/components/divider";

const DividerDemo = () => {
  return (
    <div>
      <div style={{ padding: "20px 0" }}>
        <Divider />
      </div>

      <div style={{ padding: "20px 0" }}>
        <Divider>Text</Divider>
      </div>

      <div style={{ height: "80px", "margin-bottom": "10px" }}>
        <Divider vertical style={{ height: "100%" }} />
      </div>

      <div style={{ height: "80px" }}>
        <Divider vertical style={{ height: "100%" }}>
          Text
        </Divider>
      </div>

      <div>
        <div style={{ padding: "20px 0" }}>
          <Divider>(default)</Divider>
        </div>
        <div style={{ padding: "20px 0" }}>
          <Divider appearance="subtle">subtle</Divider>
        </div>
        <div style={{ padding: "20px 0" }}>
          <Divider appearance="brand">brand</Divider>
        </div>
        <div style={{ padding: "20px 0" }}>
          <Divider appearance="strong">strong</Divider>
        </div>
      </div>

      <div>
        <div style={{ padding: "20px 0" }}>
          <Divider inset />
        </div>
        <div style={{ padding: "20px 0" }}>
          <Divider inset>Text</Divider>
        </div>
        <div style={{ padding: "20px 0", height: "80px" }}>
          <Divider inset vertical style={{ height: "100%" }} />
        </div>
        <div style={{ padding: "20px 0", height: "80px" }}>
          <Divider inset vertical style={{ height: "100%" }}>
            Text
          </Divider>
        </div>
      </div>

      <div>
        <div style={{ padding: "20px 0" }}>
          <Divider alignContent="start">start</Divider>
        </div>
        <div style={{ padding: "20px 0" }}>
          <Divider>center(default)</Divider>
        </div>
        <div style={{ padding: "20px 0" }}>
          <Divider alignContent="end">end</Divider>
        </div>
        <div style={{ padding: "20px 0", height: "80px" }}>
          <Divider vertical alignContent="start" style={{ height: "100%" }}>
            start
          </Divider>
        </div>
        <div style={{ padding: "20px 0", height: "80px" }}>
          <Divider vertical style={{ height: "100%" }}>
            center(default)
          </Divider>
        </div>
        <div style={{ padding: "20px 0", height: "80px" }}>
          <Divider vertical alignContent="end" style={{ height: "100%" }}>
            end
          </Divider>
        </div>
      </div>

      <div>
        <div
          style={{
            padding: "20px 0",
            display: "flex",
            "justify-items": "center",
            "align-items": "center",
            "min-height": "96px",
            "flex-direction": "column",
          }}
        >
          <Divider style={{ width: "200px" }}>Custom width (200px)</Divider>
        </div>
        <div
          style={{
            padding: "20px 0",
            display: "flex",
            "justify-content": "center",
            "min-height": "192px",
            "flex-direction": "column",
          }}
        >
          <Divider style={{ "max-height": "50px" }} vertical>
            Custom height (50px)
          </Divider>
        </div>
        <div style={{ padding: "20px 0" }}>
          <Divider style={{ "font-weight": "bold", "font-size": "14px" }}>
            Custom font (14px bold)
          </Divider>
        </div>
      </div>
    </div>
  );
};

export default DividerDemo;
