
const Picture = ({ url }) => {

    function checkUrl(url) {
        if (url.includes("youtube")) {
            return <iframe width="960" height="540" src={url} title="Youtube video player"></iframe>
        } else {
            return <img src={url} alt="NASA star pictures" className="starPicture" />
        }
    }

    return (
        <>
            {checkUrl(url)}
        </>
    )
}

export default Picture