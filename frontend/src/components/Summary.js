import React from "react";
import css from "./summary.module.css";

export default function Summary({ todos }) {
  const doneQTY = todos.filter(({ done }) => done === true).length;
  const todoQTY = todos.filter(({ done }) => done === false).length;
  const allTasks = todos.length;

  return (
    <div className={css.text}>
      <div className={css.summary}>
        <div>
          <span>Total Tasks:</span>
          <span className={css.allTasks}>{allTasks}</span>
        </div>
        <div>
          <span>Tasks done:</span>
          <span className={css.done}>{doneQTY}</span>
        </div>
        <div>
          <span>Tasks to-do:</span>
          <span className={css.todo}>{todoQTY}</span>
        </div>
      </div>
    </div>
  );
}
