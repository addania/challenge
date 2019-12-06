import React from 'react';
import { Bootstrap, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from "./components/Header.js";
import { Field } from "./components/Field.js";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Field />
      </Container>
    </div>
  );
}

export default App;
