import { Col, Row, Button } from 'antd';
import 'antd/dist/antd.css';
import './style-contact.css';
import email from '../../images/email.png';
import whatsapp from '../../images/whatsapp.png';
import chat from '../../images/chat.png';

function Contact3(props) {
  return (
    <div>
      <Row style={{ paddingTop: `45px`, paddingBottom: `20px` }}>
        <Col
          xs={{ span: 15, offset: 5 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 12, offset: 7 }}
        >
          <div className="contact3-text">
            <h2>{props.t('contactSec3.1')} </h2>
            <p>{props.t('contactSec3.2')}</p>
          </div>
        </Col>
      </Row>

      <section className="contact3-section">
        <Row style={{ paddingBottom: `62px` }}>
          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 3 }}
            md={{ span: 6, offset: 1 }}
            lg={{ span: 6, offset: 1 }}
          >
            <div className="email-contact">
              <img src={email} />
              <h6>{props.t('contactSec3.3')}</h6>
              <div className="height-p-contact3">
                <p>
                  {props.t('contactSec3.4')}
                  <br /> {props.t('contactSec3.5')}
                </p>
              </div>
              <Button>
                <a href="mailto:support@payxmi.com">
                  {props.t('contactSec3.12')}
                </a>
              </Button>
            </div>
          </Col>

          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 3 }}
            md={{ span: 6, offset: 2 }}
            lg={{ span: 6, offset: 2 }}
          >
            <div className="email-contact">
              <img src={whatsapp} />
              <h6>{props.t('contactSec3.6')}</h6>
              <div className="height-p-contact3">
                <p>
                  {props.t('contactSec3.7')}
                  <br />
                  {props.t('contactSec3.8')}
                </p>
              </div>
              <Button>
                <a href="https://api.whatsapp.com/send?phone=+393518339643">
                  {props.t('contactSec3.13')}
                </a>
              </Button>
            </div>
          </Col>

          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 3 }}
            md={{ span: 6, offset: 2 }}
            lg={{ span: 6, offset: 2 }}
          >
            <div className="email-contact">
              <img src={chat} />
              <h6>{props.t('contactSec3.9')} </h6>
              <div className="height-p-contact3">
                <p>
                  {props.t('contactSec3.10')}
                  <br /> {props.t('contactSec3.11')}
                </p>
              </div>
              <Button>
                <a href="#hs-chat-open">{props.t('contactSec3.13')}</a>
              </Button>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Contact3;
