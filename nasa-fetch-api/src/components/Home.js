import Card from "./Card"
import DateInput from "./DateInput"
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [selectedDate, setSelectedDate] = useState("");

    function calculateToday() {
        const newDate = new Date();
        return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
    }

    const today = calculateToday();


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
    )
}

export default Home