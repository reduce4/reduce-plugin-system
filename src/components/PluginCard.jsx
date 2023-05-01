import { Card, Avatar, Space } from "antd";

const PluginCard = ({ plugin, onOpenPluginDetail }) => {
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
        description={plugin.description}
      />
    </Card>
  );
};
export default PluginCard;
