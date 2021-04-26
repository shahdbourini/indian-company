import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Row, Col, Switch } from 'antd';
import footerimg from '../../images/footer-img.png';
import {
  StyleH5,
  StyleP,
  StyleP1,
  ArrowStyle,
  StyleLink,
} from './style-footer';

function Footer(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div style={{ background: `rgb(234 234 234)` }}>
      <Row
        style={{
          // marginTop: `88px`,
          paddingTop: '90px',
        }}
      >
        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 5, offset: 2 }}
          lg={{ span: 5, offset: 3 }}
        >
          <StyleH5>Logo</StyleH5>
          <StyleP>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </StyleP>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 3, offset: 2 }}
        >
          <StyleH5>The App</StyleH5>
          <BrowserRouter>
            <StyleP1>
              <StyleLink>How it's work </StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Plan</StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Personal Account </StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Business Account</StyleLink>
            </StyleP1>
          </BrowserRouter>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 5, offset: 0 }}
          lg={{ span: 3, offset: 1 }}
        >
          <StyleH5>Company</StyleH5>
          <BrowserRouter>
            <StyleP1>
              <StyleLink>About Us </StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Privacy</StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Terms & Conditions </StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Contact Us</StyleLink>
            </StyleP1>
          </BrowserRouter>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 5, offset: 0 }}
          lg={{ span: 3, offset: 1 }}
        >
          <StyleH5>Follow</StyleH5>
          <BrowserRouter>
            <StyleP1>
              <StyleLink>Facebook </StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Twitter </StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Instagram </StyleLink>
            </StyleP1>
            <StyleP1>
              <StyleLink>Linkedin</StyleLink>
            </StyleP1>
          </BrowserRouter>
        </Col>
      </Row>

      <Row style={{ marginTop: `24px`, paddingBottom: `20px ` }}>
        <Col
          xs={{ span: 10, offset: 2 }}
          sm={{ span: 10, offset: 2 }}
          md={{ span: 4, offset: 2 }}
          lg={{ span: 2, offset: 3 }}
        >
          <div>
            <img src={footerimg} style={{ width: `79%` }} />
          </div>
        </Col>

        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 1, offset: 8 }}
          md={{ span: 1, offset: 13 }}
          lg={{ span: 2, offset: 13 }}
        >
          <ArrowStyle>
            <Switch
              checkedChildren="English"
              unCheckedChildren="Arabic"
              defaultChecked
            />
            <i
              class="fa fa-chevron-up"
              aria-hidden="true"
              onClick={scrollTop}
              style={{ cursor: `pointer` }}
            ></i>
          </ArrowStyle>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
