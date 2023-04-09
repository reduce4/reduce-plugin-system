import { useEffect, useRef, useState } from "react";
import useChatgpt from "../hooks/useChatGpt";

const Decomposition = () => {
  const input = useRef();
  const [msg, setMsg] = useState();
  const [chatgpt] = useChatgpt(msg);

  return (
    <>
      {chatgpt == null ? "loading" : chatgpt}
      <div className="form">
        <input type="text" ref={input} />
        <input
          type="button"
          value="submit"
          onClick={() => {
            setMsg(input.current.value);
            input.current.value = "";
          }}
        />
        <hr />
      </div>
    </>
  );
};
export default Decomposition;
