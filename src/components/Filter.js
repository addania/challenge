import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

export function Filter({ styling, filterColumns, onChange }) {

  const [selectedValues, setSelectedValues] = useState();
  console.log("filterColumns", filterColumns);
  const columns=[];
 

  
  for(let item=0;item<filterColumns.length;item++ ){
    //debugger;
    columns.push(<button key={item} name={filterColumns[item]} onClick={()=>onclick(filterColumns[item])}>{filterColumns[item]}</button>)
    console.log("columns", columns);
  };
  console.log("columns", columns);


  const options = [
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
];

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

/*function handleChange(e, data){
  setSelectedValues(data.value);
  console.log(data.value)
}**/

  return (
    <div>  
      <h2 style={styling}>
        Selected values are: {selectedValues}
      </h2>
      {columns}

      <Dropdown style={styleLink} placeholder='Skills' fluid multiple selection options={options} onChange={onChange} />

    </div>
  );
}
