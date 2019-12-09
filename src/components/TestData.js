import React, { useState, useEffect } from "react";
import axios from "axios";

export function TestData(props) {
  const [data, setData] = useState();

  /*fetch('http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv')
      .then(response => response.json())
      .then(data => setData({ data }));*/

  /*useEffect(async () => {
    const result = await axios(
      'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv',
    );
    setData(csvJSON(result.data));
  }, []);*/

  //console.log(data);

  //console.log(typeof data);

  //const output=csvJSON(data);
  //console.log(JSON.stringify(output));

  return <h1>hi</h1>;
}

function csvJSON(csv) {
  var lines = csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}
