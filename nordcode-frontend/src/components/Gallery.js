import React, {Component} from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {BASE_URL} from '../constants';
import Pagination from "./Pagination";
import UploadForm from "./UploadForm";

class Gallery extends Component {
  render() {
    const {images} = this.props;
    let renderGallery = () => {
      if (images !== null) {
        return images.data.map(function(image, i) {
          return (<Col xs="6" lg="4" key={i}>
            <Card>
              <Card.Img variant="top"
                        src={BASE_URL+image.link}/>
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Link to={"/image/"+image.id} className="btn btn-primary">View</Link>
              </Card.Body>
            </Card>
          </Col>)
        })
      }
    };

    let renderPagination = () => {
      if (images !== null) {
        let pageInformation = {
          "nextPageUrl": images.next_page_url,
          "prevPageUrl": images.prev_page_url,
          "currentPage": images.current_page,
          "lastPage": images.last_page
        };
        return (<div>
          {images.next_page_url === null && images.prev_page_url === null ? null : <Pagination pageInformation={pageInformation}/>}
        </div>);
      }
    };

    return (
      <div>
        <UploadForm/>
        <Row style={{"height": "2rem"}}/>
        <Row>
          {renderGallery()}
        </Row>
        <Row style={{"height": "2rem"}}/>
        {renderPagination()}
        <Row style={{"height": "5rem"}}/>
      </div>
    );
  }
}

export default Gallery;