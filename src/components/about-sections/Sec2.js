import React from 'react';
import { Row, Col } from 'antd';
import aboutSec3 from '../../images/aboutSec3.png';
import aboutAsset from '../../images/aboutAsset.png';
import setting from '../../images/setting1.png';
import './style-about.css';

function Sec2(props) {
  return (
    <>
      <Row
        style={{
          marginTop: `0px`,
        }}
      >
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 13, offset: 6 }}
        >
          <p className="paragraph-style">{props.t('aboutSec2.1')}</p>
        </Col>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="about-sec2">
            <h1 style={{ fontSize: 'xxx-large', textAlign: `left` }}>
              {props.t('aboutSec2.2')}
            </h1>
            <p className="paragraph-style">{props.t('aboutSec2.3')} </p>
          </div>
        </Col>
        <Col
          xs={{ span: 12, offset: 7 }}
          sm={{ span: 9, offset: 8 }}
          md={{ span: 6, offset: 4 }}
          lg={{ span: 6, offset: 4 }}
        >
          <div style={{ position: `relative`, left: `0`, top: `0` }}>
            <img src={aboutAsset} style={{ width: `100%` }} />
            <img src={setting} className="App-logo setting1" alt="setting" />
            <img
              src={setting}
              className="App-logo setting2"
              alt="setting-icon"
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec2;
