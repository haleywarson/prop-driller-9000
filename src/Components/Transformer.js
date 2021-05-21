import React from 'react';

function Transformer(props) {

  return (
    <img
      className = 'transformer'
      src = {props.proptimi.url}
      alt = {props.proptimi.name}
    />
  );
}

export default Transformer;
