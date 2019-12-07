import React from 'react';
import { Container } from "react-bootstrap";
import './App.css';
import data from "./data/DAMKBAoDBwoDBAkOBAYFCw.csv"
import { Header } from "./components/Header.js";
import { Subheader } from "./components/Subheader.js";
import { Field } from "./components/Field.js";

function App() {

  
   
  return (
    <div className="App">
      <Container>
        <Header />
        <Subheader />
        <Field />
        <h1>{data}</h1>

      </Container>
    </div>
  );
}

export default App;
