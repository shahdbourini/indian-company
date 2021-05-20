import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-features.css';
import HomePhone2 from '../../images/HomePhone2.png';

function Sec3(props) {
  return (
    <>
      <Row>
        <Col
          xs={{ span: 25, offset: 2, order: 2 }}
          sm={{ span: 25, offset: 2, order: 2 }}
          md={{ span: 9, offset: 2, order: 1 }}
          lg={{ span: 7, offset: 3, order: 1 }}
        >
          <div>
            <img src={HomePhone2} style={{ width: `100%` }} />
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2, order: 1 }}
          sm={{ span: 25, offset: 2, order: 1 }}
          md={{ span: 9, offset: 2, order: 2 }}
          lg={{ span: 9, offset: 1, order: 2 }}
        >
          <div className="feature-text3">
            <h1>{props.t('featuresSec3.1')} </h1>
            <p>{props.t('featuresSec3.2')}   </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec3;
