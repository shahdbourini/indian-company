import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import LoginP from './LoginP';
import './style_login.css';
import facebook from '../../images/facebook.png';
import logo from '../../images/logo.png';

function Login(props) {
  const [form] = Form.useForm();
  return (
    <div>
      <Row
        style={{
          marginTop: `88px`,
          paddingTop: '90px',
          paddingBottom: `100px`,
        }}
        gutter={[0, 8]}
      >
        <Col
          xs={{ span: 10, offset: 5 }}
          sm={{ span: 10, offset: 8 }}
          md={{ span: 15, offset: 9 }}
          lg={{ span: 4, offset: 11 }}
        >
          <img src={logo} style={{ width: `100%/`, paddingBottom: `40px` }} />
        </Col>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 8, offset: 5 }}
          className="black-back"
        >
          <div className="login-text">
            <h3>Sign in for your business</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore{' '}
            </p>
            <Link className="btn google" href="/users/googleauth" role="button">
              <img
                width="20px"
                style={{ marginBottom: `3px`, float: `left` }}
                alt="Google sign-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              Login with Google
            </Link>

            <Link className="btn facebook" href="#" role="button">
              <img
                width="20px"
                style={{ marginBottom: `3px`, float: `left` }}
                alt="facebook sign-in"
                src={facebook}
              />
              Login with Facebook
            </Link>
          </div>

          <div className="devide">
            <hr
              style={{
                background: `white`,
                minWidth: `30%`,
                position: `relative`,
                left: `-38px`,
              }}
            />
            <p style={{ color: `white` }}>or</p>
            <hr
              style={{
                background: `white`,
                minWidth: `30%`,
                position: `relative`,
                right: `-38px`,
              }}
            />
          </div>

          <Form form={form} layout="vertical" className="login-form">
            <Form.Item label="Username or email Adress">
              <Input />
            </Form.Item>

            <Form.Item label="Password">
              <Input />
              <Link
                className="login-form-forgot"
                to=""
                style={{
                  position: `relative`,
                  top: `-62px`,
                  float: `right`,
                  color: `white`,
                }}
              >
                Forgot password ?
              </Link>
            </Form.Item>
            <Form.Item>
              <Button type="primary">Sign in</Button>
            </Form.Item>
          </Form>
        </Col>

        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
          className="black-backP"
        >
          <LoginP />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
