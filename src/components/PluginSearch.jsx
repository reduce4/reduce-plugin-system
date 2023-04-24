import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const PluginSearch = ({ placeholder, onSearch }) => {
  return (
    <Input.Search
      placeholder={placeholder}
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  );
};
export default PluginSearch;
