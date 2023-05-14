import plugins from './pages/plugins'
export default
  [
    {
      "id": "1",
      "shape": "plugin",
      "x": 290,
      "y": 110,
      "data": {
        "plugin": plugins[1]
      },
      "ports": [
        {
          "id": "1-1",
          "group": "bottom"
        }
      ]
    },
    {
      "id": "2",
      "shape": "plugin",
      "x": 360,
      "y": 300,
      "data": {
        "plugin": plugins[0]
      },
      "ports": [
        {
          "id": "2-1",
          "group": "top"
        }
      ]
    },
    {
      "id": "3",
      "shape": "edge",
      "source": {
        "cell": "2",
        "port": "2-1"
      },
      "target": {
        "cell": "1",
        "port": "1-1"
      },
      "zIndex": 0
    }

  ]
