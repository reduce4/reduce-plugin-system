import React, { useEffect, useState } from "react";
import { Button, Tabs } from "antd";
import { CloseOutlined } from "@ant-design/icons";

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
//mock data

/** rpm -- reduce plugin market */
const Rpm = ({ onClose }) => {
  const [plugins, setPlugins] = useState(null);
  const [signals] = useSignals();
  useShowPlugin(signals?.showPlugin ?? null, plugins);

  useEffect(() => {
    setPlugins(_plugins);
  }, []);

  if (!plugins) {
    return;
  }
  return (
    <>
      <DataFlowEditor />
      {/* <Tabs
        tabBarExtraContent={
          <>
            <Button type="text" onClick={() => onClose()}>
              <CloseOutlined />
            </Button>
          </>
        }
        style={{
          height: "80vh",
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
      /> */}
    </>
  );
};
export default Rpm;
