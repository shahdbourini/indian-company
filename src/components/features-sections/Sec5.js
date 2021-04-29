import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-features.css';
import secure from '../../images/secure.png';

function Sec5(props) {
  return (
    <>
      <Row style={{ paddingBottom: `120px` }}>
        <Col
          xs={{ span: 15, offset: 5, order: 2 }}
          sm={{ span: 25, offset: 2, order: 2 }}
          md={{ span: 7, offset: 3, order: 1 }}
          lg={{ span: 5, offset: 4, order: 1 }}
        >
          <div>
            <img src={secure} style={{ width: `100%` }} />
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2, order: 1 }}
          sm={{ span: 25, offset: 2, order: 1 }}
          md={{ span: 10, offset: 2, order: 2 }}
          lg={{ span: 9, offset: 2, order: 2 }}
        >
          <div className="feature-text5">
            <h1>Secure  </h1>
            <p>
              We follow state-of-art money management and protection to ensure
              security of payments. We help you pay and manage your money in an
              easy and better way.  
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec5;
