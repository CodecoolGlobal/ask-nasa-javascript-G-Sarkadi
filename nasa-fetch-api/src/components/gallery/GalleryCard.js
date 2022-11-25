
const GalleryCard = ({ content, setModalOpen, setModalContent }) => {

    return (
        <button
            onClick={() => {
                setModalOpen(true);
                setModalContent(content)
            }}
            style={{ border: 0 }}>
            <img className="galleryCard" src={content.url} alt={content.title} width="350"></img>
        </button>
    )
}

export default GalleryCard