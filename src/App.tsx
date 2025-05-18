import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const countingFunction = (countItem: any) => {
    switch (countItem) {
      case "increment":
        setCount(count + 1);
        break;
      case "decrement":
        if (count > 0) {
          setCount(count - 1);
          break;
        }
    }
  };

  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="bg-white dark:bg-gray-50 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div className="grid place-items-center gap-3">
            <div className="text-2xl">React Counter</div>
            <div className="text-3xl">{count}</div>
            <div className="flex gap-2.5">
              <button
                onClick={() => countingFunction("increment")}
                className="p-1 px-2 bg-neutral-300 rounded-sm w-24 cursor-pointer"
              >
                Increnent
              </button>
              <button
                onClick={() => countingFunction("decrement")}
                className="p-1 px-2 bg-neutral-300 rounded-sm w-24 cursor-pointer"
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
