import { useState } from "react";

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  return [open, setOpen];
};
export default useDrawer;
