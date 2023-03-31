import { useEffect } from "react";
import init from "@wasm";

function App() {
  useEffect(() => {
    const fdata = async () => {
      const { greet } = await init();
      console.log("greet res:", greet("Rust and WebAssembly"));
    };
    fdata();
  }, []);

  return <div></div>;
}

export default App;
