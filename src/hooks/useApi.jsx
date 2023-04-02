import { useEffect, useState } from "react";
import toml from "toml";

const useApi = (api) => {
  const [config, setConfig] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fdata = async () => {
      const data = await (await fetch("../../rps.toml")).text();
      const config = toml.parse(data);
      setConfig(config);
    };
    fdata();
  }, []);
  useEffect(() => {
    if (!config) {
      return;
    }
    const fdata = async () => {
      const json = await (
        await fetch(`http://localhost:${config.server.port}/api/${api}`)
      ).json();
      setData(json.data);
    };
    fdata();
  }, [config]);

  return [data];
};
export default useApi;
