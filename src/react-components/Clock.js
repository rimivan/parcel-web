/* eslint-disable require-jsdoc */
import * as React from 'react';

const Clock = (props) => {
  const [date, setDate] = React.useState(new Date());

  // Replaces componentDidMount and componentWillUnmount
  React.useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export {Clock};

