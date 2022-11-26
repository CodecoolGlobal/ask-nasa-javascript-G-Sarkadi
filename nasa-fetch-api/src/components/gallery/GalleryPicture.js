import LoadingPlaceholder from "../LoadingPlaceholder"


const GalleryPicture = ({ starData }) => {

    function checkUrl() {
        if (starData.media_type === "video") {
            return <img className="galleryCard" src={starData.thumbnail_url} alt={starData.title}/>
        }
        if (starData.media_type === "image") {
            return <img className="galleryCard" src={starData.url} alt={starData.title}/>
        }
        return <LoadingPlaceholder />
    };

    return (
        <>
            {checkUrl()}
        </>
    )
}

export default GalleryPicture