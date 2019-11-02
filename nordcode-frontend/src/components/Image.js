import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import {API_PATH, BASE_URL} from "../constants";
import Header from "./Header";

class Image extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    let response = await axios.get(BASE_URL + API_PATH + '/images/'+id);
    this.setState({image: response.data});
  }

  render() {
    const {image} = this.state;

    let renderImage = () => {
      if (image !== null) {
        document.title = image.title;
        return (<Card className="text-center">
          <Card.Body>
            <Card.Title>{image.title}</Card.Title>
          </Card.Body>
          <Card.Img variant="top"
                    src={BASE_URL+this.state.image.link}/>
        </Card>)
      }
    };

    return (
      <div className="App">
        <Container>
          <Header/>
          <Row>
            <Col xs={{span: "8", offset: "2"}} lg={{span: "8", offset: "2"}}>
              {renderImage()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Image;