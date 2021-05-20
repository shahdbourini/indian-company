import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-Home.css';
import homeImage1 from '../../images/home4Phone.png';
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
            <h1> {props.t('Make your money smarter.1')}</h1>
            <p>{props.t('Make your money smarter.2')}</p>
            <Button>{props.t('Make your money smarter.3')}</Button>
            <Button>{props.t('Make your money smarter.4')}</Button>
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
            <img src={homeImage1} alt="phoneImage" className="homePhoneImg" />
            <img src={homeLogo} alt="LogoImage" className="HomeImage1" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Home1;
