import { Graph } from "@antv/x6";
import Plugin from "../../components/dataflow/Plugin";
import PluginListItem from "../../components/dataflow/PluginListItem";
import { register } from "@antv/x6-react-shape";

const useGraphCustom = () => {
  register(
    {
      shape: "plugin",
      inherit: "react-shape",
      width: 180,
      height: 36,
      component: ({ node }) => {
        return <PluginListItem plugin={node.data.plugin} />;
      },
      ports: {
        groups: {
          top: {
            position: "top",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#C2C8D5",
                strokeWidth: 1,
                fill: "#fff",
              },
            },
          },
          bottom: {
            position: "bottom",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#C2C8D5",
                strokeWidth: 1,
                fill: "#fff",
              },
            },
          },
        },
      },
    },
    true
  );
};
export default useGraphCustom;
