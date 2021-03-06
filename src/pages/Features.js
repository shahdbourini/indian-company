import React from 'react';
import { Button, Col, Row } from 'antd';
import Sec1 from '../components/features-sections/Sec1';
import Sec2 from '../components/features-sections/Sec2';
import Sec3 from '../components/features-sections/Sec3';
import Sec4 from '../components/features-sections/Sec4';
import Sec5 from '../components/features-sections/Sec5';

function Features(props) {
  return (
    <>
      <Sec1 t={props.t} />
      <Sec2 t={props.t} />
      <Sec3 t={props.t} />
      <Sec4 t={props.t} />
      <Sec5 t={props.t} />
    </>
  );
}

export default Features;
