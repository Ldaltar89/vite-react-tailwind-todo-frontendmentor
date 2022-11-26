import React from "react";

const TodoCompute = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className=" flex justify-between rounded-b bg-white py-4 px-4 transition-all duration-1000 dark:bg-gray-800">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Complete
      </button>
    </section>
  );
};

export default TodoCompute;
