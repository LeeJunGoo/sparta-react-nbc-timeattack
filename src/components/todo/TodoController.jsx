import { useContext, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoContextProvider } from "../../context/TodoContext";

const TodoController = () => {
  const { todos, setTodos } = useContext(TodoContextProvider);
  const { sortOrder, setSortOrder } = useContext(TodoContextProvider);

  const onChangeSortOrder = (e) => {
    const nextSortOrder = e.target.value;
    setSortOrder(nextSortOrder);
  };

  useEffect(() => {
    if (sortOrder === "asc") {
      const date = todos.map((item) => {
        return new Date(item.limit);
      });

      date.sort((a, b) => a - b);

      // setTodos();

      // SECTION: 3-1번 문제
      // TODO: 투두 리스트 오름차순 정렬
      // NOTE: sort 메서드를 사용하여 `limit`을 기준으로 오름차순 정렬 후 setTodos로 업데이트
      // HINT: `new Date(todo.limit)`을 사용하여 정렬
      return;
    } else {
      set;
      const date = todos.map((item) => {
        return new Date(item.limit);
      });

      date.sort((a, b) => b - a);

      // setTodos();

      // SECTION: 3-2번 문제
      // TODO: 투두 리스트 내림차순 정렬
      // NOTE: sort 메서드를 사용하여 `limit`을 기준으로 내림차순 정렬 후 setTodos로 업데이트
      // HINT: `new Date(todo.limit)`을 사용하여 정렬
    }
  }, [sortOrder]);

  const workingTodos = todos.filter((todo) => !todo.completed);
  const doneTodos = todos.filter((todo) => todo.completed);

  return (
    <main>
      <TodoForm />
      <div>
        <select onChange={onChangeSortOrder} value={sortOrder}>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </div>
      <TodoList headTitle="Working!" todos={workingTodos} />
      <TodoList headTitle="Done!" todos={doneTodos} />
    </main>
  );
};

export default TodoController;
