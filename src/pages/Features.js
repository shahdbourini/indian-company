import React from 'react';
import { Button } from 'antd';
import Carusal from '../components/carusal/Carusal';
import mainFeatures from '../images/mainFeatures.svg';

function Features(props) {
  return (
    <>
      <div className="features-image">
        <div className="features-text">
          <h2>Title of the Feature</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <Button>Download Now</Button>
          <br />
          <img src={mainFeatures} alt="image" />
        </div>
      </div>

      <Carusal />
    </>
  );
}

export default Features;
