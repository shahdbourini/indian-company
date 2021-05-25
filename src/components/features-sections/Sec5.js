import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-features.css';
import secure from '../../images/secure.png';

function Sec5(props) {
  return (
    <>
      <Row style={{ paddingBottom: `120px` }}>
        <Col
          xs={{ span: 12, offset: 7, order: 2 }}
          sm={{ span: 9, offset: 8, order: 2 }}
          md={{ span: 6, offset: 2, order: 1 }}
          lg={{ span: 6, offset: 3, order: 1 }}
        >
          <div>
            <img src={secure} style={{ width: `100%` }} />
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2, order: 1 }}
          sm={{ span: 25, offset: 2, order: 1 }}
          md={{ span: 10, offset: 2, order: 2 }}
          lg={{ span: 9, offset: 1, order: 2 }}
        >
          <div className="feature-text5">
            <h1>{props.t('featuresSec5.1')}  </h1>
            <p>{props.t('featuresSec5.2')}</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec5;
