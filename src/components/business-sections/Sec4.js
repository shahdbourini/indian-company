import React from 'react';
import Faq from '../faq/Faq';
import { Row, Col } from 'antd';
import './style-business.css';

function Sec4(props) {
  const accordionList = [
    {
      title: props.t('businessSec4.1'),
      content: props.t('businessSec4.2'),
    },
    {
      title: props.t('businessSec4.3'),
      content: props.t('businessSec4.4'),
    },
    {
      title: props.t('businessSec4.5'),
      content: props.t('businessSec4.6'),
    },
    {
      title: props.t('businessSec4.7'),
      content: props.t('businessSec4.8'),
    },
  ];
  return (
    <>
      <div style={{ paddingBottom: `100px` }}>
        <Faq accordionList={accordionList} color="white" />
      </div>
    </>
  );
}

export default Sec4;
