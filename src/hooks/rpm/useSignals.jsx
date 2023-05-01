import { useEffect, useState } from "react";

const useSignals = () => {
  const [signals, setSignals] = useState(null);
  const showPluginHandler = ({ data }) => {
    console.log("adsfa");
    setSignals((value) => ({ ...value, showPlugin: data }));
  };
  useEffect(() => {
    window.addEventListener("@reduce/showPlugin", showPluginHandler);
    return () => {
      window.removeEventListener("@reduce/showPlugin", showPluginHandler);
    };
  }, []);
  return [signals];
};
export default useSignals;
