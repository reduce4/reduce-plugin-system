import { Row, Col, Space, Tabs } from "antd";
import PluginSearch from "../components/PluginSearch";
import {
  StarOutlined,
  CodeOutlined,
  NodeIndexOutlined,
  SmallDashOutlined,
} from "@ant-design/icons";
const PluginMarket = () => {
  return (
    <>
      <Tabs
        tabBarExtraContent={{
          left: (
            <PluginSearch
              placeholder={"搜索插件应用"}
              onSearch={() => {
                console.log("search");
              }}
            />
          ),
        }}
        onChange={() => {}}
        type="line"
        tabPosition={"left"}
        items={[
          {
            key: "0",
            label: (
              <span>
                <SmallDashOutlined />
                原子能力
              </span>
            ),
            children: "demo",
          },
          {
            key: "1",
            label: (
              <span>
                <StarOutlined />
                官方推荐
              </span>
            ),
            children: "demo",
          },
          {
            key: "2",
            label: (
              <span>
                <NodeIndexOutlined />
                工作流
              </span>
            ),
            children: "demo",
          },
          {
            key: "3",
            label: (
              <span>
                <CodeOutlined />
                开发者
              </span>
            ),
            children: "demo",
          },
        ]}
      />
    </>
  );
};
export default PluginMarket;
