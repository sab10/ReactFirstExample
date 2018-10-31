import React, { Component } from 'react';
import './App.css';
//import Radium, {StyleRoot } from 'radium';
import Person from './Person/Person';


class App extends Component { // we will refer to this app js file as container because it contains some state of the application inside of it
  // the next command works only on the class that extends Component
  state = {
    persons:[
      { id: 'blabla', name:'Sabin', age: 20},
      { id: 'bleble', name:'BleBle', age: 1}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    //console.log('SWAG');
    //this.state.persons[0].name = 'Nome2'; // DON'T DO THIS

    var per = this.state.persons;
    per[0].name = newName;
    this.setState({persons : per}); // this is a solution made by me bacause with the one in the course this function resets also the second string and I don't want to

    // this.setState({persons : [
    //   { name:newName, age: 20},
    //   { name:'BleBle', age: 2}
    // ]})
  }

  nameChangedHandler = (event, id) => {
    // var per = this.state.persons;
    // per[1].name = event.target.value;
    // this.setState({persons : per});
    // this method of changing the array of person is not like in the course is modified by me because it solves an error // UPDATE: maybe it doesn't // UPDATE 2: now it works

    // new method
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]};

    //const person = Object.assign({}, this.state.persons[personIndex]); // this is another method to do the copy

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // the slice function without parameters simply copy the array into che new on, and we do this because without it the const will receive only a pointer
    // I wil write another method to copy the array
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
        backgroundColor: 'green',
        color: 'black',
        font: 'inherit',
        border: 'none',
        padding: '8px',
        cursor: 'pointer',
        borderRadius: '6px',
        outline: 'none',
        // ':hover': {
        //   backgroundColor: 'lightgreen',
        //   color: 'white'
        // }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return (
          <Person
            click= {() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/> )
        })}
        </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   color: 'white'
      // };
    }

    let classes = [];
    if(this.state.persons.length <=1) {
      classes.push('red');
    }
    if(this.state.persons.length === 0) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hey bitch</h1>
        <p className={classes.join(' ')}>AAAAAAaaaaaa</p>
        <button
        style = {style}
        //onClick={() => this.switchNameHandler('PrimoModoDiGestireLaCosa')}>Switch name</button> // this was the method to change the name on the first person
        onClick={this.togglePersonsHandler}>Hide persons</button>
        {persons}
      </div>
    );
    // if I write switchNameHandler() with the parenteses the method will be executed automaticaly when the page appear even if I don't have pressed the button, instead we will write without to have only a reference to the function

    //return React.createElement('div', null, 'h1', 'Hi bitch');   // this line here render inside a <div> 2 strings, 'h1' and the last offline
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi bitch')); // in this line we have also changed the null with a javascript on=bk=ject that links to the 'App' css class
  }
}

export default App;
