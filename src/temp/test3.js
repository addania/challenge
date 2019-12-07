import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import './App.css';
//import { csv } from "d3";
import { Header } from "./components/Header.js";
import { Subheader } from "./components/Subheader.js";
import { Field } from "./components/Field.js";
//import { converter } from "./test.js"

import withRouter(DataController) from "./controller.js";
import Papa from 'papaparse'




function App() {

   const [rows, setRows] = useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch('/data.csv')
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const rows = results.data // array of objects
      setRows(rows)
    }
    getData()
  }, [])
  
console.log(rows);

  return (
    <div className="App">
      <Container>
        <Header />
        <Subheader />
        <Field />
       <DataController/>

      </Container>
    </div>
  );
}

export default App;

function go(){

  var csvFilePath = require("./data.csv");
  var Papa = require("papaparse/papaparse.min.js");
  Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      // Here this is also available. So we can call our custom class method
      complete: updateData
    });
  
  
  function updateData(result){
  const data = result.data;

    return {data: data};
  }
}