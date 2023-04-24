import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
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

//mock data
const _plugins = [
  {
    org_id: "@reduce/code-editor@0.0.0",
    org_name: "reduce",
    author_name: "happysmile",
    profile_page: "https://github.com/happysmile12321",
    national_name: ["China"],
    repo_link: "https://github.com/reduce4/code-editor",
    version: "0.0.0",
    description: "code editor for rps",
    pay_qrcode: "",
    icon: "",
    org_icon: "",
    component_url: "http://127.0.0.1:5174/src/main.jsx",
    usage: [
      {
        open_time: "",
        close_time: "",
        duration: 0.0,
        command_history: [],
      },
    ],
    roadmap: {
      content: {
        "2023-04-24": "coding",
        "2023-04-25": "v0.0.0 code complete",
      },
    },
    command_list: ["editor.open", "editor.close"],
  },
];
/** rpm -- reduce plugin market */
const Rpm = ({ onClose }) => {
  const [plugins, setPlugins] = useState(null);

  useEffect(() => {
    setPlugins(_plugins);
  }, []);

  if (!plugins) {
    return;
  }
  return (
    <>
      <Tabs
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
            children: <PluginMarket />,
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

      {/* <Row>
        <Col span={24}>
          <PluginList plugins={plugins} />
        </Col>
      </Row> */}
    </>
  );
};
export default Rpm;
