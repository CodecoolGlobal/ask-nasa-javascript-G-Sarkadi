
const Picture = ({ url, media_type }) => {

    function checkUrl(url) {
        if (media_type === "video") {
            return <iframe width="960" height="540" src={url} title="Youtube video player"></iframe>
        }
        if (media_type === "picture") {
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