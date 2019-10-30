import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Image extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs md={{span: 6, offset: 1}}>
              <Card style={{"width": "50rem"}}>
                <Card.Img variant="top"
                          src="https://cdn.pixabay.com/photo/2019/10/25/10/13/sunflower-4576573_960_720.jpg"/>
                <Card.Body>
                  <Card.Title>Image Title</Card.Title>
                  <Link to="/" className="btn btn-danger">Delete</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Image;