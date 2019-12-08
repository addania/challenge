import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

export function Filter({ styling, filterColumns, onChange, dataSet }) {

  const [selectedValues, setSelectedValues] = useState();
  //console.log("filterColumns", filterColumns);
  const columns=[];
 

  
  /*for(let item=0;item<filterColumns.length;item++ ){
    //debugger;
    columns.push(<button key={item} name={filterColumns[item]} onClick={()=>onclick(filterColumns[item])}>{filterColumns[item]}</button>)
    console.log("columns", columns);
  };
  console.log("columns", columns);*/
  
  
  


  /*const options = [
  { key: 'angular', text: 'Angular', value: 'angular', name: "Angular"},
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
];*/

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

/*function handleChange(e, data){
  setSelectedValues(data.value);
  console.log(data.value)
}**/

  for(let item=0;item<filterColumns.length;item++ ){
    //debugger;
    const generatedOptions=[];
    const genOptions=generateOptions(filterColumns[item], dataSet);
    //console.log("genOptions", genOptions);
    columns.push(
      <div>
        <p style={{textAlign:"left", color: "#828282", marginTop: "20px"}}  >{filterColumns[item]}</p>
        <Dropdown style={styleLink} placeholder={filterColumns[item]} fluid multiple selection options={genOptions} onChange={onChange} style={{marginTop: "5px"}}/>
      </div>
      )
    //console.log("columns", columns);
  };
  //console.log("columns", columns);


  return (
    <div>  
      <h2 style={styling}>
        Filters
      </h2>
      {columns}

     {/* <Dropdown style={styleLink} placeholder='Skills' fluid multiple selection options={options} onChange={onChange} />
*/}
    </div>
  );
}

function generateOptions(inputItem, inputDataSet){
  let uniqueValues=[];
  for (let entry=0;entry<inputDataSet.length;entry++){
    if(!uniqueValues.includes(inputDataSet[entry][inputItem]) ){
      uniqueValues.push(inputDataSet[entry][inputItem]);
      //console.log("uniqueValues", uniqueValues);
    }
  }
  let newOptions=[];
  for (let optionItem=0; optionItem<uniqueValues.length;optionItem++){
    let optionRow={key: uniqueValues[optionItem], text:uniqueValues[optionItem], value: uniqueValues[optionItem]}
    newOptions.push(optionRow);
    //console.log("optionRow", optionRow);
  }
  //console.log("newOptions", newOptions)
  return newOptions;
}