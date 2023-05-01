import { createBrowserRouter } from "react-router-dom";
import DemoPage from "./pages/DemoPage";
import Swagger from "./pages/Swagger";
import Layout from "./Layout";
import PluginDetail from "./pages/PluginDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/demo",
        element: <DemoPage />,
      },
      {
        path: "/swaggerui",
        element: <Swagger />,
      },
      {
        path: "/detail/:id",
        element: <PluginDetail />,
      },
    ],
  },
]);
export default router;
