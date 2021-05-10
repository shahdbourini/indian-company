import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-features.css';
import features1 from '../../images/features1.png';

function Sec1(props) {
  return (
    <div className="features-image">
      <Row>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 13, offset: 6 }}
          lg={{ span: 9, offset: 8 }}
        >
          <div className="feature1-title">
            <h4 style={{ textAlign: `left` }}>
              Planning to open your account in payxmi? Here’s everything you
              need to know. 
            </h4>
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 7, offset: 3 }}
        >
          <div>
            <img src={features1} style={{ width: `100%` }} />
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="feature-text1">
            <h1>Easy Sign-up </h1>
            <p>
              payxmi has brought about one of the easiest solutions for
              businesses and individuals. We help you to sign-up into the app
              for a hassle-free procedure. You don’t need to submit any extra
              documents for the sign-up process. All you need to do is confirm
              the email ID and we do not ask you for anything more. 
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Sec1;
