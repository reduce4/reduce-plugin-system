// import webContainer from "../oo/webContainer";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import { MicroApp } from "@micro-web/app";

const _plugins = [{}];

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
