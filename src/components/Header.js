import React from 'react'

function Header({children}) {
  return (
    <header>
      <h2>{children}</h2>
    </header>
  );
}

export default Header;
