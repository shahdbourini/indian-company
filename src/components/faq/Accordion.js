import React from 'react';

class Accordion extends React.Component {
  render() {
    const { title, expand, onClick, contents } = this.props;

    return (
      <div>
        <dt
          className={expand ? 'title is-expanded' : 'title'}
          onClick={onClick}
        >
          {title}
        </dt>
        <dd
          className={expand ? 'content is-expanded' : 'content'}
          onClick={onClick}
        >
          <p>{contents}</p>
        </dd>
      </div>
    );
  }
}

export default Accordion;
