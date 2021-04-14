import React, { useEffect, useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import Summary from "./components/Summary";
import ToDos from "./components/ToDos";
import * as api from "./api/api";

export default function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setSelectedMonth] = useState();

  useEffect(() => {
    const getbyDate = async () => {
      console.log(selectedYear);
      console.log(selectedMonth);
      const data = await api.getYear(selectedYear, selectedMonth);
      console.log(data);
      setAllTodos(data);
    };
    if (selectedYear > 0 && selectedMonth > 0) {
      getbyDate();
    }
  }, [selectedYear, selectedMonth]);

  const handleSelectedYear = (id) => {
    console.log(id);
    setSelectedYear(id);
  };
  const handleSelectedMonth = (id) => {
    console.log(id);
    setSelectedMonth(id);
  };
  return (
    <div className="container center">
      <h1 className="center">React ToDo App</h1>
      <ButtonContainer
        onDataSelectedClick={handleSelectedYear}
        dataSource={api.ANHOS}
      />
      <ButtonContainer
        onDataSelectedClick={handleSelectedMonth}
        dataSource={api.MESES}
      />
      <Summary todos={allTodos} />
      <h2 className="center">Selecciona mes y año para ver tus tareas...</h2>
      <ToDos todos={allTodos} />
    </div>
  );
}
