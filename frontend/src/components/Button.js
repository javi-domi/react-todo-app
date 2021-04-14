import React from "react";
import css from "./button.module.css";
export default function Button({ onActionClick, id, children }) {
  const handleButtonClick = () => {
    onActionClick(id);
  };
  return (
    <button className={css.button} onClick={handleButtonClick}>
      {children}
    </button>
  );
}
