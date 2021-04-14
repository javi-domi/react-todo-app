import React from "react";
import css from "./todos.module.css";

export default function ToDos({ todos }) {
  return (
    <div>
      {todos.map(({ id, date, description, done }) => (
        <div
          style={{ marginTop: "10px", padding: "1rem", textAlign: "left" }}
          className={done === true ? `${css.done}` : `${css.todo}`}
          key={id}
        >
          <span className={css.date}>{date}</span>
          <span>{description}</span>
        </div>
      ))}
    </div>
  );
}
