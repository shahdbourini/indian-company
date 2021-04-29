import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-features.css';
import HomePhone3 from '../../images/HomePhone3.png';

function Sec4(props) {
  return (
    <>
      <Row>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 8, offset: 4 }}
        >
          <div className="feature-text2">
            <h1>Manage your money </h1>
            <p>
              Payxmi plays an important role in managing money. We create tools
              for monthly and weekly money management thereby sending instant
              notifications.    
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 7, offset: 3 }}
        >
          <div>
            <img src={HomePhone3} style={{ width: `100%` }} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec4;
