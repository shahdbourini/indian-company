import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-features.css';
import features1 from '../../images/features1.png';

function Sec1(props) {
  return (
    <div className="features-image">
      <Row>
        <Col
          xs={{ span: 25, offset: 2, order: 1 }}
          sm={{ span: 25, offset: 2, order: 1 }}
          md={{ span: 13, offset: 6, order: 1 }}
          lg={{ span: 9, offset: 8, order: 1 }}
        >
          <div className="feature1-title">
            <h4 style={{ textAlign: `left` }}>{props.t('featuresSec1.1')}</h4>
          </div>
        </Col>

        <Col
          xs={{ span: 12, offset: 7, order: 2 }}
          sm={{ span: 9, offset: 8, order: 2 }}
          md={{ span: 6, offset: 2, order: 1 }}
          lg={{ span: 6, offset: 3, order: 1 }}
        >
          <div>
            <img src={features1} style={{ width: `100%` }} />
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2, order: 1 }}
          sm={{ span: 25, offset: 2, order: 1 }}
          md={{ span: 10, offset: 2, order: 2 }}
          lg={{ span: 9, offset: 1, order: 2 }}
        >
          <div className="feature-text1">
            <h1>{props.t('featuresSec1.2')} </h1>
            <p>{props.t('featuresSec1.3')}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Sec1;
