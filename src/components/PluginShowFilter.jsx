import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
const items = [
  { key: "1", label: "列表" },
  { key: "2", label: "卡片" },
];

const PluginShowFilter = ({ onList, onCard }) => {
  const onClick = ({ key }) => {
    switch (key) {
      case "1":
        onList();
        break;
      case "2":
        onCard();
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
        展现方式
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};
export default PluginShowFilter;
