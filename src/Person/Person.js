import React from 'react';
import './Person.css';
//import Radium from 'radium';

const person = (props) => {
  // return <p> Ciao coso  ho {Math.floor(Math.random()*30)} anni</p>

// const style = {
//   '@media (min-width: 500px)' : {
//     width: '450px'
//   }
// };

  return (
    <div className="Person" >
    <p onClick={props.click}> Ciao coso sono {props.name} ho {props.age} anni</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};



export default person;
