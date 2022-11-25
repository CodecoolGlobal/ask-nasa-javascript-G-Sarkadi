import GalleryCard from "./GalleryCard"

const GalleryContainer = ({galleryContent}) => {

    function createCards() {
        return galleryContent.map((c, index) => <GalleryCard content={c} key={index}/>)
    }


    return (
        <div className="galleryContainer">
            {createCards()}
        </div>
    )
}

export default GalleryContainer