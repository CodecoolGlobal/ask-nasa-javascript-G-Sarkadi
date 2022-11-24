import './App.css';
import Title from './Title';
import Card from './Card';
import DateInput from './DateInput';
import { useState } from 'react';

function App() {
  // const [currDate, setCurrDate] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const newDate = new Date();
  let currentDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;

  let date = currentDate;

  console.log("currdate " + currentDate)
  console.log("selected date " + selectedDate)
  
  return (
    <>
      <div className="container">
        <Title />
        <DateInput date={selectedDate} currentDate={currentDate} setSelectedDate={setSelectedDate}/>
        <Card date={selectedDate}/>
      </div>
      <footer>
        2022, Sarkadi Gergely
      </footer>
    </>
  );
}

export default App;
