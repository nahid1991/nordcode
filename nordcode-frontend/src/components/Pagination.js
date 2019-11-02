import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, ButtonGroup, Col} from "react-bootstrap";

class Pagination extends Component {
  render() {
    const {pageInformation} = this.props;

    return (
      <div className="d-flex flex-column" style={{"top": "5rem"}}>
        <Col xs="12" lg="12">
          <ButtonGroup size="lg" className="mt-auto">
            <Button as={pageInformation.currentPage !== 1 ? Link : Button} to={"/?page=1"}
                    disabled={pageInformation.currentPage === 1}>First</Button>
            {pageInformation.prevPageUrl !== null ? <Button as={Link}
                                                            to={"/?page=" + (parseInt(pageInformation.currentPage) - 1)}>Previous</Button> : null}
            <Button disabled>{pageInformation.currentPage}</Button>
            {pageInformation.nextPageUrl !== null ? <Button as={Link}
                                                            to={"/?page=" + (parseInt(pageInformation.currentPage) + 1)}>Next</Button> : null}
            <Button as={pageInformation.currentPage !== pageInformation.lastPage ? Link : Button}
                    to={"/?page=" + pageInformation.lastPage}
                    disabled={pageInformation.currentPage === pageInformation.lastPage}>Last</Button>
          </ButtonGroup>
        </Col>
      </div>
    );
  }
}

export default Pagination;