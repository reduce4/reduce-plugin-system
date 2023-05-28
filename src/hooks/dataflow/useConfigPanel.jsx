import { useState } from "react";
import { useEffect } from "react";

const useConfigPanel = (graph) => {
  const [configPlugin, setConfigPlugin] = useState(null);
  const [modelOpen, setModelOpen] = useState(false);
  const [selectNode, setSelectNode] = useState(null);
  useEffect(() => {
    if (!graph) {
      return;
    }
    //节点点击事件
    graph.on("node:click", ({ e, x, y, node, view }) => {
      const choicePlugin = node.store.data.data.plugin;
      setModelOpen(true);
      setConfigPlugin(choicePlugin);
      setSelectNode(node);
    });
  }, [graph]);
  return [configPlugin, modelOpen, setModelOpen, selectNode, setSelectNode];
};
export default useConfigPanel;
