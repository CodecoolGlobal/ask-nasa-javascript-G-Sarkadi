
const GalleryCard = ({ content }) => {
    return (
        <img className="galleryCard" src={content.url} alt={content.title} width="350"></img>
    )
}

export default GalleryCard