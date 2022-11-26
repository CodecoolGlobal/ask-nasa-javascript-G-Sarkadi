
const DateInput = ({ selectedDate, today, setSelectedDate }) => {
    return (
        <>
            <label>Select date: </label>
            <input type="date"
                value={selectedDate || today}
                max={today}
                min="1995-06-16"
                onChange={e => setSelectedDate(e.target.value)}>
            </input>
        </>
    )
}

export default DateInput