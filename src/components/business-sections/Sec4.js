import React from 'react';
import Faq from '../faq/Faq';
import { Row, Col } from 'antd';
import './style-business.css';

function Sec4(props) {
  const accordionList = [
    {
      title: 'How do I create a business account? ',
      content:
        'To create a business Payxmi account, you will need to register across different networks. You need to enter your business credentials to register into the platform. It is advisable to create a business account, specifically by choosing the option.',
    },
    {
      title: 'Do I need to purchase plans?       ',
      content:
        'Yes.There are different plans for purchasing the specific features. We have curated plans for SME and large organizations. Choose a plan that suits your needs. It is FREE for daily transaction below €1000.  ',
    },
    {
      title: 'How to authorize purchase plans? ',
      content:
        'You will receive push notifications for your plans. To proceed with your purchase plans, you will receive notifications. Once you receive the notification, you can proceed with the password only after tapping. You can either tap by your fingerprint and proceed with facial recognition. ',
    },
    {
      title:
        'What to do when transfer fails when money has been deducted?       ',
      content:
        'Once the transfer fails and the money is deducted from the account, you will need to check all the benefits provided. At the same time, it is advisable to check by when you will receive the confirmation. You can upgrade to further plans if the transfer fails. The deducted money will be credited into your account within 3-5 business days',
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
