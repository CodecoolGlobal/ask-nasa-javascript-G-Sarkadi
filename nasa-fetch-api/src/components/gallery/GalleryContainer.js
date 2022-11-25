import GalleryCard from "./GalleryCard"

const GalleryContainer = ({ galleryContent }) => {

    function createCards() {
        if (galleryContent) {
            return galleryContent.map((content, index) => <GalleryCard content={content} key={index} />)
        }
    }


    return (
        <div className="galleryContainer">
            {createCards()}
        </div>
    )
}

export default GalleryContainer