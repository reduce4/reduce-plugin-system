import { MicroApp } from "@micro-web/app";
import { useEffect } from "react";

const useShowPlugin = (plugin_id, plugins) => {
  useEffect(() => {
    if (!plugin_id) {
      return;
    }
    let plugin = null;
    plugin = plugins.find((p) => p.in_org_id == plugin_id);
    if (!plugin) {
      return;
    }

    <MicroApp entry={plugin.component_url} />;
  }, [plugin_id, plugins]);
};
export default useShowPlugin;
