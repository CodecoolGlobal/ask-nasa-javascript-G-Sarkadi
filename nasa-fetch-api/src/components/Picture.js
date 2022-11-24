
const Picture = ({ url, media_type, title }) => {

    function checkUrl() {
        if (media_type === "video") {
            return <iframe src={url} title={title} className="starVideo"></iframe>
        }
        if (media_type === "image") {
            return <img src={url} alt={title} className="starPicture" />
        }
    };

    return (
        <>
            {checkUrl()}
        </>
    )
}

export default Picture