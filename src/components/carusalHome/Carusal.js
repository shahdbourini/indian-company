import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../homeComp/style-Home.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css';
import HomePhone1 from '../../images/HomePhone1.png';
import HomePhone2 from '../../images/HomePhone2.png';
import HomePhone3 from '../../images/HomePhone3.png';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  768: { items: 3 },
  992: { items: 3 },
  1024: { items: 3 },
  2560: { items: 3 },
};

function Carusal(props) {
  const items = [
    <div className="Home-phones ">
      <img src={HomePhone1} alt="HomePhone" />
      <div className="parCar-1">
        <p style={{ fontWeight: `bold` }}>
          {props.t('Manage, Save and Pay Smarter.3')}
        </p>
      </div>
      <div className="parCar-2">
        <p>{props.t('Manage, Save and Pay Smarter.4')}</p>
      </div>
      <Link to="/instant-top-up">
        <Button>{props.t('Make your money smarter.4')}</Button>
      </Link>
    </div>,
    <div className="Home-phones ">
      <img src={HomePhone2} alt="HomePhone" />
      <div className="parCar-1">
        <p style={{ fontWeight: `bold` }}>
          {' '}
          {props.t('Manage, Save and Pay Smarter.5')}
        </p>
      </div>
      <div className="parCar-2">
        <p> {props.t('Manage, Save and Pay Smarter.6')}</p>
      </div>
      <Link to="/instant-receive-and-send-payment">
        <Button>{props.t('Make your money smarter.4')}</Button>
      </Link>
    </div>,
    <div className="Home-phones ">
      <img src={HomePhone3} alt="HomePhone" />
      <div className="parCar-1">
        <p style={{ fontWeight: `bold` }}>
          {' '}
          {props.t('Manage, Save and Pay Smarter.7')}
        </p>
      </div>
      <div className="parCar-2">
        <p> {props.t('Manage, Save and Pay Smarter.8')}</p>
      </div>
      <Link to="/manage-your-money">
        <Button>{props.t('Make your money smarter.4')}</Button>
      </Link>
    </div>,
  ];
  return (
    <>
      <Row style={{ paddingTop: `5%` }}>
        <Col
          xs={{ span: 20, offset: 3 }}
          sm={{ span: 20, offset: 3 }}
          md={{ span: 15, offset: 3 }}
          lg={{ span: 12, offset: 3 }}
          className="Home2-Title"
        >
          <h1>{props.t('Manage, Save and Pay Smarter.1')}</h1>
          <p>{props.t('Manage, Save and Pay Smarter.2')}</p>
        </Col>
      </Row>
      <div className="carousel-wrapper HomePhone-sec">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls="true"
        />
      </div>
    </>
  );
}

export default Carusal;
