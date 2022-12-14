import { useState } from "react";
import Header from "./components/Header";
import TodoCompute from "./components/TodoCompute";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialize = [
  {
    id: 1,
    title: "Complete online JavaScript",
    completed: true,
  },
  {
    id: 2,
    title: "Go to the gym",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: true,
  },
  {
    id: 4,
    title: "Pick up groceries",
    completed: false,
  },
  {
    id: 5,
    title: "Complete todo app on Fronted Mentor",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialize);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("active");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filteredTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        <TodoCompute
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center dark:text-gray-400">
        Drag and Drop to reorder list
      </footer>
    </div>
  );
};

export default App;
