import Header from "./components/layout/Header";
import TodoController from "./components/todo/TodoController";
import TodoContext from "./context/TodoContext";

const App = () => {
  return (
    <>
      <TodoContext>
        <Header />
        <TodoController />
      </TodoContext>
    </>
  );
};

export default App;
