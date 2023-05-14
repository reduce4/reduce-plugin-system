import {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Graph} from "@antv/x6";

const useGraph = (containerRef) => {
  const [g, setG] = useState(null)
  if (!containerRef) {
    return [];
  }
  useEffect(() => {
    if (!g) {
      let graph = new Graph({
        container: ReactDOM.findDOMNode(containerRef.current),
        autoResize: true, //画布内容自动缩放
        background: {
          color: "#F2F7FA",
        },
        panning: true, //缩放画布
        mousewheel: true, //拖拽画布
        grid: {
          visible: true,
          type: "doubleMesh",
          args: [
            {
              color: "#eee", // 主网格线颜色
              thickness: 1, // 主网格线宽度
            },
            {
              color: "#ddd", // 次网格线颜色
              thickness: 1, // 次网格线宽度
              factor: 4, // 主次网格线间隔
            },
          ],
        },
      });
      setG(graph);
    }
  }, [containerRef.current])
  return [g]
}
export default useGraph;
