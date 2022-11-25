const FormatedDate = ({ date }) => {
    function formatDate(date) {
        let dateObject = new Date(date + "z");
        let options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
        return dateObject.toLocaleDateString("en-GB", options)
    }

    return (
        <>
            {formatDate(date)}
        </>
    )
}

export default FormatedDate