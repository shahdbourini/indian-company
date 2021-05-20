import React from 'react';
import { Row, Col, Button } from 'antd';
import How1 from '../../images/How1.png';
import './style-business.css';

function Sec2(props) {
  return (
    <>
      <Row style={{ paddingBottom: `100px` }}>
        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 11, offset: 3 }}
          lg={{ span: 10, offset: 3 }}
        >
          <div className="how-text">
            <h1>{props.t('businessSec2.1')} </h1>
            <p>{props.t('businessSec2.2')}</p>
          </div>
        </Col>

        <Col
          xs={{ span: 17, offset: 3 }}
          sm={{ span: 17, offset: 3 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 2 }}
        >
          <img src={How1} style={{ width: `100%` }} />
        </Col>
      </Row>
    </>
  );
}

export default Sec2;
