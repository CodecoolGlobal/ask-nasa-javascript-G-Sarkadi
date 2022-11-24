
const Picture = ({ starData }) => {

    function checkUrl() {
        if (starData.media_type === "video") {
            return <iframe src={starData.url} title={starData.title} className="starVideo"></iframe>
        }
        if (starData.media_type === "image") {
            return <img src={starData.url} alt={starData.title} className="starPicture" />
        }
    };

    return (
        <>
            {checkUrl()}
        </>
    )
}

export default Picture