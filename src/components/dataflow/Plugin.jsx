import {Button} from 'antd'
const Plugin = ({node}) => {
  // const model = node.modal()
  console.log('model', node.data)
  return <>
    <div>
      I am plugin
      <Button onClick={() => alert('welcome use antd!!!')}>click me</Button>
    </div>
  </>
}
export default Plugin;
