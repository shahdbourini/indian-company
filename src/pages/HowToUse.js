import React from 'react';
import { Row, Col, Button } from 'antd';
import How1 from '../images/How1.png';
import How2 from '../images/How2.png';

function HowToUse(props) {
  return (
    <>
      <Row style={{ background: `#38454c`, paddingBottom: `100px` }}>
        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 7, offset: 3 }}
        >
          <div className="how-text">
            <h3>Business Plan, Lorem ipsum dolor sit amet, consectetur</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam{' '}
            </p>
            <Button>Download App</Button>
          </div>
        </Col>

        <Col
          xs={{ span: 10, offset: 2 }}
          sm={{ span: 10, offset: 2 }}
          md={{ span: 7, offset: 0 }}
          lg={{ span: 6, offset: 2 }}
        >
          <img src={How1} style={{ width: `100%` }} />
        </Col>

        <Col
          xs={{ span: 10, offset: 2 }}
          sm={{ span: 10, offset: 0 }}
          md={{ span: 7, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
        >
          <img src={How2} style={{ width: `100%` }} />
        </Col>
      </Row>
    </>
  );
}

export default HowToUse;
