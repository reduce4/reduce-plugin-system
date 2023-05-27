import { useEffect, useState } from "react";

const useShowPlugin = (data, plugins) => {
  const [p, setP] = useState(null);
  useEffect(() => {
    if (!data) {
      return;
    }
    if (!data.plugin_id) {
      return;
    }
    let plugin = null;
    plugin = plugins.find((p) => p.in_org_id == data.plugin_id);
    if (!plugin) {
      return;
    }
    setP(plugin);
  }, [data, plugins]);
  return p == null ? null : [data, p];
};
export default useShowPlugin;
