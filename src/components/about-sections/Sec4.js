import React from 'react';
import { Row, Col } from 'antd';
import aboutAsset from '../../images/aboutAsset.png';
import setting from '../../images/setting1.png';
import './style-about.css';

function Sec3(props) {
  return (
    <>
      <Row
        style={{
          marginTop: `100px`,
          paddingBottom: `100px`,
          backgroundColor: `#e3e3e3`,
        }}
      >
        <Col
          xs={{ span: 21, offset: 3 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 9, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
        >
          <img src={aboutAsset} alt="phone" style={{ width: `100%` }} />
        </Col>
        <Col
          xs={{ span: 17, offset: 5 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 8, offset: 3 }}
          lg={{ span: 7, offset: 3 }}
          className="setting-icons"
        >
          <img src={setting} className="App-logo setting1" alt="setting" />
          <img src={setting} className="App-logo setting2" alt="setting-icon" />
        </Col>
      </Row>
    </>
  );
}

export default Sec3;
