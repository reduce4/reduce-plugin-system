import { useState } from "react";
import { useEffect } from "react";

const useConfigPanel = (graph) => {
  const [configPlugin, setConfigPlugin] = useState(null);
  const [modelOpen, setModelOpen] = useState(false);
  useEffect(() => {
    if (!graph) {
      return;
    }
    graph.on("node:click", ({ e, x, y, node, view }) => {
      const choicePlugin = node.store.data.data.plugin;
      setModelOpen(true);
      setConfigPlugin(choicePlugin);
    });
  }, [graph]);
  return [configPlugin, modelOpen, setModelOpen];
};
export default useConfigPanel;
