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
            <h1>One place to manage all your business finances </h1>
            <p>
              Payxmi allows SME and large organizations to manage their finances
              well with a completely secure network. Spend more time for your
              business by managing all transactions from one place. Sign up in
              minutes 
            </p>
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
