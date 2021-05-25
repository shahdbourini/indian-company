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
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="how-text">
            <h1>{props.t('businessSec1.1')}</h1>
            <p>{props.t('businessSec1.2')}</p>
          </div>
        </Col>

        <Col
          xs={{ span: 12, offset: 7 }}
          sm={{ span: 9, offset: 8 }}
          md={{ span: 6, offset: 4 }}
          lg={{ span: 6, offset: 4 }}
        >
          <img src={How2} style={{ width: `100%` }} />
        </Col>
      </Row>
    </>
  );
}

export default Sec1;
