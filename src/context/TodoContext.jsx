import { createContext } from "react";
import { useState } from "react";
import { defaultTodos } from "../static/todos";
export const TodoContextProvider = createContext();

// SECTION: 4번 문제
// TODO: TodoProvider 컴포넌트 작성
// NOTE: `TodoContext.Provider` 컴포넌트로 `props.children`을 감싸서 반환
// HINT: `props`로 `value`를 전달

function TodoContext({ children }) {
  const [todos, setTodos] = useState(defaultTodos);
  const [sortOrder, setSortOrder] = useState("asc");

  const onSubmitTodo = (nextTodo) => {
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
  };

  // SECTION: 2-1번 문제
  // TODO: 투두 리스트 삭제
  // NOTE: filter 메서드를 사용하여 삭제할 아이템을 제외한 나머지 아이템만 반환 후 setTodos로 업데이트
  // HINT: `id`와 `todo.id`가 일치하지 않는 아이템만 반환
  const onDeleteTodoItem = (id) => {
    const FilterTodo = todos.filter((item) => (item.id !== id ? true : false));

    setTodos(FilterTodo);
  };

  // SECTION: 2-2번 문제
  // TODO: 투두 리스트 completed(완료) 상태를 토글
  // NOTE: map 메서드를 사용하여 특정 아이템의 completed 상태를 토글 후 setTodos로 업데이트
  // HINT: `id`와 `todo.id`가 일치하는 아이템의 completed 상태를 토글
  const onToggleTodoItem = (id) => {
    //해당 id 찾기
    const FilterToggle = todos.find((item) => (item.id === id ? true : false));
    //해당 id의 상태 반전 시키기
    FilterToggle.completed = !FilterToggle.completed;
    //상태 변환 값 대입
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === FilterToggle.id) {
          return FilterToggle;
        } else {
          return item;
        }
      });
    });
  };

  return (
    <TodoContextProvider.Provider
      value={{
        todos,
        setTodos,
        sortOrder,
        setSortOrder,
        onSubmitTodo,
        onDeleteTodoItem,
        onToggleTodoItem,
      }}
    >
      {children}
    </TodoContextProvider.Provider>
  );
}

export default TodoContext;
