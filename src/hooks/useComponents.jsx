import { useEffect, useState } from "react";
import useApi from "./useApi";

const useComponents = () => {
  const [cmps, setCmps] = useState(null);
  const [components] = useApi("components");
  useEffect(() => {
    if (!components) {
      return;
    }
    setCmps(components);
  }, [components]);
  return [cmps];
};
export default useComponents;
