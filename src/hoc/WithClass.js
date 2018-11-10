import React from 'react';

const withClass = (props) => {
  return (<div className={props.styles}>
    {props.children}
    </div>
  );
}

export default withClass;
