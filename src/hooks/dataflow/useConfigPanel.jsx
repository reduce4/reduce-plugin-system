import { useState } from "react";
import { useEffect } from "react";
var cNode = null;
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
      cNode = node;
    });
  }, [graph]);
  //模态框关闭，更新节点状态
  useEffect(() => {
    if (modelOpen == true && selectNode) {
      // setSelectHook(selectNode.selectHook);
    }
    if (modelOpen == false && selectNode) {
      const data = selectNode.store.data;
      cNode.setData({
        ...data,
      });
    }
  }, [modelOpen, selectNode]);
  return [configPlugin, modelOpen, setModelOpen, selectNode, setSelectNode];
};
export default useConfigPanel;
