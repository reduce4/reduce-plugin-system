import { useState } from "react";

const usePluginShowFilter = (mode) => {
  const [pluginShow, setPluginShow] = useState(mode);
  return [pluginShow, setPluginShow];
};
export default usePluginShowFilter;
