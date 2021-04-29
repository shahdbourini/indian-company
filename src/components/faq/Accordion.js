import React from 'react';

class Accordion extends React.Component {
  render() {
    const { title, expand, onClick, contents } = this.props;

    return (
      <div>
        <dt
          className={expand ? 'title is-expanded' : 'title'}
          onClick={onClick}
          style={{ color: `${this.props.color}` }}
        >
          {title}
        </dt>
        <dd
          className={expand ? 'content is-expanded' : 'content'}
          onClick={onClick}
        >
          <p style={{ color: `${this.props.color}` }}>{contents}</p>
        </dd>
      </div>
    );
  }
}

export default Accordion;
