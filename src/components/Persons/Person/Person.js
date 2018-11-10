import React,{Component} from 'react';
import styles from './Person.module.css';
//import Radium from 'radium';
//import WithClass from './../../../hoc/WithClass';
import withClassTwo from './../../../hoc/WithClassTwo';
import Aux from './../../../hoc/Aux';
import PropTypes from 'prop-types';
import {AuthContext} from './../../../containers/App'


class Person extends Component {
  constructor (props) {
    super(props);
    console.log('Constructor person js');
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('Component will mount method person js');
  }

  componentDidMount() {
    console.log('Component did mount person js');
    // if(this.props.position === 0)
    //   this.inputElement.focus(); // this ref and focus method is not used to style and render stuff normally
    //this.focusInput();
  }

  focusInput() {
    //if(this.props.position === 0)
      this.inputElement.current.focus();
  }

  render () {
    console.log('Render person js');
    return (
      <Aux>
      <AuthContext.Consumer>
      {auth => auth ? <p>Authenticated</p> : <p> not authenticated </p>}
      </AuthContext.Consumer>
      <p onClick={this.props.click}> Ciao coso sono {this.props.name} ho {this.props.age} anni</p>
      <p>{this.props.children}</p>
      <input
        ref={this.inputElement}
        type="text"
        onChange={this.props.changed}
        value={this.props.name}/>
      </Aux>
    );

    // return [
    //   <p key="1" onClick={this.props.click}> Ciao coso sono {this.props.name} ho {this.props.age} anni</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]
  };
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}


export default withClassTwo(Person, styles.Person);
