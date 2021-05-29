import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Switch } from 'antd';
import footerimg from '../../images/footer-img.png';
import blueLogo from '../../images/blueLogo3.png';

import {
  StyleH5,
  StyleP,
  StyleP1,
  ArrowStyle,
  ImgF,
  StyleP2,
} from './style-footer';

function Footer(props) {
  let history = useHistory();
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
          md={{ span: 6, offset: 1 }}
          lg={{ span: 6, offset: 1 }}
        >
          {/* <StyleH5>Logo</StyleH5> */}
          <ImgF src={blueLogo} alt="logo" onClick={() => history.push('/')} />
          <StyleP>
            <b style={{ color: `#daa21b` }}>{props.t('footer.1')}</b>
            <br />
            {props.t('footer.2')}
          </StyleP>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 4, offset: 0 }}
          lg={{ span: 3, offset: 1 }}
        >
          <StyleH5>{props.t('footer.3')}</StyleH5>
          <Link to="">
            <StyleP1>{props.t('footer.4')}</StyleP1>
          </Link>

          <Link to="">
            <StyleP1>{props.t('footer.5')}</StyleP1>
          </Link>

          <Link to="/features">
            <StyleP1>{props.t('footer.6')}</StyleP1>
          </Link>

          <Link to="/business">
            <StyleP1>{props.t('footer.7')}</StyleP1>
          </Link>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 3, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          xl={{ span: 4, offset: 0 }}
        >
          <StyleH5>{props.t('footer.8')}</StyleH5>

          <Link to="/About">
            <StyleP1>{props.t('footer.9')} </StyleP1>
          </Link>

          <Link to="">
            <StyleP1>{props.t('footer.10')}</StyleP1>
          </Link>
          <Link to="">
            <StyleP1>{props.t('footer.11')}</StyleP1>
          </Link>

          <Link to="/contact">
            <StyleP1>{props.t('footer.12')}</StyleP1>
          </Link>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 2, offset: 0 }}
          lg={{ span: 2, offset: 0 }}
        >
          <StyleH5>{props.t('footer.13')}</StyleH5>
          <Link to="">
            <StyleP1>{props.t('footer.14')}</StyleP1>
          </Link>
          <Link to="">
            <StyleP1>{props.t('footer.15')}</StyleP1>
          </Link>
          <Link to="">
            <StyleP1>{props.t('footer.16')}</StyleP1>
          </Link>
          <Link to="">
            <StyleP1>{props.t('footer.17')}</StyleP1>
          </Link>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 2, offset: 0 }}
          lg={{ span: 2, offset: 0 }}
        >
          <StyleH5>{props.t('footer.18')}</StyleH5>

          <Link
            onClick={() =>
              window.location.replace('https://www.facebook.com/payxmi')
            }
          >
            <StyleP1>FaceBook</StyleP1>
          </Link>

          <Link>
            <StyleP1>Twitter</StyleP1>
          </Link>

          <Link>
            <StyleP1>Instagram</StyleP1>
          </Link>

          <Link
            onClick={() =>
              window.location.replace(
                'https://www.linkedin.com/company/payxmi/'
              )
            }
          >
            <StyleP1>Linkedin</StyleP1>
          </Link>
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
              onChange={props.onChange}
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
              style={{ width: `100%`, marginBottom: `18px`, cursor: `pointer` }}
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
          <StyleP2>{props.t('footer.19')}</StyleP2>
          <StyleP2>{props.t('footer.20')}</StyleP2>
          <StyleP2>{props.t('footer.21')}</StyleP2>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
