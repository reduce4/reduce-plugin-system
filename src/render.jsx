import React, { useEffect } from "react";

const render = async (schema, mappings) => {
  const schemaObj = JSON.parse(schema);
  const target = mappings.find((t) => t.type === schemaObj.type);
  if (target) {
    const elem = (await import(target.url)).default;
    return (
      <>
        {React.createElement(elem, {
          ...schemaObj,
          mappings,
        })}
      </>
    );
  }
  return <>{}</>;
};
export default render;
