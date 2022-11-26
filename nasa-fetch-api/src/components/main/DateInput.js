
const DateInput = ({ selectedDate, today, setSelectedDate }) => {
    // Check the full archive at: https://apod.nasa.gov/apod/archivepixFull.html
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