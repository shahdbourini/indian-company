import { Col, Row } from 'antd';
import './style-Home.css';
import HomePhone1 from '../../images/HomePhone1.png';
import HomePhone2 from '../../images/HomePhone2.png';
import HomePhone3 from '../../images/HomePhone3.png';

function Home2(props) {
  return (
    <>
      <Row className="HomePhone-sec">
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6, offset: 3 }}
        >
          <div className="Home2-phones">
            <img src={HomePhone1} alt="HomePhone" style={{ width: `100%` }} />
            <p>Instant Top-Up</p>
          </div>
        </Col>

        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6, offset: 0 }}
        >
          <div className="Home2-phones">
            <img src={HomePhone2} alt="HomePhone" style={{ width: `100%` }} />
            <p>Instant Receive and Send Payment</p>
          </div>
        </Col>

        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6, offset: 0 }}
        >
          <div className="Home2-phones">
            <img src={HomePhone3} alt="HomePhone" style={{ width: `100%` }} />
            <p>Manage your money better</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Home2;
