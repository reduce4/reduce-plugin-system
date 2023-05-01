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
const _plugins = Array(6)
  .fill(0)
  .reduce((v, t, i) => {
    v.push({
      in_org_id: "@reduce/code-editor@0.0.0",
      name: "code-editor",
      org_name: "reduce",
      author_name: "happysmile",
      installed: i % 2 == 0,
      profile_page: "https://github.com/happysmile12321",
      national_name: ["China"],
      repo_link: "https://github.com/reduce4/code-editor",
      version: "0.0.0",
      description: "code editor for rps",
      pay_qrcode: "",
      icon: "/plugin.png",
      org_icon: "/reduce_org.png",
      component_url: "http://127.0.0.1:5174/src/main.jsx",
      comment: [
        {
          name: "happysmile",
          account: "@reduce/happysmile",
          content: "update too slow!",
          star: 4,
        },
        {
          name: "ken",
          account: "@ken/ken",
          content: "need to add css support!",
          star: 5,
        },
      ],
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
    });
    return v;
  }, []);
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
        style={{
          height: "80vh",
          overflow: "hidden",
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
