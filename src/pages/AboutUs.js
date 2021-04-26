import React from 'react';
import { Row, Col } from 'antd';
import NoImage from '../images/NoImage.png';
import map from '../images/map.png';
import phone from '../images/mobile.png';
import homeImage1 from '../images/homeImage1.png';
import homeLogo from '../images/HomeLogo.png';

function AboutUs(props) {
  return (
    <>
      <Row
        style={{
          marginTop: `100px`,
        }}
      >
        <Col
          xs={{ span: 25, offset: 2, order: 2 }}
          sm={{ span: 7, offset: 3, order: 1 }}
          md={{ span: 7, offset: 2, order: 1 }}
          lg={{ span: 6, offset: 3, order: 1 }}
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
        <Col
          xs={{ span: 20, offset: 2, order: 1 }}
          sm={{ span: 7, offset: 2, order: 1 }}
          md={{ span: 7, offset: 1, order: 2 }}
          lg={{ span: 8, offset: 2, order: 2 }}
        >
          <div className="about-text1 ">
            <h2>Who we are</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores{' '}
            </p>
            {/* <img src={phone} /> */}
          </div>
        </Col>
      </Row>

      <Row
        style={{
          marginTop: `100px`,
        }}
      >
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 9, offset: 3 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="about-text2">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
            </p>
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 7, offset: 2 }}
          lg={{ span: 8, offset: 2 }}
        >
          <img
            src={NoImage}
            alt="image"
            style={{ height: ` 230px`, width: `100%` }}
          />
        </Col>
      </Row>

      <Row
        style={{
          marginTop: `150px`,
          paddingBottom: `100px`,
        }}
      >
        <Col
          xs={{ span: 20, offset: 3 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 12, offset: 7 }}
          lg={{ span: 9, offset: 9 }}
        >
          <div className="about-text3">
            <h2>Where can you use our app</h2>
            <img src={map} alt="image" style={{ width: `100%` }} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AboutUs;
