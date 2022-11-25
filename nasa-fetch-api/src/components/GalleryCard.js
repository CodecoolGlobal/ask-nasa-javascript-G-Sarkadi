
const GalleryCard = ({ content }) => {
    return (
        <img className="galleryCard" src={content.url} alt={content.title}></img>
    )
}

export default GalleryCard