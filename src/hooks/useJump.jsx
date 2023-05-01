import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useJump = () => {
  const [jumpUrl, setJumpUrl] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (jumpUrl != null) {
      navigate(jumpUrl);
    }
  }, [jumpUrl]);
  return [setJumpUrl];
};
export default useJump;
