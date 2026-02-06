export const Button = ({ handleIncrease, handleDecrease, handleClearAll }) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 ">
        <button
          className="w-15 h-8 bg-sky-500 rounded"
          onClick={handleIncrease}
        >
          Inc
        </button>
        <button
          className="w-15 h-8 bg-sky-500 rounded"
          onClick={handleDecrease}
        >
          Dec
        </button>
      </div>
      <div className="flex justify-center p-1 text-xl mt-5 bg-red-500 hover:bg-red-600 rounded-md">
        <button onClick={handleClearAll}>clear All</button>
      </div>
    </div>
  );
};
