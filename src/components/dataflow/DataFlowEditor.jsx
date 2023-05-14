import { Layout } from "antd";
import MenuBar from "./MenuBar";
import PluginList from "./PluginList";
import { useState, useEffect, useRef } from "react";
import json from "../../data";
import pluginsData from "../../pages/plugins";
import useGraph from "../../hooks/dataflow/useGraph";
import useGraphCustom from "../../hooks/dataflow/useGraphCustom";
import useGraphLoadData from "../../hooks/dataflow/useGraphLoadData";
import useExport from "../../hooks/dataflow/useExport";
import useDragPlugin from "../../hooks/dataflow/useDragPlugin";

const DataFlowEditor = () => {
  const [data, setData] = useState();
  const [plugins, setPlugins] = useState(pluginsData);
  const containerRef = useRef(null);
  useGraphCustom();
  const [graph] = useGraph(containerRef);
  useGraphLoadData(graph, data);
  const [exportData, setExportData] = useExport(graph);
  const onReExportData = () => {
    setExportData(~exportData);
  };
  const [setDragPlugin] = useDragPlugin(graph);
  const [deploy, setDeploy] = useState(0);
  useEffect(() => {
    console.log("deploy");
  }, [deploy]);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Layout.Header
        style={{
          padding: 0,
          height: "auto",
        }}
      >
        <MenuBar onDeploy={() => setDeploy(~deploy)} />
      </Layout.Header>
      <Layout>
        <Layout.Sider
          style={{
            background: "none",
          }}
        >
          <PluginList onDrag={(e) => setDragPlugin(e)} plugins={plugins} />
        </Layout.Sider>
        <Layout.Content>
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div ref={containerRef}></div>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
export default DataFlowEditor;
