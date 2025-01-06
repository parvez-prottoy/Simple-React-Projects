import { useEffect } from "react";
import { useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="text-4xl text-center py-4 border mt-4 rounded-md bg-slate-50  lg:w-1/2 mx-auto w-[90%]">
      <span className="bg-slate-200 inline-block p-4 rounded-lg">
        {time.toLocaleTimeString()}
      </span>
      <p>
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default DigitalClock;
