import React from 'react';

function Header() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <>
      <h1>React List Rendering</h1>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Header;
