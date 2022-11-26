const GalleryPicture = ({ starData }) => {

    return (
        <img className="galleryCard" src={starData.thumbnail_url ?? starData.url} alt={starData.title} />
    )
}

export default GalleryPicture