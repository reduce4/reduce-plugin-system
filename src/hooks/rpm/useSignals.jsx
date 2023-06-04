import { useEffect, useState } from "react";

const useSignals = () => {
  const [signals, setSignals] = useState(null);
  const showPluginHandler = ({ data }) => {
    setSignals((value) => ({ ...value, showPlugin: data }));
  };
  //通过事件进行解耦
  useEffect(() => {
    window.addEventListener("@reduce/showPlugin", showPluginHandler);
    return () => {
      window.removeEventListener("@reduce/showPlugin", showPluginHandler);
    };
  }, []);
  return [signals];
};
export default useSignals;
