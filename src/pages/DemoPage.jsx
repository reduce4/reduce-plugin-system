import { useState } from "react";
import Rpm from "./Rpm";
import { Button, Modal, Space } from "antd";
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
        <Button
          type="primary"
          onClick={() => {
            var event = new Event("@reduce/showPlugin");
            event.data = "@reduce/card@0.0.0";
            window.dispatchEvent(event);
          }}
        >
          打开card
        </Button>
      </Space>

      {/* <Modal
        title={null}
        maskClosable={false}
        centered
        keyboard={false}
        open={true}
        width="90%"
        footer={null}
        style={{
          height: 0,
          overflow: "hidden",
        }}
        maskStyle={{
          height: 0,
          overflow: "hidden",
        }}
        bodyStyle={{
          height: 0,
          overflow: "hidden",
        }}
        onCancel={() => {
          setModalOpen(() => ({
            ...modalOpen,
            open: false,
          }));
        }}
      > */}
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
      {/* </Modal> */}
    </>
  );
};
export default DemoPage;
