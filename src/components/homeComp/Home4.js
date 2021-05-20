import React from 'react';
import { Button, Col, Row } from 'antd';
import './style-Home.css';
import homeImage1 from '../../images/home4Phone.png';
import homeLogo from '../../images/home4img.png';
import home4logo from '../../images/home4logo.png';

function Home4(props) {
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
            <h1 style={{ fontSize: `2rem` }}>
              {props.t('Forget Cards -Your phone does everything.1')}
              <br />
              {props.t('Forget Cards -Your phone does everything.2')}
            </h1>
            <p>{props.t('Forget Cards -Your phone does everything.3')}</p>
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
            <img src={home4logo} alt="LogoImage" className="home4logo" />
            <img src={homeLogo} alt="LogoImage" className="HomeImage4" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Home4;
