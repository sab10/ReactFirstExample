import React,{PureComponent} from 'react';
import ErrorBoundary from './../../ErrorBoundary/ErrorBoundary.js';
import Person from './Person/Person.js';

class Persons extends PureComponent {
  constructor (props) {
    super(props);
    console.log('Constructor persons js');
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('Component will mount method persons js');
  }

  componentDidMount() {
    console.log('Component did mount persons js');
    this.lastPersonRef.current.focusInput();
  }

  componentWillReceiveProps(nextProps) {
    console.log('Persons will update with props: ', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Persons started shouldComponentUpdate method', nextProps, nextState);
  //   //return nextProps.persons!== this.props.persons;
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('Persons started componentWillUpdate method', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Persons started componentDidUpdate');
  }

  render () {
    console.log('Render persons js');
    return this.props.persons.map((person, index) => {
     return (
       <ErrorBoundary key={person.id}>
     <Person
       click= {() => this.props.clicked(index)}
       name={person.name}
       position={index}
       age={person.age}
       ref={this.lastPersonRef}
       changed={(event) => this.props.changed(event, person.id)}/>
     </ErrorBoundary> )
   });
  }
}

export default Persons;
