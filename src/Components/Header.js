import React from 'react';

function Header(props) {

  return (
    <header>
      <img
        src = {props.proptimusLogo}
        alt = "logo"
        onClick = {() => props.toggleState()}
      />
    </header>
  );
}

export default Header;
