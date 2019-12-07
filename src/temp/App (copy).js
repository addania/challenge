import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import './App.css';
//import { csv } from "d3";
import { Header } from "./components/Header.js";
import { Subheader } from "./components/Subheader.js";
import { Field } from "./components/Field.js";
//import { converter } from "./test.js"





function App() {

  const [data, setData]=useState([]);
  
  //const output = go();

  useEffect( () => {

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
  const dataY = result.data;
    setData({dataY});
  }
  }, [2] );

  console.log(data);
  console.log(Array.isArray(data.dataY));
  const arr=data.dataY;
  //debugger;
  console.log("arr is:",arr);
  const len=(arr.length);
  console.log(len);
  //for (let i=0;i<3; i++){
  //  const a=data.dataY[i];
  //  console.log(a);
 // }
  //const arr1=arr[0];
  //console.log("arr 1is:",arr1);

  return (
    <div className="App">
      <Container>
        <Header />
        <Subheader />
        <Field />


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