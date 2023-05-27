import { Avatar, Col, Row, Space } from "antd";
import PluginListItem from "./PluginListItem";

const PluginList = ({ plugins, onDrag }) => {
  if (!plugins) {
    return;
  }
  return (
    <>
      <Row>
        {plugins.map((plugin) => (
          <Col span={24} key={plugin.in_org_id}>
            <PluginListItem onDrag={onDrag} plugin={plugin}></PluginListItem>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default PluginList;
