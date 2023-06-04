import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const PortalApp = ({ containerId, containerDataSet, children }) => {
  const [portalContainer, setPortalContainer] = useState(null);
  useEffect(() => {
    const div = document.createElement("div");
    div.id = containerId;
    Object.keys(containerDataSet).forEach((key) => {
      div.dataset[key] = containerDataSet[key];
    });
    setPortalContainer(div);
  }, []);
  useEffect(() => {
    if (portalContainer == null) {
      return;
    }
    document.body.appendChild(portalContainer);
    return () => document.body.removeChild(portalContainer);
  }, [portalContainer]);
  if (portalContainer == null) {
    return;
  }
  return ReactDOM.createPortal(children, portalContainer);
};
export default PortalApp;
