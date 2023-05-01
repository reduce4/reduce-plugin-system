import { Col, Divider, Drawer, Row, Space } from "antd";
import { Fragment, useState } from "react";
import PluginFilter from "../components/PluginFilter";
import PluginCard from "../components/PluginCard";
import PluginListItem from "../components/PluginListItem";
import useDrawer from "../hooks/useDrawer";

const rowNum = 4;
/**
 * @mode: card | list
 */
const PluginAbilityGrid = ({ plugins, mode }) => {
  const [drawerOpen, setDrawerOpen] = useDrawer();
  const [openPluginId, setOpenPluginId] = useState(null);
  const openPluginDetail = (plugin_id) => {
    setOpenPluginId(plugin_id);
    setDrawerOpen(true);
  };
  return (
    <>
      <div
        style={{
          maxHeight: "75vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Row>
          <Col span={24} align="right">
            <PluginFilter
              onMostDownload={() => {}}
              onRecentPublish={() => {}}
              onRecentUpdate={() => {}}
            />
          </Col>
        </Row>
        <br />
        {plugins
          .reduce((v, t, i) => {
            if (i % rowNum == 0) {
              v.push([t]);
            } else {
              v[v.length - 1].push(t);
            }
            return v;
          }, [])
          .map((rowData, i) => {
            return mode == "card" ? (
              <Fragment key={i}>
                <Row gutter={16}>
                  {rowData.map((colData, idx) => (
                    <Col
                      key={idx}
                      lg={24 / rowNum}
                      md={24 / (rowNum - 1)}
                      sm={24 / (rowNum - 2)}
                    >
                      <PluginCard
                        plugin={colData}
                        onOpenPluginDetail={(plugin_id) =>
                          openPluginDetail(plugin_id)
                        }
                        onInstall={(plugin_id) => {}}
                      />
                    </Col>
                  ))}
                </Row>
                <br />
              </Fragment>
            ) : (
              <Fragment key={i}>
                <Row gutter={16}>
                  {rowData.map((colData, idx) => (
                    <Col span={24} key={idx}>
                      <PluginListItem
                        plugin={colData}
                        onOpenPluginDetail={(plugin_id) =>
                          openPluginDetail(plugin_id)
                        }
                        onInstall={(plugin_id) => {}}
                      />
                    </Col>
                  ))}
                </Row>
                {i == rowData.length - 1 ? <></> : <Divider />}
                <br />
              </Fragment>
            );
          })}
        <ul>
          <li>
            <h4>能力</h4>
          </li>
          <li>能力列表</li>
          <li>分享</li>
          <li>标记是否废弃</li>
          <li>流转</li>
        </ul>
        <ul>
          <li>
            <h4>开发者</h4>
          </li>
          <li>项目管理</li>
          <li>项目开发</li>
          <li>项目转让</li>
          <li>无代码，AI（语音、文字）生成代码</li>
          <li>分享</li>
          <li>开发和调试 vconsole code-editor</li>
          <li>评论收集</li>
          <li>用户使用时间收集</li>
          <li>todo-list 私有，公开</li>
          <li>插件转让</li>
          <li>版本控制</li>
          <li>流转</li>
        </ul>
      </div>
      <Drawer
        motionDurationMid
        key={openPluginId}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        size="large"
      >
        {openPluginId}
      </Drawer>
    </>
  );
};
export default PluginAbilityGrid;
