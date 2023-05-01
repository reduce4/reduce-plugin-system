import { Card, Avatar, Space, Button } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";

const PluginCard = ({ plugin, onOpenPluginDetail, onInstall }) => {
  return (
    <Card
      cover={
        <img
          alt={plugin.description}
          src={plugin.icon}
          onClick={() => onOpenPluginDetail(plugin.in_org_id)}
        />
      }
    >
      <Card.Meta
        avatar={
          <>
            <Space direction="vertical">
              <Avatar src={plugin.org_icon} />
              {plugin.org_name}
            </Space>
          </>
        }
        title={plugin.name}
        description={
          <Space align="baseline">
            {plugin.description}
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
          </Space>
        }
      />
    </Card>
  );
};
export default PluginCard;
