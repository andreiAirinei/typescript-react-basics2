import React, { useReducer } from "react";

type Actions =
  | { type: "add"; text: string }
  | {
    type: "remove";
    idx: number;
  };

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, i) => action.idx !== i);
    default:
      return state;
  }
};

export const ReducerExample: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      {todos.map(todo => (
        <>
          <h4>todo.text</h4>
          <h5>todo.complete</h5>
        </>
      ))}
      <button
        onClick={() => {
          dispatch({ type: "add", text: "..." });
        }}
      >
        +
      </button>
    </div>
  );
};