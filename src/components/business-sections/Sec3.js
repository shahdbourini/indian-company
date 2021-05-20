import React from 'react';
import { Row, Col } from 'antd';
import './style-business.css';

function Sec4(props) {
  return (
    <>
      <Row style={{ paddingBottom: `100px` }}>
        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 7, offset: 3 }}
          lg={{ span: 10, offset: 3 }}
        >
          <div className="how-text">
            <h1>{props.t('businessSec3.1')} </h1>
            {/* <br />
            <br /> */}
            <p>{props.t('businessSec3.2')}</p>
          </div>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 7, offset: 2 }}
        >
          <div className="how-text">
            <h1>{props.t('businessSec3.3')} </h1>
            <p>
              {props.t('businessSec3.4')}
              <br />
              {props.t('businessSec3.5')} 
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec4;
