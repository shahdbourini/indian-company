import React from 'react';
import Accordion from './Accordion.js';
import './style-faq.css';

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: false,
      block2: false,
      block3: false,
    };
  }

  toggle = (index) => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
  };

  toggleExpand = (expand = false) => () => {
    this.setState({
      block1: expand,
      block2: expand,
      block3: expand,
    });
  };

  render() {
    const accordionList = [
      {
        title: 'How do I create an account? ',
        content:
          'All you need to do is sign up into the website or download the app for your respective device and get going. For registering into the specific platform, you will need to do the app download and enter your details regarding your name, phone number and address. The wallet will be ready in less than 5 minutes.',
      },
      {
        title: 'Will I get any notifications? ',
        content:
          'Everytime you make a transaction through the platform, you will receive confirmation regarding payments and transactions.   If you are eligible for bonus offers, you will receive confirmation about the same in your respective email IDs. It is advisable to connect all your accounts with each other for better ideas and stay notified. ',
      },
      {
        title: 'How do I claim the bonus offer? ',
        content:
          'You will receive discounts and extra bonus for making transactions via the platform. The bonus received from transactions will be stored in your Payxmi wallet',
      },
      {
        title: 'Can I transfer money from my Paxmi wallet to my bank account?',
        content:
          'Yes. You can transfer the money from your Payxmi wallet to bank account only if they are connected.',
      },
      { title: 'Do I need to purchase any plans ', content: 'No' },
    ];

    return (
      <div
        className="container"
        style={{ marginTop: `50px`, paddingBottom: `80px` }}
      >
        <dl className="accordion">
          {accordionList.map((item, index) => (
            <Accordion
              title={item.title}
              contents={item.content}
              onClick={this.toggle(index + 1)}
              expand={this.state[`block${index + 1}`]}
            />
          ))}
        </dl>
      </div>
    );
  }
}

export default Faq;
