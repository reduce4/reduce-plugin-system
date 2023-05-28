import React, { useEffect, useState } from "react";
import { Button, Tabs } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom";
import { MicroApp } from "@micro-web/app";
import usePluginState from "../hooks/rpm/usePluginState";
import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  SettingOutlined,
  CodeOutlined,
  ProfileOutlined,
  NodeIndexOutlined,
} from "@ant-design/icons";
import PluginMarket from "./PluginMarket";
import PluginDataFlowEditor from "./PluginDataFlowEditor";
import _plugins from "./plugins";
import useSignals from "../hooks/rpm/useSignals";
import useShowPlugin from "../hooks/rpm/useShowPlugin";
import DataFlowEditor from "../components/dataflow/DataFlowEditor";
const PluginPortal = ({ data, plugin }) => {
  const [position, setPosition] = useState({
    left: "50%",
    top: "50%",
  });
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });
  const container = document.createElement("div");
  container.id = plugin.in_org_id;
  document.body.appendChild(container);
  return ReactDOM.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          top: position.top,
          left: position.left,
        }}
        draggable
        onDragOver={(e) => {
          console.log("drag,over", e);
          e.preventDefault();
          setPosition({
            left: e.clientX - offset.x,
            top: e.clientY - offset.y,
          });
        }}
        onDragStart={(e) => {
          console.log("drag,start", e);
          setOffset(() => ({
            x: e.nativeEvent.layerX,
            y: e.nativeEvent.layerY,
          }));
        }}
        onDragEnd={(e) => {
          console.log("drag,end", e);
          setPosition({
            left: e.clientX - offset.x,
            top: e.clientY - offset.y,
          });
        }}
      >
        <MicroApp
          entry={plugin.component_url}
          plugin={plugin}
          reload={data.reload}
          onClose={() => {
            container.remove();
          }}
        />
      </div>
    </>,
    container
  );
};
//mock data

/** rpm -- reduce plugin market */
const Rpm = ({ onClose }) => {
  const [plugins, setPlugins] = useState(null);
  const [signals] = useSignals();
  const handlePlugin = useShowPlugin(signals?.showPlugin ?? null, plugins);
  //请求插件资源
  useEffect(() => {
    setPlugins(_plugins);
  }, []);
  //插件的状态 TODO
  // const [pluginState, setPluginState] = usePluginState({ plugins });

  if (!plugins) {
    return;
  }
  /* {handlePlugin && (
        <PluginPortal data={handlePlugin[0]} plugin={handlePlugin[1]} />
      )} */
  return (
    <>
      <Tabs
        tabBarExtraContent={
          <>
            <Button type="text" onClick={() => onClose()}>
              <CloseOutlined />
            </Button>
          </>
        }
        style={{
          height: "100%",
          overflow: "hidden",
          padding: "0 10px",
        }}
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: (
              <span>
                <AppstoreAddOutlined />
                插件应用市场
              </span>
            ),
            children: <PluginMarket plugins={plugins} />,
          },
          {
            key: "2",
            label: (
              <span>
                <AppstoreOutlined />
                我的插件应用
              </span>
            ),
            children: `content2`,
          },
          {
            key: "3",
            label: (
              <span>
                <SettingOutlined />
                插件偏好设置
              </span>
            ),
            children: `Content of Tab Pane 3`,
          },
          {
            key: "4",
            label: (
              <span>
                <NodeIndexOutlined />
                工作流
              </span>
            ),
            children: <PluginDataFlowEditor />,
          },
          {
            key: "5",
            label: (
              <span>
                <CodeOutlined />
                插件开发
              </span>
            ),
            children: `Content of Tab Pane 4`,
          },
          {
            key: "6",
            label: (
              <span>
                <ProfileOutlined />
                账号和数据
              </span>
            ),
            children: `Content of Tab Pane 5`,
          },
        ]}
      />
    </>
  );
};
export default Rpm;
