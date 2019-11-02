import React, {Component} from 'react';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import {Container} from "react-bootstrap";
import './App.css';
import axios from 'axios';
import {BASE_URL, API_PATH} from "./constants";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: null
    }
  }

  getPageNumber = () => {
    const query = new URLSearchParams(this.props.location.search);
    return query.get('page') == null ? 1 : query.get('page');
  };

  getData = async () => {
    const page = this.getPageNumber();
    let response = await axios.get(BASE_URL + API_PATH + '/images', {
      params: {
        page: page
      }
    });
    this.setState({images: response.data});
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      this.getData();
    }
  }

  render() {
    return (
      <div className='App'>
        <Container>
          <Header/>
          <Gallery images={this.state.images}/>
        </Container>
      </div>
    );
  }
}

export default App;
