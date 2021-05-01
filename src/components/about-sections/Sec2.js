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
          marginTop: `100px`,
        }}
      >
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 16, offset: 3 }}
        >
          <p>
            We at Payxmi follow the procedure of innovation and collaboration.
            With our innovative ideas, we have partnered or collaborated with
            many with the aim to ease businesses among people. Our constant
            approach towards easy business solutions have played an important
            role in enhancing the individual and business solutions. Hence, we
            are dedicated to offer the best services to our customers.  
          </p>
        </Col>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 9, offset: 3 }}
          lg={{ span: 8, offset: 3 }}
        >
          <div className="about-sec2">
            <h3>Constant Solution </h3>
            <p>
              Payxmi is working on innovative goals to bring better solutions
              for businesses and individuals. Dedicated to offering high-quality
              and custom service to everyone, it can be one of the best constant
              solutions that you can implement.  
            </p>
          </div>
        </Col>
        <Col
          xs={{ span: 19, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 7, offset: 2 }}
          lg={{ span: 7, offset: 2 }}
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
