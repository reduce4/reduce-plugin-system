import { Tabs } from "antd";
import PluginSearch from "../components/PluginSearch";
import { StarOutlined, ApiOutlined } from "@ant-design/icons";
import PluginAbilityGrid from "./PluginAbilityGrid";
import PluginDataFlowGrid from "./PluginDataFlowGrid";
import usePluginShowFilter from "../hooks/usePluginShowFilter";
const PluginMarket = ({ plugins }) => {
  const [pluginShow, setPluginShow] = usePluginShowFilter("list");

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
            children: (
              <PluginAbilityGrid
                plugins={plugins}
                mode={pluginShow}
                onModeChange={(mode) => setPluginShow(mode)}
              />
            ),
          },
          // {
          //   key: "2",
          //   label: (
          //     <span>
          //       <ApartmentOutlined />
          //       部件
          //     </span>
          //   ),
          //   children: <PluginCollaborationGrid />,
          // },
        ]}
      />
    </>
  );
};
export default PluginMarket;
