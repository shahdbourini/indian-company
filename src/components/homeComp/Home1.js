import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-Home.css';
import homeImage1 from '../../images/homeImage1.png';
import homeLogo from '../../images/HomeLogo.png';

function Home1(props) {
  return (
    <>
      <Row style={{ paddingBottom: `6%` }}>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="Home1-text">
            <h1>Get more money, manage and save the money </h1>
            <p>
              Payxmi mobile is your one-stop solution for money management. It
              is the leading online payment app. The easiest way to manage your
              money in a better way.
              <br />
              Have to transfer funds across the Italy? Want to save and manage
              your money? Want to safely purchase things? Download Payxmi today.
            </p>
            <Button>Download App</Button>
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 13, offset: 5 }}
          md={{ span: 11, offset: 1 }}
          lg={{ span: 8, offset: 3 }}
        >
          <div>
            <img
              src={homeImage1}
              alt="phoneImage"
              style={{ width: `100%`, position: `relative` }}
            />
            <div className="HomeImage">
              <img src={homeLogo} alt="LogoImage" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Home1;
