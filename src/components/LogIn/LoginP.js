import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './style_login.css';
import facebook from '../../images/facebook.png';

function LoginP(props) {
  const [form] = Form.useForm();
  return (
    <>
      <div className="login-textP">
        <h3>Sign in as private</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore{' '}
        </p>
        <Link className="btn googleP" href="/users/googleauth" role="button">
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
            background: `black`,
            minWidth: `30%`,
            position: `relative`,
            left: `-38px`,
          }}
        />
        <p>or</p>
        <hr
          style={{
            background: `black`,
            minWidth: `30%`,
            position: `relative`,
            right: `-38px`,
          }}
        />
      </div>

      <Form form={form} layout="vertical" className="login-formP">
        <Form.Item label="Username or email Adress">
          <Input />
        </Form.Item>

        <Form.Item label="Password">
          <Input />
          <Link
            className="login-form-forgot"
            to=""
            style={{ position: `relative`, top: `-62px`, float: `right` }}
          >
            Forgot password ?
          </Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Sign in</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginP;
