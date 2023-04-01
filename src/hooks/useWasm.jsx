import init from "@wasm";
import { useEffect, useMemo, useState } from "react";
const useWasm = () => {
  const [exportFunctions, setExportFunctions] = useState(null);
  useEffect(() => {
    const fdata = async () => {
      const extFuns = await init();
      setExportFunctions(extFuns);
    };
    fdata();
  }, []);

  return useMemo(() => {
    return exportFunctions == null
      ? ["wasm not loaded!"]
      : [null, exportFunctions];
  }, [exportFunctions]);
};
export default useWasm;
