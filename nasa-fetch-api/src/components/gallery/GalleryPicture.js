const GalleryPicture = ({ content }) => {

    return (
        <img className="galleryCard" src={content.thumbnail_url ?? content.url} alt={content.title} />
    )
}

export default GalleryPicture