import {Button, Col, Row, Popover} from "antd";
import {DeploymentUnitOutlined, UndoOutlined, RedoOutlined} from '@ant-design/icons'


const MenuBar = ({
  canUndo,
  canRedo,
  onDeploy,
  onRedo,
  onUndo,
}) => {
  return <Row>
    <Col span={20}></Col>
    <Col span={1}>
      <Popover
        title="undo"
        trigger="hover"
      >
        <Button type="primary" style={{
          display:!canUndo ? "none" : "inline-block"
        }} onClick={() => onUndo()}>
          <UndoOutlined  />
        </Button>
      </Popover>
    </Col>
    <Col span={1} >
      <Popover
        title="redo"
        trigger="hover"
      >
        <Button type="primary" style={{
          display:!canRedo ? "none" : "inline-block"
        }} onClick={() => onRedo()}>
          <RedoOutlined />
        </Button>
      </Popover>
    </Col>
    <Col span={2}>
      <Button onClick={() => onDeploy()} type="primary"><DeploymentUnitOutlined />部署</Button>
    </Col>
  </Row>
}
export default MenuBar;
