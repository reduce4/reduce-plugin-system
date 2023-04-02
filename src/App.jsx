import { useEffect, useState } from "react";
import useWasm from "./hooks/useWasm";

function App() {
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
