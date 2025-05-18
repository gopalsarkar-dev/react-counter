const App = () => {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="bg-white dark:bg-gray-50 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div className="grid place-items-center gap-3">
            <div className="text-2xl">React Counter</div>
            <div className="text-3xl">0</div>
            <div className="flex gap-2">
              <button className="p-1 px-2 bg-neutral-300 rounded-sm w-24">
                Increnent
              </button>
              <button className="p-1 px-2 bg-neutral-300 rounded-sm w-24">
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
