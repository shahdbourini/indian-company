import React from 'react';
import { Row, Col } from 'antd';
import aboutSec1 from '../../images/aboutSec1.png';
import aboutUsNew from '../../images/aboutUsNew.jpg';
import aboutAsset from '../../images/aboutAsset.png';
import setting from '../../images/setting1.png';
import './style-about.css';

function Sec1(props) {
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: `center`,
            marginTop: `100px`,
            fontSize: 'xxx-large',
          }}
        >
          Who are we?
        </h1>
      </div>
      <Row style={{ paddingBottom: `10px` }}>
        <Col
          xs={{ span: 19, offset: 4 }}
          sm={{ span: 15, offset: 5 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 12, offset: 6 }}
        >
          <div className="aboutSec1">
            <img src={aboutUsNew} alt="about-sec" />
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 3 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 20, offset: 3 }}
          lg={{ span: 13, offset: 6 }}
        >
          <p className="paragraph-style" style={{ textAlign: `justify` }}>
            payxmi is your one-stop solution for easy money
            management. payxmi will be launched into the market with the single
            goal of revolutionizing the money management procedure for
            individuals and businesses. For businesses payxmi has plans for
            both- small and medium enterprises and large organizations. Whether
            you’re a full-fledged eCommerce money management service or casual
            one, payxmi can help you with the same.  
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Sec1;
