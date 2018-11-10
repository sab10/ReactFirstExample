import React, { PureComponent } from 'react';
import styles from './App.module.css';
//import Radium, {StyleRoot } from 'radium';
//import Person from './../components/Persons/Person/Person';
//import ErrorBoundary from './../ErrorBoundary/ErrorBoundary.js'
import Persons from './../components/Persons/Persons.js';
import Cockpit from './../components/Cockpit/Cockpit.js';
//import WithClass from './../hoc/WithClass';
import withClassTwo from './../hoc/WithClassTwo';
import Aux from './../hoc/Aux';

export const AuthContext = React.createContext(false);



class App extends PureComponent { // we will refer to this app js file as container because it contains some state of the application inside of it
  // the next command works only on the class that extends Component
  constructor(props) {
    super(props);
    console.log('Constructor of app js', props);
    this.state = {
      persons:[
        { id: 'blabla', name:'Sabin', age: 20},
        { id: 'bleble', name:'BleBle', age: 1}
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log('Component will mount method app js');
  }

  componentDidMount() {
    console.log('Component did mount app js')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('App started shouldComponentUpdate method', nextProps, nextState);
  //   //return true;
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('App started componentWillUpdate method', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('App started componentDidUpdate');
  }

  // state = {
  //   persons:[
  //     { id: 'blabla', name:'Sabin', age: 20},
  //     { id: 'bleble', name:'BleBle', age: 1}
  //   ],
  //   showPersons: false
  // };

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
    this.setState((prevState, props) => {
      return {showPersons : !doesShow,
       toggleClicked: prevState.toggleClicked+1}
     }
   );// this method of mutating state is the best option if you need to change it using the previous one
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // the slice function without parameters simply copy the array into che new on, and we do this because without it the const will receive only a pointer
    // I wil write another method to copy the array
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  loginHandler = () => {
    this.setState({authenticated : true});
  }

  render() {
    console.log('Render app js');

    // const style = {
    //     backgroundColor: 'green',
    //     color: 'black',
    //     font: 'inherit',
    //     border: 'none',
    //     padding: '8px',
    //     cursor: 'pointer',
    //     borderRadius: '6px',
    //     outline: 'none',
    //     // ':hover': {
    //     //   backgroundColor: 'lightgreen',
    //     //   color: 'white'
    //     // }
    // };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        // {this.state.persons.map((person, index) => {
        //   return (
        //     <ErrorBoundary key={person.id}>
        //   <Person
        //     click= {() => this.deletePersonHandler(index)}
        //     name={person.name}
        //     age={person.age}
        //     changed={(event) => this.nameChangedHandler(event, person.id)}/>
        //   </ErrorBoundary> )
        // })}
        <div>
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
        />


        </div>
      );
      //style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   color: 'white'
      // };

    }




    return (
      <Aux>
      <button onClick = { () => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          title = {this.props.title}
          persons = {this.state.persons}
          click ={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          login={this.loginHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    );
    // if I write switchNameHandler() with the parenteses the method will be executed automaticaly when the page appear even if I don't have pressed the button, instead we will write without to have only a reference to the function

    //return React.createElement('div', null, 'h1', 'Hi bitch');   // this line here render inside a <div> 2 strings, 'h1' and the last offline
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi bitch')); // in this line we have also changed the null with a javascript object that links to the 'App' css class
  }
}

export default withClassTwo(App, styles.App);
