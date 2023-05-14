import {useEffect, useState} from "react";

const useExport = (graph) => {
  const [reload, setReload] = useState(0);
  useEffect(() => {
    if (!graph) {
      return;
    }
    const json = graph.toJSON();
    console.log('json', json)
  }, [graph, reload])
  return [reload, setReload]
}
export default useExport;
