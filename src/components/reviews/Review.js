import React from 'react';
import { Row, Col } from 'antd';
import './style-Review.css';
import photo from '../../images/photo.png';
import blueDesign from '../../images/blueDesign.png';
import blueDesign2 from '../../images/blueDesign2.png';
import arrows from '../../images/arrows.png';

function Review(props) {
  return (
    <div className="review-section">
      {/* <div className="review-title">
        <h2>Here's what our fans are saying about us:</h2>
      </div> */}
      <Row
        style={{
          marginTop: `88px`,
          paddingTop: '11%',
        }}
      >
        <Col
          xs={{ span: 15, offset: 3 }}
          sm={{ span: 15, offset: 3 }}
          md={{ span: 6, offset: 4 }}
          lg={{ span: 6, offset: 4 }}
        >
          <img
            src={blueDesign2}
            className="blueDesign2"
            style={{ width: `25%` }}
          />
          <div className="review">
            <img src={photo} />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <img
            src={blueDesign}
            className="blueDesign"
            style={{ width: `25%` }}
          />
        </Col>

        <Col
          xs={{ span: 15, offset: 4 }}
          sm={{ span: 15, offset: 3 }}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 2 }}
        >
          <img
            src={blueDesign2}
            className="blueDesign2"
            style={{ width: `25%` }}
            alt="imageDesign"
          />
          <div className="review">
            <img src={photo} />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <img
            src={blueDesign}
            className="blueDesign"
            style={{ width: `25%` }}
            alt="imageDesign"
          />
        </Col>

        <Col
          xs={{ span: 5, offset: 10 }}
          sm={{ span: 5, offset: 10 }}
          md={{ span: 5, offset: 10 }}
          lg={{ span: 3, offset: 10 }}
        >
          <img src={arrows} style={{ width: `100%`, marginBottom: `38%` }} />
        </Col>
      </Row>
    </div>
  );
}

export default Review;
