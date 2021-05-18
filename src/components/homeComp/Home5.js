import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-Home.css';
import pic5 from '../../images/pic5.png';
import logoPic5 from '../../images/logPic5.png';

function Home5(props) {
  return (
    <>
      <Row style={{ paddingBottom: `6%` }}>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="Home5-text">
            <h1>
              Get Points on every use
              <br />- Discount and Cashback
            </h1>
            <p>
              With Payxmi App on your phone, enjoy over shopping over multiples
              stores and earn many points and get big cashbacks and discounts in
              the process!
            </p>
            <Button>Learn More</Button>
          </div>
        </Col>

        <Col
          xs={{ span: 12, offset: 7 }}
          sm={{ span: 9, offset: 8 }}
          md={{ span: 6, offset: 4 }}
          lg={{ span: 6, offset: 4 }}
        >
          <div
            style={{
              position: `relative`,
              left: `0`,
              top: `0`,
            }}
          >
            <img src={pic5} alt="phoneImage" className="homePhoneImg" />
            <h1 className="home5-number">0.0%</h1>
            <p className="home5-par">Fees or Charges</p>
            <img src={logoPic5} alt="LogoImage" className="HomeImage5" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Home5;
