import React from "react";
import Button from "./Button";

export default function ButtonContainer({ dataSource, onDataSelectedClick }) {
  const handleActionClick = (id) => {
    onDataSelectedClick(id);
  };

  return (
    <div>
      {dataSource.map((data) => (
        <Button onActionClick={handleActionClick} id={data.id} key={data.id}>
          {data.value}
        </Button>
      ))}
    </div>
  );
}
