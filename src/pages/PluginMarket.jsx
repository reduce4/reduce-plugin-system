import { Tabs } from "antd";
import PluginSearch from "../components/PluginSearch";
import {
  StarOutlined,
  CodeOutlined,
  ApartmentOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import PluginAbilityGrid from "./PluginAbilityGrid";
import PluginCollaborationGrid from "./PluginCollaborationGrid";
import PluginDataFlowEditor from "./PluginDataFlowEditor";
import PluginDataFlowGrid from "./PluginDataFlowGrid";
import PluginDeveloperGrid from "./PluginDeveloperGrid";

const PluginMarket = ({ plugins }) => {
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
                <StarOutlined />
                最佳实践
              </span>
            ),
            children: <PluginDataFlowGrid />,
          },
          {
            key: "1",
            label: (
              <span>
                <ApiOutlined />
                能力
              </span>
            ),
            children: <PluginAbilityGrid plugins={plugins} mode="list" />,
          },
          {
            key: "2",
            label: (
              <span>
                <ApartmentOutlined />
                部件
              </span>
            ),
            children: <PluginCollaborationGrid />,
          },
          {
            key: "3",
            label: (
              <span>
                <CodeOutlined />
                开发者
              </span>
            ),
            children: <PluginDeveloperGrid />,
          },
        ]}
      />
    </>
  );
};
export default PluginMarket;
