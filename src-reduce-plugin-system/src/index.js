import React from "react";
import ReactDOM from "react-dom";
import { Button, Input } from "antd";
import { A, B } from './b'

class Page extends React.Component {

    render() {
        console.log('a', A, 'b', B)
        fetch("", {}).then(() => { }).catch(() => { })
        return (
            <div className={"test"}>
                <div>Page</div>
                <Button type="primary">click me</Button>
                <Input />
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById("root"));