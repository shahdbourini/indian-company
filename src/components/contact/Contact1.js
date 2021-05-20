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
          lg={{ span: 10, offset: 3 }}
        >
          <div className="contact-text">
            <h2>{props.t('contactSec1.1')}</h2>
            <p>{props.t('contactSec1.2')}</p>
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
              <Form.Item label={props.t('contactSec1.3')}>
                <Input />
              </Form.Item>
              <Form.Item label={props.t('contactSec1.4')}>
                <Input />
              </Form.Item>

              <Form.Item label={props.t('contactSec1.5')}>
                <Input />
              </Form.Item>

              <Form.Item label={props.t('contactSec1.6')}>
                <Input />
              </Form.Item>

              <Form.Item label={props.t('contactSec1.7')}>
                <Input.TextArea />
              </Form.Item>

              <Form.Item>
                <Button type="primary">Send</Button>
                <Checkbox className="checkbox">
                  {props.t('contactSec1.8')}
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
