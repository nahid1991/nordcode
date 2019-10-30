import React from 'react';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import {Container} from "react-bootstrap";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Container>
        <Header/>
        <Gallery/>
      </Container>
    </div>
  );
}

export default App;
