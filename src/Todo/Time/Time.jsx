import { useState, useEffect } from "react";
import "./Time.css";

// export default function Time() {
//   return div (

//   )
// }

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-container"> 
    <p className="time-text">The Current Time is: </p>
    <div className="time">{time}</div>
    </div>
   
  );
  
     
};

export default Time;