import { useEffect, useState } from "react";
import render from "../render";

var Cmp = null;
var body = null;
const Card = ({ body, mappings }) => {
  const [reload, setReload] = useState(0);
  const [select, setSelect] = useState(0);
  useEffect(() => {
    const fdata = async () => {
      if (!body || !body.length) {
        return;
      }
      body = body;
      const elems = await Promise.all(
        body.map((elem) => {
          return render(JSON.stringify(elem), mappings);
        })
      );
      Cmp = elems;
      console.log("Cmp", Cmp);
      console.log("body", body);

      setReload(~reload);
    };
    fdata();
  }, []);
  if (!Cmp) {
    return;
  }
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "400px",
          border: "1px solid black",
          margin: "0 auto",
          transform: "translateY(50%)",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "80px",
            borderBottom: "1px solid black",
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {body.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelect(index)}
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  textAlign: "center",
                  lineHeight: "80px",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  fontSize: "12px",
                }}
              >
                {item.type}
              </div>
            );
          })}
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          {Cmp[select]}
        </div>
      </div>
    </>
  );
};
export default Card;
