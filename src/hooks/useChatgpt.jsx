import { useEffect, useState } from "react";

const useChatgpt = (msg) => {
  const [chatgpt, onChatgpt] = useState(null);

  useEffect(() => {
    if (msg == null) {
      return;
    }
    const fdata = async () => {
      //call wasi
      if (msg == "hello") {
        onChatgpt("hello, I am chatgpt");
      } else if (msg == "say") {
        onChatgpt("say hello");
      } else {
        onChatgpt("sorry");
      }
    };
    setTimeout(() => {
      fdata();
    }, 1000);
  }, [msg]);

  return [chatgpt, onChatgpt];
};
export default useChatgpt;
