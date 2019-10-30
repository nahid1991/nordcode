import React, {Component} from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Gallery extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs lg="4">
            <Card>
              <Card.Img variant="top"
                        src="https://cdn.pixabay.com/photo/2019/10/25/10/13/sunflower-4576573_960_720.jpg"/>
              <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Link to="/image/1" className="btn btn-primary">View</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="4">
            <Card>
              <Card.Img variant="top"
                        src="https://cdn.pixabay.com/photo/2019/10/25/10/13/sunflower-4576573_960_720.jpg"/>
              <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Link to="/image/1" className="btn btn-primary">View</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="4">
            <Card>
              <Card.Img variant="top"
                        src="https://cdn.pixabay.com/photo/2019/10/25/10/13/sunflower-4576573_960_720.jpg"/>
              <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Link to="/image/1" className="btn btn-primary">View</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="4">
            <Card>
              <Card.Img variant="top"
                        src="https://cdn.pixabay.com/photo/2019/10/25/10/13/sunflower-4576573_960_720.jpg"/>
              <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Link to="/image/1" className="btn btn-primary">View</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Gallery;