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
          left: {
            position: "left",
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
          right: {
            position: "right",
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
