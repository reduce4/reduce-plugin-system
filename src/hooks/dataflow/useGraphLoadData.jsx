import {useEffect} from 'react'
const formatGraphDataToCells = (data, graph) => {
  const res = [];
  for (var item of data) {
    if (['plugin'].includes(item.shape)) {
      //node
      res.push(graph.createNode(item));
    } else {
      //edge
      res.push(graph.createEdge(item));
    }
  }
  return res;
}
const useGraphLoadData = (graph, data) => {
  useEffect(() => {
    if (!graph || !data) {
      return;
    }
    const cells = formatGraphDataToCells(data, graph);
    graph.resetCells(cells)
  }, [graph, data]);
}
export default useGraphLoadData
