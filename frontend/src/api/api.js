import axios from "axios";

const API_URL = "http://localhost:3001/todos/";

const MESES = [
  { id: 1, value: "Jan" },
  { id: 2, value: "Fev" },
  { id: 3, value: "Mar" },
  { id: 4, value: "Avr" },
  { id: 5, value: "Mai" },
  { id: 6, value: "Jun" },
  { id: 7, value: "Jul" },
  { id: 8, value: "Ago" },
  { id: 9, value: "Set" },
  { id: 10, value: "Out" },
  { id: 11, value: "Nov" },
  { id: 12, value: "Dez" },
];
const ANHOS = [
  { id: 2019, value: "2019" },
  { id: 2020, value: "2020" },
  { id: 2021, value: "2021" },
];

async function getAllTodos() {
  const res = await axios.get(API_URL);
  const allTodos = res.data.map(
    ({ id, month, year, date, description, done }) => {
      return { id, month, year, date, description, done };
    }
  );
  return allTodos;
}
async function getYear(year, month) {
  const response = await axios.get(`${API_URL}?year=${year}&month=${month}`);
  console.log(response.data);
  return response.data.sort((a, b) => a.day - b.day);
}

export { getAllTodos, ANHOS, MESES, getYear };
