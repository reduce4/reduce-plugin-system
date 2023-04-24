import { useState } from "react";
import Rps from "./Rps";
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
        open={modalOpen.open}
        width="90%"
        footer={null}
      >
        <Rps onClose={() => setModalOpen({ ...modalOpen, open: false })} />
      </Modal>
    </>
  );
};
export default DemoPage;
