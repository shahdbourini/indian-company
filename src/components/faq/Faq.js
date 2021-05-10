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
    const color = this.props.color;
    return (
      <div
        className="container"
        style={{ marginTop: `50px`, paddingBottom: `80px` }}
      >
        <h1
          style={{
            textAlign: `center`,
            color: color,
          }}
        >
          FAQ
        </h1>
        <dl className="accordion">
          {this.props.accordionList.map((item, index) => (
            <Accordion
              title={item.title}
              contents={item.content}
              onClick={this.toggle(index + 1)}
              expand={this.state[`block${index + 1}`]}
              color={this.props.color}
            />
          ))}
        </dl>
      </div>
    );
  }
}

export default Faq;
