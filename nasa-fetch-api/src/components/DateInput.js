
const DateInput = ({ selectedDate, today, setSelectedDate }) => {
    return (
        <>
            <label>Select date: </label>
            <input type="date"
                value={selectedDate || today}
                max={today}
                min="2015-01-01"
                onChange={e => setSelectedDate(e.target.value)}>
            </input>
        </>
    )
}

export default DateInput