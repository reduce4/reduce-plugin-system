import {useEffect, useState} from "react";
import {Dnd} from "@antv/x6-plugin-dnd";

const useDragPlugin = (graph) => {
  const [dragPlugin, setDragPlugin] = useState(null)
  let dnd;
  useEffect(() => {
    if (!graph) {
      return;
    }
    if (!dnd) {
      dnd = new Dnd({
        target: graph,
        getDragNode: (node) => node.clone({keepId: true}),
        getDropNode: (node) => node.clone({keepId: true}),
      });
    }
    if (!dragPlugin) {
      return;
    }
    const node = graph.createNode({
      shape: "plugin",
      width: 180,
      height: 36,
      ports: [
        {
          "id": "1",
          "group": "left"
        },
        {
          "id": "3",
          "group": "right"
        }
      ]
    });
    node.data = {
      plugin: dragPlugin.data
    };
    dnd.start(node, dragPlugin.nativeEvent);
  }, [graph, dragPlugin])
  return [setDragPlugin]
}
export default useDragPlugin;
