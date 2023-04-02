import { useEffect, useState } from "react";
import render from "../render";

var Cmp = null;
const Card = ({ body, mappings }) => {
  const [reload, setReload] = useState(0);
  useEffect(() => {
    const fdata = async () => {
      if (!body || !body.length) {
        return;
      }
      console.log("body", body);
      const elems = await Promise.all(
        body.map((elem) => {
          return render(JSON.stringify(elem), mappings);
        })
      );
      Cmp = elems;
      setReload(~reload);
    };
    fdata();
  }, []);
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "400px",
          border: "1px solid black",
        }}
      >
        {Cmp}
      </div>
    </>
  );
};
export default Card;
