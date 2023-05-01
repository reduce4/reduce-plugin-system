import { useState } from "react";
import Rpm from "./Rpm";
import { Button, Modal } from "antd";
const DemoPage = () => {
  const [modalOpen, setModalOpen] = useState({
    open: true,
  });
  return (
    <>
      <Button
        onClick={() => setModalOpen({ ...modalOpen, open: true })}
        type="primary"
      >
        Open Dialog
      </Button>
      <Modal
        title={null}
        closable={null}
        centered
        open={modalOpen.open}
        width="90%"
        footer={null}
      >
        <Rpm onClose={() => setModalOpen({ ...modalOpen, open: false })} />
      </Modal>
    </>
  );
};
export default DemoPage;
