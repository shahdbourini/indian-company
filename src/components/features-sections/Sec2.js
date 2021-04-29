import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-features.css';
import HomePhone1 from '../../images/HomePhone1.png';

function Sec2(props) {
  return (
    <>
      <Row>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="feature-text2">
            <h1>Instant Ready-to-use wallet   </h1>
            <p>
              Within minutes of opening the account with Payxmi, get the
              multiple option to receive an online/contactless payments, helping
              you be on the go and while you experience easy transactions. 
            </p>
            <p>
              Don’t have sufficient money in your account? Top-up
              your Payxmi wallet instantly by adding money from your respective
              bank account or any cards.   
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 7, offset: 3 }}
        >
          <div>
            <img src={HomePhone1} style={{ width: `100%` }} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec2;
