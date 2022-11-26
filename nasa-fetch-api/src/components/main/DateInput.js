
const DateInput = ({ selectedDate, today, setSelectedDate }) => {
    const earliestDate = '1995-06-20'

    return (
        <>
            <label>Select date: </label>
            <input type="date"
                value={selectedDate || today}
                max={today}
                min={earliestDate}
                onChange={e => setSelectedDate(e.target.value)}>
            </input>
        </>
    )
}

export default DateInput