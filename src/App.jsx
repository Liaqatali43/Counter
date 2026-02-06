import { Display } from "./components/UI/Display";
import { Button } from "./components/Button";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((pre) => pre + 1);
  };

  const handleDecrease = () => {
    setCount((pre) => pre - 1);
    {
      count === 0 ? setCount(0) : count;
    }
  };
  const handleClearAll = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="container flex justify-center items-center my-40">
        <div className="w-[60vh] h-[50vh]  rounded bg-white shadow-2xl  flex justify-center items-center flex-col gap-4">
          <div>
            <Display count={count} />
          </div>
          <div className="flex">
            <Button
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleClearAll={handleClearAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
