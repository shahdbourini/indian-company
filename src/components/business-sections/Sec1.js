import React from 'react';
import { Row, Col, Button } from 'antd';
import How1 from '../../images/How1.png';
import How2 from '../../images/How2.png';
import './style-business.css';

function Sec1(props) {
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
            <h1>{props.t('businessSec1.1')}</h1>
            <p>{props.t('businessSec1.2')}</p>
          </div>
        </Col>

        <Col
          xs={{ span: 17, offset: 3 }}
          sm={{ span: 17, offset: 3 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 2 }}
        >
          <img src={How2} style={{ width: `100%` }} />
        </Col>
      </Row>
    </>
  );
}

export default Sec1;
