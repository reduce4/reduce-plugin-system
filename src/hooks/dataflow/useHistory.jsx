import {useState,useEffect} from 'react'
const useHistory = (graph) => {
  const [canUndo,setCanUndo] = useState(false);
  const [canRedo,setCanRedo] = useState(false);
  useEffect(() => {
    if(!graph){
      return;
    }
    graph.on('history:change', () => {
      setCanUndo(graph.canUndo());
      setCanRedo(graph.canRedo());
    })
  }, [graph])

  return [canUndo, canRedo]
}
export default useHistory;
