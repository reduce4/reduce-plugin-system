import { Row, Col, Avatar, Space, Radio, Card, Button } from "antd";
import { useState } from "react";
const ConfigItem = ({ pluginHookItem, selected }) => {
  return (
    <Row align={"middle"}>
      <Col span={24}>
        <Radio.Button
          value={pluginHookItem.input}
          type="text"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        >
          <Card
            style={{
              border: "1px solid rgb(190, 214, 251)",
              borderRadius: "8px",
              width: "100%",
              background:
                selected == pluginHookItem.input
                  ? "rgb(225, 238, 249)"
                  : "none",
              border:
                selected == pluginHookItem.input ? "1px solid #1677ff" : "",
            }}
          >
            <p>{pluginHookItem.hooksMeans}</p>
          </Card>
        </Radio.Button>
      </Col>
    </Row>
  );
};
const ConfigPanel = ({ plugin, selectNode, setSelectNode }) => {
  console.log("selec", selectNode.store.data.data.selectHook);
  return (
    <>
      <Row align={"middle"}>
        <Col span={24}>
          <Space>
            <Avatar src={plugin.icon}></Avatar>
            选择触发条件
          </Space>
        </Col>
        <Col span={24}>
          <br />
        </Col>
        <Col span={24}>
          <Radio.Group
            onChange={({ target: { value } }) => {
              var c = { ...selectNode };
              c.store.data.data.selectHook = value;
              setSelectNode(c);
            }}
            value={selectNode.store.data.data.selectHook}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              {Object.keys(plugin.dsl?.hooks ?? {}).map((hookItem, idx) => (
                <ConfigItem
                  key={idx}
                  selected={selectNode.store.data.data.selectHook}
                  pluginHookItem={(plugin.dsl?.hooks ?? {})[hookItem]}
                />
              ))}
            </Space>
          </Radio.Group>
        </Col>
      </Row>
    </>
  );
};
export default ConfigPanel;
