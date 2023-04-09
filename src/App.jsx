import { useEffect, useState } from "react";
import useWasm from "./hooks/useWasm";
import render from "./render";
import Loading from "./components/Loading";
import useComponents from "./hooks/useComponents";

const schema = `
{
  "type": "card",
  "body": [
          {
              "id": "@reduce/decomposition",
              "type": "decomposition",
              "use": [
                  "chatgpt",
                  "reduce"
              ]
          },
          {
              "id": "@reduce/abstraction",
              "type": "abstraction",
              "use": [
                  "chatgpt",
                  "algorithm-kind",
                  "reduce"
              ]
          },
          {
              "id": "@reduce/algorithm",
              "type": "algorithm",
              "use": [
                  "algorithm-code"
              ]
          },
          {
              "id": "@reduce/pattern-recognition",
              "type": "pattern-recognition"
          }
  ]
}
`;
var Cmp = null;
function App() {
  const [reload, setReload] = useState(0);
  const [cmpMappings] = useComponents();

  useEffect(() => {
    if (!cmpMappings) {
      return;
    }
    render(schema, cmpMappings).then((cmp) => {
      Cmp = cmp;
      setReload(~reload);
    });
  }, [cmpMappings]);

  if (!Cmp) {
    return;
  }
  return <>{Cmp}</>;
}

function wasmDemo() {
  const [err, funs] = useWasm({
    hello: () => {
      console.log("hello, I am called");
    },
  });
  const [arr, setArr] = useState(null);
  if (err) {
    return;
  }
  return (
    <div>
      <button
        onClick={() => {
          funs.put();
        }}
      >
        put
      </button>
      <hr />
      <button
        onClick={() => {
          setArr(funs.get());
        }}
      >
        check
      </button>
      <div>{arr}</div>
    </div>
  );
}

export default App;
