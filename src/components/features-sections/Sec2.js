import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-features.css';
import HomePhone1 from '../../images/HomePhone1.png';

function Sec2(props) {
  return (
    <>
      <Row>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="feature-text2">
            <h1>{props.t('featuresSec2.1')} </h1>
            <p>{props.t('featuresSec2.2')}</p>
            <p>{props.t('featuresSec2.3')}</p>
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 7, offset: 3 }}
        >
          <div>
            <img src={HomePhone1} style={{ width: `100%` }} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec2;
