import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Switch } from 'antd';
import footerimg from '../../images/footer-img.png';
import blueLogo from '../../images/blueLogo3.png';

import {
  StyleH5,
  StyleP,
  StyleP1,
  ArrowStyle,
  StyleLink,
  StyleP2,
} from './style-footer';

function Footer(props) {
  return (
    <div style={{ background: `rgb(234 234 234)` }}>
      <Row
        justify="space-around"
        style={{
          // marginTop: `88px`,
          paddingTop: '10%',
        }}
      >
        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          {/* <StyleH5>Logo</StyleH5> */}
          <img
            src={blueLogo}
            alt="logo"
            style={{ position: `relative`, width: `50%`, left: `-18px` }}
          />
          <StyleP>
            <b style={{ color: `#daa21b` }}>DISCLAIMER</b>
            <br />
            Please do not share your Payxmi Wallet password or, other
            confidential information with anyone even if he/she claims to be
            from Payxmi. We advise ignore such communications & report to us at
            support@payxmi.com.
          </StyleP>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 4, offset: 0 }}
          lg={{ span: 3, offset: 1 }}
        >
          <StyleH5>The App</StyleH5>
          <StyleP1>
            <StyleLink>How it's work </StyleLink>
          </StyleP1>
          <StyleP1>
            <StyleLink>Plan</StyleLink>
          </StyleP1>

          <Link to="/features">
            <StyleP1>Personal Account</StyleP1>
          </Link>

          <Link to="/business">
            <StyleP1>Business Account</StyleP1>
          </Link>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 3, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          xl={{ span: 4, offset: 0 }}
        >
          <StyleH5>Company</StyleH5>
          <StyleP1>
            <Link to="/About">
              <StyleLink>About Us </StyleLink>
            </Link>
          </StyleP1>
          <StyleP1>
            <StyleLink>Privacy</StyleLink>
          </StyleP1>
          <StyleP1>
            <StyleLink>Terms & Conditions </StyleLink>
          </StyleP1>
          <StyleP1>
            <Link to="/contact">
              <StyleLink>Contact Us </StyleLink>
            </Link>
          </StyleP1>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 2, offset: 0 }}
          lg={{ span: 2, offset: 0 }}
        >
          <StyleH5>Legal</StyleH5>
          <StyleP1>
            <Link to="">
              <StyleLink>Terms </StyleLink>
            </Link>
          </StyleP1>
          <StyleP1>
            <StyleLink>Limits</StyleLink>
          </StyleP1>
          <StyleP1>
            <StyleLink>Privacy </StyleLink>
          </StyleP1>
          <StyleP1>
            <Link to="">
              <StyleLink>Cookies </StyleLink>
            </Link>
          </StyleP1>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 2, offset: 0 }}
          lg={{ span: 2, offset: 0 }}
        >
          <StyleH5>Follow</StyleH5>
          <StyleP1>
            <Link
              onClick={() =>
                window.location.replace('https://www.facebook.com/payxmi')
              }
            >
              <StyleLink> Facebook </StyleLink>
            </Link>
          </StyleP1>
          <StyleP1>
            <StyleLink>Twitter </StyleLink>
          </StyleP1>
          <StyleP1>
            <StyleLink>Instagram </StyleLink>
          </StyleP1>
          <StyleP1>
            <Link
              onClick={() =>
                window.location.replace(
                  'https://www.linkedin.com/company/payxmi/'
                )
              }
            >
              <StyleLink> Linkedin</StyleLink>
            </Link>
          </StyleP1>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 2, offset: 0 }}
          lg={{ span: 2, offset: 0 }}
        >
          <ArrowStyle>
            <Switch
              checkedChildren="English"
              unCheckedChildren="Italian"
              defaultChecked
            />
          </ArrowStyle>
        </Col>
      </Row>

      <Row style={{ marginTop: `3%`, paddingBottom: `20px ` }}>
        <Col
          xs={{ span: 6, offset: 2 }}
          sm={{ span: 6, offset: 2 }}
          md={{ span: 2, offset: 1 }}
          lg={{ span: 2, offset: 1 }}
          xl={{ span: 2, offset: 1 }}
          xxl={{ span: 2, offset: 1 }}
        >
          <div>
            <img
              src={footerimg}
              style={{ width: `100%`, marginBottom: `18px` }}
            />
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 16, offset: 3 }}
          lg={{ span: 16, offset: 3 }}
          xl={{ span: 16, offset: 3 }}
          xxl={{ span: 20, offset: 1 }}
          style={{ textAlign: 'center' }}
        >
          <StyleP2>
            We are a financial company incorporated in Ireland (EU) with
            registered number 688709 and in UK with registered number 12993483
          </StyleP2>
          <StyleP2>
            © 2020 – 2021 Payxmi Limited | 69 Esker Woods Drive, Lucan Co
            Dublin, K78PX45, Ireland
          </StyleP2>
          <StyleP2>
            Payxmi Limited | Office 381 182-184, High Street North,E62JA
            London(UK)
          </StyleP2>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
