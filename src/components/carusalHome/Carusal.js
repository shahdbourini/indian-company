import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../homeComp/style-Home.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css';
import HomePhone1 from '../../images/HomePhone1.png';
import HomePhone2 from '../../images/HomePhone2.png';
import HomePhone3 from '../../images/HomePhone3.png';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  768: { items: 3 },
  992: { items: 3 },
  1024: { items: 3 },
};

const items = [
  <div className="Home-phones ">
    <img src={HomePhone1} alt="HomePhone" />
    <p>Instant Top-Up</p>
  </div>,
  <div className="Home-phones ">
    <img src={HomePhone2} alt="HomePhone" />
    <p>Manage your money better</p>
  </div>,
  <div className="Home-phones ">
    <img src={HomePhone3} alt="HomePhone" />
    <p>Instant Receive and Send Payment</p>
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
