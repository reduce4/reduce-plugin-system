import { Space, Avatar } from "antd";
const PluginListItem = ({ plugin, onDrag }) => {
  return (
    <div
      onClick={() => {}}
      onMouseDown={(e) => {
        e.data = plugin;
        if (onDrag) {
          onDrag(e);
        }
      }}
      draggable
      style={{
        background: "white",
      }}
    >
      <Space justify="space-between" align="center" size="middle">
        <Avatar src={plugin.icon}></Avatar>
        <span>{plugin.name}</span>
      </Space>
    </div>
  );
};
export default PluginListItem;
