import React from 'react';
import AboutSec1 from '../components/about-sections/Sec1';
import AboutSec2 from '../components/about-sections/Sec2';
import AboutSec3 from '../components/about-sections/Sec3';

function AboutUs(props) {
  return (
    <>
      <AboutSec1 t={props.t} />
      <AboutSec2 t={props.t} />
      <AboutSec3 t={props.t} />
    </>
  );
}

export default AboutUs;
