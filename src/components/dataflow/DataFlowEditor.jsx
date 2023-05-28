import { Drawer, Layout } from "antd";
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
import useHistory from "../../hooks/dataflow/useHistory";
import useConfigPanel from "../../hooks/dataflow/useConfigPanel";
import ConfigPanel from "./ConfigPanel";

const DataFlowEditor = () => {
  const [data, setData] = useState(json);
  const [plugins, setPlugins] = useState(pluginsData);
  const containerRef = useRef(null);
  //注册graph自定义节点
  useGraphCustom();
  const [graph] = useGraph(containerRef);
  //加载数据到graph
  useGraphLoadData(graph, data);
  //导出json数据
  const [exportData, setExportData] = useExport(graph);
  const onReExportData = () => {
    setExportData(~exportData);
  };
  //支持拖拽
  const [setDragPlugin] = useDragPlugin(graph);
  //节点编辑器支持历史记录
  const [canUndo, canRedo] = useHistory(graph);
  //部署按钮
  const [deploy, setDeploy] = useState(0);
  //节点配置面板
  const [
    configPlugin,
    panelOpen,
    setPanelOpen,
    selectHook,
    setSelectHook,
    selectNode,
  ] = useConfigPanel(graph);
  useEffect(() => {
    console.log("deploy");
    onReExportData();
  }, [deploy]);
  //模态框关闭，更新节点状态
  useEffect(() => {
    if (panelOpen == true && selectNode != null) {
      setSelectHook(selectNode.selectHook);
    }
    if (panelOpen == false && selectNode) {
      const data = selectNode.getData();
      selectNode.setData({
        ...data,
        selectHook: selectHook,
      });
    }
  }, [panelOpen, selectNode]);

  return (
    <>
      <Layout
        style={{
          height: "calc(80vh - 46px)",
        }}
      >
        <Layout.Header
          style={{
            padding: 0,
            height: "auto",
          }}
        >
          <MenuBar
            canUndo={canUndo}
            canRedo={canRedo}
            onDeploy={() => setDeploy(~deploy)}
            onUndo={() => graph.undo()}
            onRedo={() => graph.redo()}
          />
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
        {configPlugin && (
          <Drawer
            key={panelOpen}
            title={configPlugin.name}
            closable={false}
            onClose={() => setPanelOpen(false)}
            height="calc(80vh)"
            open={panelOpen}
          >
            <ConfigPanel
              selectHook={selectHook}
              setSelectHook={setSelectHook}
              plugin={configPlugin}
            />
          </Drawer>
        )}
      </Layout>
    </>
  );
};
export default DataFlowEditor;
