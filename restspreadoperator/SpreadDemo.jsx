import React from 'react';

function SpreadDemo() {

  const props = { name: "Adesh", lname: "Kanthali" };

  return (

    <div>
      <p>Parent Component</p>
      <ChildComponent {...props} />
    </div>

  );
}


function ChildComponent({ name, lname }) {

  return (

    <div>
      <p>Child Component:- {name} {lname}</p>
    </div>

  );
}

export default SpreadDemo;