import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../homeComp/style-Home.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css';
import HomePhone1 from '../../images/HomePhone1.png';
import HomePhone2 from '../../images/HomePhone2.png';
import HomePhone3 from '../../images/HomePhone3.png';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  768: { items: 3 },
  992: { items: 3 },
  1024: { items: 3 },
  2560: { items: 3 },
};

const items = [
  <div className="Home-phones ">
    <img src={HomePhone1} alt="HomePhone" />
    <div className="div-par">
      <p className="parCar-1" style={{ fontWeight: `bold` }}>
        Instant Top-Up
      </p>
      <p className="parCar-2">
        Top-up your Payxmi wallet instant within seconds in multiple ways.
      </p>
    </div>
    <Link to="/instant-top-up">
      <Button>Learn More</Button>
    </Link>
  </div>,
  <div className="Home-phones ">
    <img src={HomePhone3} alt="HomePhone" />
    <div className="div-par">
      <p className="parCar-1" style={{ fontWeight: `bold` }}>
        Instant Receive and Send Payment
      </p>
      <p className="parCar-2">
        With Payxmi you send and receive money anywhere instantly.
      </p>
    </div>
    <Link to="/instant-receive-and-send-payment">
      <Button>Learn More</Button>
    </Link>
  </div>,
  <div className="Home-phones ">
    <img src={HomePhone2} alt="HomePhone" />
    <div className="div-par">
      <p className="parCar-1" style={{ fontWeight: `bold` }}>
        Manage your money better
      </p>
      <p className="parCar-2">
        Payxmi allows you to manage and track you spending easily.
      </p>
    </div>
    <Link to="/manage-your-money">
      <Button>Learn More</Button>
    </Link>
  </div>,
];
function Carusal(props) {
  return (
    <div className="carousel-wrapper HomePhone-sec">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls="true"
      />
    </div>
  );
}

export default Carusal;
