import {Button, Col, Row} from "antd";
import {DeploymentUnitOutlined} from '@ant-design/icons'

const MenuBar = ({
  onDeploy
}) => {
  return <Row>
    <Col span={22}></Col>
    <Col span={2}>
      <Button onClick={() => onDeploy()} type="primary"><DeploymentUnitOutlined />部署</Button>
    </Col>
  </Row>
}
export default MenuBar;
