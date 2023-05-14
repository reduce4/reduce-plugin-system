import { MicroApp } from "@micro-web/app";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const useShowPlugin = (data, plugins) => {
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
    const div = document.createElement("div");
    div.id = plugin.in_org_id;
    ReactDOM.render(
      <MicroApp
        entry={plugin.component_url}
        plugin={plugin}
        reload={data.reload}
        onClose={() => {
          div.remove();
        }}
      />,
      div
    );
    var prevDiv = document.getElementById(plugin.in_org_id);
    if (prevDiv) {
      prevDiv.remove();
    }
    document.body.appendChild(div);
  }, [data, plugins]);
};
export default useShowPlugin;
