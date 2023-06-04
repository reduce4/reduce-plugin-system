import { useEffect, useState } from "react";
import Rpm from "./Rpm";
import { Button, Modal, Space } from "antd";
import { MicroApp } from "@micro-web/app";
const DemoPage = () => {
  const [modalOpen, setModalOpen] = useState({
    open: false,
  });
  return (
    <>
      <Space direction="vertical">
        <Button
          onClick={() => setModalOpen({ ...modalOpen, open: true })}
          type="primary"
        >
          打开插件商店
        </Button>
      </Space>
      {/* 让rpm的dom提前渲染，里面的方法，hooks能够执行 */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.45)",
          display: modalOpen.open ? "block" : "none",
        }}
      >
        <div
          style={{
            background: "white",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: "3%",
            borderRadius: "20px",
          }}
        >
          <Rpm
            onClose={() => {
              setModalOpen({
                ...modalOpen,
                open: false,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};
export default DemoPage;
