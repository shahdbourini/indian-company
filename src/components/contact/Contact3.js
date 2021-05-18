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
            <h2> Get in touch. </h2>
            <p>Have any questions? We'd love to hear from you.</p>
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
              <h6>Email to Us</h6>
              <div className="height-p-contact3">
                <p>
                  Write us an email and we
                  <br /> will get back to you within 2 hours 
                </p>
              </div>
              <Button>
                <a href="mailto:support@payxmi.com">Email Now</a>
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
              <h6>Instant Support</h6>
              <div className="height-p-contact3">
                <p>
                  Connect with one of support
                  <br /> members from with WhatsApp
                </p>
              </div>
              <Button>
                <a href="https://api.whatsapp.com/send?phone=+393518339643">
                  Chat Now
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
              <h6>Live Chat Support </h6>
              <div className="height-p-contact3">
                <p>
                  Chat with a member of
                  <br /> our Helpdesk Support team
                </p>
              </div>
              <Button>
                <a href="#hs-chat-open">Chat Now</a>
              </Button>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Contact3;
