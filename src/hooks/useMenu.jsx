import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const configs = [
  {
    path: "/",
  },
  {
    path: "/demo",
  },
  {
    path: "/swaggerui",
  },
];
const useMenu = () => {
  const navigate = useNavigate();
  const [selectIndex, setSelectIndex] = useState(0);
  useEffect(() => {
    navigate(configs[selectIndex].path);
  }, [selectIndex]);
  return [setSelectIndex];
};
export default useMenu;
