import React from 'react';

export function List(props) {
  
  return (
    <li>
     {props.message}
        <span style={props.styling}>
          {props.columns}
        </span>
    </li>              
  );
}

