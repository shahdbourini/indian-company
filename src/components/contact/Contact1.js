import { Col, Row, Button, Form, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './style-contact.css';
import HubspotForm from 'react-hubspot-form';

function Contact(props) {
  const [form] = Form.useForm();

  return (
    <>
      <Row style={{ paddingTop: '10%', paddingBottom: `6%` }}>
        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="contact-text">
            <h1>{props.t('contactSec1.1')}</h1>
            <p>{props.t('contactSec1.2')}</p>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 18, offset: 4 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 9, offset: 1 }}
        >
          {/* <div className="box-form"> */}
          {/* <Form form={form} layout="vertical" className="contact-form">
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
            </Form> */}

          <HubspotForm
            portalId="20020308"
            formId="33a3fcb1-3716-47e0-b378-a56955c982e7"
            region="na1"
            onSubmit={() => (window.location.href = '/contact')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div></div>}
          />
          {/* </div> */}
        </Col>
      </Row>
    </>
  );
}

export default Contact;
