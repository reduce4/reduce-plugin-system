// import webContainer from "../oo/webContainer";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import { MicroApp } from "@micro-web/app";

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
    component_url: "http://127.0.0.1:5175/src/main.jsx",
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
    v: "REDUCE_ORG",
    command_list: ["editor.open", "editor.close"],
  },
];

const PluginMarket = ({ onClose }) => {
  const [plugins, setPlugins] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setPlugins(_plugins);
  }, []);

  return (
    <>
      <Row>
        <Col span={24}>
          <MicroApp
            className="micro-app"
            count={count}
            setCount={setCount}
            entry="http://127.0.0.1:5175/src/main.jsx"
          />
        </Col>
        <Col>
          <Button onClick={() => setCount(count + 1)}>{count}</Button>
        </Col>
        <Col span={24}>{/* <Plugi nList plugins={plugins} /> */}</Col>
        <Col>
          <Button onClick={() => onClose()}>close</Button>
        </Col>
      </Row>
    </>
  );
};
export default PluginMarket;
