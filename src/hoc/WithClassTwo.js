import React,{Component} from 'react';

// const withClassTwo = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

const withClassTwo = (WrappedComponent, className) => {
  const WithClassTwo =class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent  ref={this.props.forwardedRef}{...this.props}/>
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithClassTwo {...props} forwardedRef={ref}/>;
  });
}

export default withClassTwo;
