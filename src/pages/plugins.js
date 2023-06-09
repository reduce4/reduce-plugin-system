export default
  [
    {
      in_org_id: "@reduce/code-editor@0.0.0",
      name: "code-editor",
      org_name: "reduce",
      author_name: "happysmile",
      installed: false,
      profile_page: "https://github.com/happysmile12321",
      national_name: ["China"],
      repo_link: "https://github.com/reduce4/code-editor",
      version: "0.0.0",
      description: "code editor for rps",
      pay_qrcode: "",
      icon: "/plugin.png",
      org_icon: "/reduce_org.png",
      component_url: "http://127.0.0.1:5174/src/main.jsx",
      comment: [
        {
          name: "happysmile",
          account: "@reduce/happysmile",
          content: "update too slow!",
          star: 4,
        },
        {
          name: "ken",
          account: "@ken/ken",
          content: "need to add css support!",
          star: 5,
        },
      ],
      usage: [
        {
          open_time: "",
          close_time: "",
          duration: 0.0,
          command_history: [],
        },
      ],
      roadmap: {
        content: {
          "2023-04-24": "coding",
          "2023-04-25": "v0.0.0 code complete",
        },
      },
    },
    {
      in_org_id: "@reduce/card@0.0.0",
      name: "card",
      org_name: "reduce",
      author_name: "happysmile",
      installed: true,
      profile_page: "https://github.com/happysmile12321",
      national_name: ["China"],
      repo_link: "https://github.com/reduce4/card",
      version: "0.0.0",
      description: "show ability",
      pay_qrcode: "",
      icon: "/plugin.png",
      org_icon: "/reduce_org.png",
      component_url: "http://127.0.0.1:6002/card/src/main.jsx",
      comment: [
        {
          name: "happysmile",
          account: "@reduce/happysmile",
          content: "very nice",
          star: 4,
        },
        {
          name: "ken",
          account: "@ken/ken",
          content: "need to add css support!",
          star: 5,
        },
      ],
      usage: [
        {
          open_time: "",
          close_time: "",
          duration: 0.0,
          command_history: [],
        },
      ],
      roadmap: {
        content: {
          "2023-05-02": "coding",
          "2023-05-03": "v0.0.0 complete",
        },
      },
      dsl: {
        "hooks": {
          "doShow": {
            "input": "doShow",
            "inputInitValue": "'Complete'",
            "payloadType": "string",
            "hooksMeans": "改变card能力的展现方式"
          },
          "doMove": {
            "input": "doMove",
            "inputInitValue": "[0,0]",
            "payloadType": "array",
            "hooksMeans": "在(x,y)处显示"
          }
        }
      }
    },
    {
      in_org_id: "@reduce/chatgpt@0.0.0",
      name: "chatgpt",
      org_name: "reduce",
      author_name: "happysmile",
      installed: true,
      profile_page: "https://github.com/happysmile12321",
      national_name: ["China"],
      repo_link: "https://github.com/reduce4/chatgpt",
      version: "0.0.0",
      description: "chatgpt robot for ask",
      pay_qrcode: "",
      icon: "/plugin.png",
      org_icon: "/reduce_org.png",
      component_url: "http://127.0.0.1:5174/src/main.jsx",
      comment: [
        {
          name: "happysmile",
          account: "@reduce/happysmile",
          content: "wonderful AI tools",
          star: 5,
        },
        {
          name: "ken",
          account: "@ken/ken",
          content: "very useful tools!",
          star: 5,
        },
      ],
      usage: [
        {
          open_time: "",
          close_time: "",
          duration: 0.0,
          command_history: [],
        },
      ],
      roadmap: {
        content: {
          "2023-05-14": "done",
        },
      },
      dsl: {
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
    },
    {
      in_org_id: "@reduce/pdf@0.0.0",
      name: "pdf",
      org_name: "reduce",
      author_name: "happysmile",
      installed: true,
      profile_page: "https://github.com/happysmile12321",
      national_name: ["China"],
      repo_link: "https://github.com/reduce4/pdf",
      version: "0.0.0",
      description: "pdf plugin for control pdf",
      pay_qrcode: "",
      icon: "/plugin.png",
      org_icon: "/reduce_org.png",
      component_url: "http://127.0.0.1:6001/pdf/src/main.jsx",
      comment: [
        {
          name: "happysmile",
          account: "@reduce/happysmile",
          content: "very nice pdf tools!",
          star: 5,
        },
        {
          name: "ken",
          account: "@ken/ken",
          content: "speed, simple, useful tools!",
          star: 5,
        },
      ],
      usage: [
        {
          open_time: "",
          close_time: "",
          duration: 0.0,
          command_history: [],
        },
      ],
      roadmap: {
        content: {
          "2023-05-14": "done",
        },
      },
      dsl: {
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
  ]
