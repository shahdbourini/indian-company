import React from 'react';
import { Row, Col } from 'antd';
import map from '../../images/map.png';
import apple from '../../images/apple.png';
import android from '../../images/android.png';

import './style-about.css';

function Sec3(props) {
  return (
    <>
      <Row
        style={{
          marginTop: `150px`,
          paddingBottom: `100px`,
        }}
      >
        <Col
          xs={{ span: 20, offset: 3 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 12, offset: 7 }}
          lg={{ span: 9, offset: 8 }}
        >
          <div className="about-text3">
            <h4>Where can you use our app</h4>
            <p>
              Download our Payxmi for your respective solutions and account. You
              can download the app for iOS and Android platforms or from the
              official website.  
            </p>
            <img src={map} alt="image" style={{ width: `100%` }} />

            <div style={{ paddingTop: `41px` }}>
              <img src={apple} style={{ width: `29%`, marginLeft: `10% ` }} />
              <img src={android} style={{ width: `29%`, marginLeft: `10%` }} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec3;
