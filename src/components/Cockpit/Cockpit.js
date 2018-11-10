import React from 'react';
import styles from './Cockpit.module.css';
import Aux from './../../hoc/Aux';

const cockpit = (props) => {

  let assignedClasses = [];
  //let btnClass = '';
  let btnClass = styles.Button;

  if(props.showPersons) {
    //btnClass = styles.Red;
    btnClass = [styles.Button, styles.Red].join(' ');
  }

  if(props.persons.length <=1) {
    assignedClasses.push(styles.red);
  }
  if(props.persons.length === 0) {
    assignedClasses.push(styles.bold);
  }

  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>Work Harder</p>
      <button
      className = {btnClass}
      //onClick={() => this.switchNameHandler('PrimoModoDiGestireLaCosa')}>Switch name</button> // this was the method to change the name on the first person
      onClick={props.click}>Hide persons</button>
      <button onClick={props.login}> login </button>
    </Aux>
  );
};

export default cockpit;
