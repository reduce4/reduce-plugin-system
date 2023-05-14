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
    }
}