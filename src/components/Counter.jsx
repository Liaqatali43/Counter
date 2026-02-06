import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((inc) => inc + 1);
  };

  const decreaseCount = () => {
    setCount((dec) => dec - 1);

    {
      count <= 0 ? setCount(0) : count;
    }
  };

  const handleClear = () => {
    setCount((count) => (count = 0));
  };

  return (
    <div>
      <div className="container  flex justify-center items-center">
        <div className="w-[40rem] h-[30rem] sm:w-[30rem] shadow-2xl rounded-2xl flex justify-center items-center flex-col gap-10 bg-white my-28">
          <div className="text-xl w-52 h-10 flex justify-center items-center rounded-sm bg-green-200 font-bold">
            Count {count}
          </div>
          <div className="flex gap-10">
            <button
              className="w-20 h-10  rounded-[6px] text-xl bg-sky-400 hover:bg-sky-500"
              onClick={increaseCount}
            >
              Inc
            </button>
            <button
              className="w-20 h-10  rounded-[6px] text-xl bg-sky-400 hover:bg-sky-500"
              onClick={decreaseCount}
            >
              Dec
            </button>
          </div>
          <div
            className="w-28 h-10  rounded-[6px] text-xl bg-red-500 hover:bg-red-600 flex justify-center items-center"
            onClick={handleClear}
          >
            Clear All
          </div>
        </div>
      </div>
    </div>
  );
};
