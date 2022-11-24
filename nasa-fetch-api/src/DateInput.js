
const DateInput = ({date, currentDate, setSelectedDate}) => {

    function dateChange(e) {
        // e.preventDefault();
        setSelectedDate(e.target.value)
    }

    return (
        <>
            <label>Select date: </label>
            <input type="date" name="dateSelector" value={date} max={currentDate} min="2015-01-01" onChange={dateChange}></input>
        </>
    )
}

export default DateInput