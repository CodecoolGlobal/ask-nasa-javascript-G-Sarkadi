import './App.css';
import Card from './components/Card';
import DateInput from './components/DateInput';
import { useState } from 'react';

function App() {
  const [selectedDate, setSelectedDate] = useState("");

  function calculateToday() {
    const newDate = new Date();
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
  }

  let today = calculateToday();

  return (
    <>
      <div className="container">
        <h1>Astronomy Picture of the Day</h1>
        <DateInput selectedDate={selectedDate} today={today} setSelectedDate={setSelectedDate} />
        <Card date={selectedDate === "" ? today : selectedDate} />
      </div>
      <footer>
        © 2022 NASA | Sarkadi Gergely
      </footer>
    </>
  );
}

export default App;
