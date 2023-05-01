import { Col, Divider, Row, Space } from "antd";
import { Fragment } from "react";
import PluginFilter from "../components/PluginFilter";
import PluginCard from "../components/PluginCard";
import PluginListItem from "../components/PluginListItem";
import useJump from "../hooks/useJump";
const rowNum = 4;
/**
 * @mode: card | list
 */
const PluginAbilityGrid = ({ plugins, mode }) => {
  const [setJump] = useJump();
  return (
    <div
      style={{
        maxHeight: "75vh",
        overflow: "auto",
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
                        setJump(`/detail/${plugin_id}`)
                      }
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
                        setJump(`/detail/${plugin_id}`)
                      }
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
        <li>能力列表</li>
        <li>分享</li>
        <li>标记是否废弃</li>
        <li>流转</li>
      </ul>
    </div>
  );
};
export default PluginAbilityGrid;
