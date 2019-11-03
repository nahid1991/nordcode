import React, {Component} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {BASE_URL, API_PATH} from "../constants";
import axios from 'axios';

class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: null
    }
  }

  onTitleChangeHandler = (event) => {
    this.setState({title: event.target.value});
  };

  onUploadHandler = (event) => {
    if(event.target.files[0].type !== 'image/jpeg' && event.target.files[0].type !== 'image/png'
      && event.target.files[0].type !== 'image/gif') {
      event.target.value = "";
      alert("Error: File extensions allowed are: jpeg, jpg, png, gif!");
      return;
    }

    if((event.target.files[0].size/1024/1024).toFixed(2) > 5) {
      alert("Warning: Max file size is 5 MB!");
      event.target.value = "";
      return;
    }
    this.setState({image: event.target.files[0]})
  };

  uploadImage = (event) => {
    event.preventDefault();
    let data = new FormData();
    data.append('title', this.state.title);
    data.append('image', this.state.image);
    axios.post(BASE_URL+API_PATH+'/images/upload', data).then((response) => {
      if (response.status === 200) {
        window.location.href = "/";
      }
    }).catch((err) => {
      if(err.response.status === 422) {
        alert(err.response.data.errors.title[0]);
      } else {
        alert("something in the backend went wrong!");
      }
    });
  };

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Form onSubmit={this.uploadImage}>
              <Row>
                <Col xs="5" lg="5">
                  <Form.Control placeholder="Title" required value={this.state.title} onChange={this.onTitleChangeHandler}/>
                </Col>
                <Col xs="5" lg="5">
                  <Form.Control type="file" className="btn btn-light" required onChange={this.onUploadHandler}/>
                </Col>
                <Col xs="2" lg="2">
                  <Button type="submit">Upload</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UploadForm;