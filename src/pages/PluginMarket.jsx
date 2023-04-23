// import webContainer from "../oo/webContainer";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import { MicroApp } from "@micro-web/app";

const _plugins = [{}];

const PluginMarket = ({ onClose }) => {
  const [plugins, setPlugins] = useState(null);

  useEffect(() => {
    setPlugins(_plugins);
  }, []);

  return (
    <>
      <Row>
        <Col span={24}>
          <MicroApp
            className="micro-app"
            entry="http://127.0.0.1:5175/src/main.jsx"
          />
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
