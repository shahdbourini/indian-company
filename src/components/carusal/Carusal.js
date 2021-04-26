import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import './styles.css';
import { Row, Col } from 'antd';
import mainFeatures from '../../images/mainFeatures.svg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Carusal(props) {
  const [items, setItems] = useState([
    mainFeatures,
    mainFeatures,
    mainFeatures,
    mainFeatures,
    mainFeatures,
    mainFeatures,
  ]);

  return (
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {/* {items.map((item) => (
            // <Item key={item}>{item}</Item>
            <img src={item} key={item} />
          ))} */}

          <div>
            <img src={mainFeatures} />
            <p>test</p>
          </div>

          <div>
            <img src={mainFeatures} />
            <p>test</p>
          </div>

          <div>
            <img src={mainFeatures} />
            <p>test</p>
          </div>

          <div>
            <img src={mainFeatures} />
            <p>test</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Carusal;
