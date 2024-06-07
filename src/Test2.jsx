import React, { useEffect, useState } from 'react';

function Test2() {
  const [state, setState] = useState({ count: 0, occupation: 'Student' });

  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }  

  useEffect (() => {
    window.addEventListener('resize', handleResize)
  }, [])
  

  const increment = () => {
    setState((prevState) => ({
      ...prevState, occupation: 'Worker', count: prevState.count + 1
    }));
  };

  // const increment = () => {
  //   setState((prevState) => ({
  //     ...prevState, occupation: 'Worker', count: prevState.count + 1
  //   }));
  // };

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Occupation: {state.occupation}</p>
      <button onClick={increment}>Increment</button>
      <hr />
      <div>
       {windowWidth}
      </div>
    </div>
  );

}
export default Test2