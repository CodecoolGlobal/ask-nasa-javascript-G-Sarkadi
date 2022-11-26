import GalleryPicture from "./GalleryPicture";

const GalleryCard = ({ content, setModalOpen, setModalContent }) => {

    return (
        <button className="galleryPictureButton"
            onClick={() => {
                setModalOpen(true);
                setModalContent(content)
            }}
            >
            <GalleryPicture content={content}/>
        </button>
    )
}

export default GalleryCard