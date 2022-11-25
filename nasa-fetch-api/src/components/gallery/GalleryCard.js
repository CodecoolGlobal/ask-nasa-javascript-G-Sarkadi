
const GalleryCard = ({ content }) => {

    return (
        <button onClick={() => console.log("clicked " + content.title)} style={{border: 0}}>
            <img className="galleryCard" src={content.url} alt={content.title} width="350"></img>
        </button>
    )
}

export default GalleryCard