import { Space, Avatar, Row, Col } from "antd";
const PluginListItem = ({ plugin, onDrag, selectHook }) => {
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
      <Row gutter={16} align={"middle"}>
        <Col span={4}>
          <Avatar src={plugin.icon}></Avatar>
        </Col>
        <Col span={20}>
          <p style={{ lineHeight: 0 }}>
            <span
              style={{
                fontWeight: 500,
              }}
            >
              {plugin.name}
            </span>
          </p>
          {selectHook && (
            <p style={{ lineHeight: 0 }}>
              <span
                style={{
                  fontWeight: 500,
                }}
              >
                触发:
              </span>
              {selectHook}
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
};
export default PluginListItem;
