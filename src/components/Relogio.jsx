import React, { useState, useEffect } from 'react';

function Relogio() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      <h3 class='let'>{time}</h3>
    </div>
  );
}

export default Relogio;