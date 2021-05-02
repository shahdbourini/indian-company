import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import ReactFlagsSelect from 'react-flags-select';
import './style-signup.css';
import signupLogo from '../../images/signupLogo.png';

function SignUp(props) {
  const [selected, setSelected] = useState('');
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        fullWidth={false}
        selectedSize={13}
      />
    </Form.Item>
  );
  return (
    <div>
      <Row
        style={{
          paddingTop: '90px',
          paddingBottom: `100px`,
        }}
      >
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 18, offset: 3 }}
          md={{ span: 15, offset: 5 }}
          lg={{ span: 10, offset: 7 }}
          className="blue-borders"
        >
          <div className="signup-text">
            <h3>Create Account Now</h3>
            <p>Scan the QR code below or by sign upwith email</p>
            <div>
              <img src={signupLogo} />
            </div>
          </div>

          <div style={{ display: `flex` }}>
            <hr
              style={{
                background: `#707070`,
                minWidth: `30%`,
                position: `relative`,
                left: `-38px`,
              }}
            />
            <p style={{ color: `#707070` }}>or</p>
            <hr
              style={{
                background: `#707070`,
                minWidth: `30%`,
                position: `relative`,
                right: `-38px`,
              }}
            />
          </div>

          <Form form={form} layout="vertical" className="signup-form">
            <Form.Item label="Sign Up With Email ID">
              <Input />
            </Form.Item>
            <div>
              <p style={{ color: `#707070`, textAlign: `center` }}>or</p>
            </div>

            <Form.Item
              layout="inline"
              label="Mobile Number"
              className="desktop-v"
            >
              <Input addonBefore={prefixSelector} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{ width: `100%` }}>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
