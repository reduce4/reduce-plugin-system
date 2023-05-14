export default {
    "@reduce/chatgpt@0.0.0": {
        "hooks": {
            "doType": {
                "input": "doType",
                "inputInitValue": "null",
                "payloadType": "string",
                "hooksMeans": "设置打字的内容"
            },
            "doChat": {
                "input": "doChat",
                "output": "doChatReturn",
                "inputInitValue": "null",
                "outputInitValue": "[]",
                "payloadType": "string",
                "hooksMeans": "想chatgpt说一句话",
                "hooksReturnMeans": "和chatgpt聊天的内容"
            }
        },
        "config": {
            "token": ""
        }
    },
    "@reduce/pdf@0.0.0": {
        "hooks": {
            "doSelect": {
                "input": "doSelect",
                "inputInitValue": "null",
                "payloadType": "string",
                "hooksMeans": "设置选中的内容还有选中的坐标"
            },
            "doFloatShow": {
                "input": "doFloatShow",
                "inputInitValue": "null",
                "payloadType": "string",
                "hooksMeans": "在(x,y)显示悬浮按钮组"
            },
            "doFloatButtonClick": {
                "input": "doFloatButtonClick",
                "inputInitValue": "0",
                "payloadType": "number",
                "hooksMeans": "当浮动按钮点击时"
            }
        }
    }
}