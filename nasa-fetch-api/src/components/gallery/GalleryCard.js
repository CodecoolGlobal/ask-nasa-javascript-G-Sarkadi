import GalleryPicture from "./GalleryPicture";

const GalleryCard = ({ content, setModalOpen, setModalContent }) => {

    return (
        <button
            onClick={() => {
                setModalOpen(true);
                setModalContent(content)
            }}
            style={{ border: 0 }}>
            <GalleryPicture starData={content}/>
        </button>
    )
}

export default GalleryCard