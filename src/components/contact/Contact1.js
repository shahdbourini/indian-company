import { Col, Row, Button, Form, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './style-contact.css';

function Contact(props) {
  const [form] = Form.useForm();

  return (
    <div>
      <Row style={{ paddingTop: '10%', paddingBottom: `6%` }}>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 12 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="contact-text">
            <h1>Thanks for your interest in Payxmi!</h1>
            <p>
              Want to learn more about the app and our business? Submit this
              form and our collegues will contact you soon.
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 5, offset: 6 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 8, offset: 1 }}
        >
          <div className="box-form">
            <Form form={form} layout="vertical" className="contact-form">
              <Form.Item label="First Name">
                <Input />
              </Form.Item>
              <Form.Item label="Last Name">
                <Input />
              </Form.Item>

              <Form.Item label="Email">
                <Input />
              </Form.Item>

              <Form.Item label="phone Number">
                <Input />
              </Form.Item>

              <Form.Item label="message">
                <Input.TextArea />
              </Form.Item>

              <Form.Item>
                <Button type="primary">Sign in</Button>
                <Checkbox className="checkbox">
                  Accept our Terms of services, Privacy Policy
                </Checkbox>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
