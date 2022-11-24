import './App.css';
import Title from './Title';
import Card from './Card';

function App() {
  const newDate = new Date();
  let currentDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
  let date = currentDate;

  return (
    <>
      <div className="container">
        <Title />
        <Card date={date}/>
      </div>
      <footer>
        2022, Sarkadi Gergely
      </footer>
    </>
  );
}

export default App;
