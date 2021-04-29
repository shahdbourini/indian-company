import React from 'react';
import { Row, Col } from 'antd';
import './style-business.css';

function Sec4(props) {
  return (
    <>
      <Row style={{ paddingBottom: `100px` }}>
        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 7, offset: 3 }}
          lg={{ span: 8, offset: 3 }}
        >
          <div className="how-text">
            <h1>Save Big   </h1>
            <p>
              The greatest perk of working with Payxmi is that it allows
              business organizations to serve big. You already get access to
              tools to manage your finances. Hence, not only do you get the perk
              of saving time but money as well. Scale the business API
              effectively.
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 22, offset: 2 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 9, offset: 1 }}
        >
          <div className="how-text">
            <h1>Optimized payments with Smart App   </h1>
            <p>
              No hassle of carrying the cards. Payxmi provides you with a smart
              app that allows you to make transactions across different European
              countries.
              <br />
              Do not make the mistake of overspending. How? Payxmi allows you to
              manage transactions all from one place.  
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sec4;
