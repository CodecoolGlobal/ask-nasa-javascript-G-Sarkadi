const FormatedDate = ({ date }) => {
    function formatDate() {
        let dateObject = new Date(date + "z");
        let options = {
            month: "long",
        }
        return dateObject.getFullYear() + " " +  dateObject.toLocaleDateString("en-GB", options) + " " + dateObject.getDay();
    }

    return (
        <>
            {formatDate()}
        </>
    )
}

export default FormatedDate