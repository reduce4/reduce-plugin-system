import plugins from './pages/plugins'
/*
* reduce builtin process.
* format: @reduce/process_id
* */
export default
  [
    {
      "id": "@reduce/1",
      "shape": "plugin",
      "x": 90,
      "y": 110,
      "data": {
        "plugin": plugins.find(({ in_org_id }) => in_org_id == '@reduce/pdf@0.0.0'),
        "selectHook": "doFloatButtonClick"
      },
      "ports": [
        {
          "id": "3",
          "group": "right"
        }
      ]
    },
    {
      "id": "@reduce/2",
      "shape": "plugin",
      "x": 390,
      "y": 110,
      "data": {
        "plugin": plugins.find(({ in_org_id }) => in_org_id == '@reduce/card@0.0.0'),
        "selectHook": "doMove"
      },
      "ports": [
        {
          "id": "1",
          "group": "left"
        }
      ]
    },
    {
      "id": "@reduce/3",
      "shape": "edge",
      "source": {
        "cell": "@reduce/1",
        "port": "1"
      },
      "target": {
        "cell": "@reduce/2",
        "port": "1"
      },
      "zIndex": 0
    }

  ]
