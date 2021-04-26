import Carousel from 'react-elastic-carousel';
import './styles.css';
import '../homeComp/style-Home.css';
import HomePhone1 from '../../images/HomePhone1.png';
import HomePhone2 from '../../images/HomePhone2.png';
import HomePhone3 from '../../images/HomePhone3.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 570, itemsToShow: 3 },
  { width: 760, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Carusal(props) {
  return (
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints} className=" HomePhone-sec">
        <div className="Home-phones">
          <img src={HomePhone1} alt="HomePhone" style={{ width: `100%` }} />
          <p>Instant Top-Up</p>
        </div>

        <div className="Home-phones">
          <img src={HomePhone1} alt="HomePhone" style={{ width: `100%` }} />
          <p>Manage your money better</p>
        </div>

        <div className="Home-phones">
          <img src={HomePhone2} alt="HomePhone" style={{ width: `100%` }} />
          <p>Instant Receive and Send Payment</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carusal;
