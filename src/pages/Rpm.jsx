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
import PortalApp from "../components/PortalApp";

//mock data
/** rpm -- reduce plugin market */
const Rpm = ({ onClose }) => {
  const [plugins, setPlugins] = useState(null);
  //rpm和外界通信的桥梁
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

  return (
    <>
      <PortalApp
        key={"@reduce/1"}
        containerId={"@reduce/1"}
        containerDataSet={{
          pluginid: "@reduce/pdf@0.0.0",
        }}
      >
        <MicroApp entry={"http://127.0.0.1:6001/src/main.jsx"} />
      </PortalApp>
      <PortalApp
        key={"@reduce/2"}
        containerId={"@reduce/2"}
        containerDataSet={{
          pluginid: "@reduce/card@0.0.0",
        }}
      >
        <MicroApp entry={"http://127.0.0.1:6002/src/main.jsx"} />
      </PortalApp>
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
          // {
          //   key: "2",
          //   label: (
          //     <span>
          //       <AppstoreOutlined />
          //       我的插件应用
          //     </span>
          //   ),
          //   children: `content2`,
          // },
          // {
          //   key: "3",
          //   label: (
          //     <span>
          //       <SettingOutlined />
          //       插件偏好设置
          //     </span>
          //   ),
          //   children: `Content of Tab Pane 3`,
          // },
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
          // {
          //   key: "5",
          //   label: (
          //     <span>
          //       <CodeOutlined />
          //       插件开发
          //     </span>
          //   ),
          //   children: `Content of Tab Pane 4`,
          // },
          // {
          //   key: "6",
          //   label: (
          //     <span>
          //       <ProfileOutlined />
          //       账号和数据
          //     </span>
          //   ),
          //   children: `Content of Tab Pane 5`,
          // },
        ]}
      />
    </>
  );
};
export default Rpm;
