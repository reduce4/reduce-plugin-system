// import webContainer from "../oo/webContainer";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import PluginList from "../components/PluginList";

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
          <PluginList plugins={plugins} />
        </Col>
        <Col>
          <Button onClick={() => onClose()}>close</Button>
        </Col>
      </Row>
    </>
  );
};
export default PluginMarket;
