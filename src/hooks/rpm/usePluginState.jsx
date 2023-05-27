import { useState } from "react";
const usePluginState = ({ plugins }) => {
  const [pluginState, setPluginState] = useState(null);
  return [pluginState, setPluginState];
};
export default usePluginState;
