import './App.css';
import Card from './Card';
import DateInput from './DateInput';
import { useState } from 'react';

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const newDate = new Date();
  let currentDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
  
  return (
    <>
      <div className="container">
        <h1>Astronomy Picture of the Day (by NASA)</h1>
        <DateInput date={selectedDate} currentDate={currentDate} setSelectedDate={setSelectedDate}/>
        <Card date={selectedDate ?? currentDate}/>
      </div>
      <footer>
        2022, Sarkadi Gergely
      </footer>
    </>
  );
}

export default App;
