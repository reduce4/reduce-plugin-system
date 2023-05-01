import {
  Row,
  Col,
  Avatar,
  Descriptions,
  Space,
  Rate,
  Popover,
  Button,
} from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";
const PluginListItem = ({ plugin, onOpenPluginDetail, onInstall }) => {
  return (
    <>
      <Row
        gutter={16}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => onOpenPluginDetail(plugin.in_org_id)}
      >
        <Col span={2}>
          <Avatar src={plugin.icon} />
        </Col>
        <Col span={14}>
          <Descriptions layout={"horizontal"} title={plugin.name}>
            <Descriptions.Item label="描述">
              {plugin.description}
            </Descriptions.Item>
            <Descriptions.Item label="插件归属组织">
              <Space>
                <Avatar src={plugin.org_icon} />
                {plugin.org_name}
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col
          span={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {plugin.comment.length}个评分
        </Col>
        <Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Popover
            trigger="hover"
            content={
              plugin.comment.reduce((v, t) => v + t.star, 0) /
              plugin.comment.length
            }
          >
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              type="text"
            >
              <Rate
                disabled
                defaultValue={
                  plugin.comment.reduce((v, t) => v + t.star, 0) /
                  plugin.comment.length
                }
              />
            </Button>
          </Popover>
        </Col>
        <Col span={2}>
          {!plugin.installed && (
            <Button
              type="text"
              onClick={(e) => {
                e.stopPropagation();
                onInstall(plugin.in_org_id);
              }}
            >
              <CloudDownloadOutlined />
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};
export default PluginListItem;
