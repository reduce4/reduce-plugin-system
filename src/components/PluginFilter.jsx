import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
const items = [
  { key: "1", label: "下载最多" },
  { key: "2", label: "最新发布" },
  { key: "3", label: "最近更新" },
];

const PluginFilter = ({ onRecentUpdate, onRecentPublish, onMostDownload }) => {
  const onClick = ({ key }) => {
    switch (key) {
      case "1":
        onMostDownload();
        break;
      case "2":
        onRecentPublish();
        break;
      case "3":
        onRecentUpdate();
        break;
    }
  };
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <Space>
        最受欢迎
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};
export default PluginFilter;
