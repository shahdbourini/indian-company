import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './style-contact.css';
import contact2 from '../../images/contact2.png';

function Contact(props) {
  return (
    <div>
      <Row style={{ paddingBottom: `111px`, paddingTop: `45px` }}>
        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
        >
          <div className="contact2-text">
            <h2>
              No Email ? No problem, we can resolve your problem with 24h live
              chat !
            </h2>
            <p>
              Write a simple message in the live chat and one operator respond
              to you as soon as possible
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 25, offset: 2 }}
          sm={{ span: 25, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 5, offset: 3 }}
        >
          <div className="contact2">
            <img src={contact2} style={{ width: `90%`, paddingTop: `50px` }} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
