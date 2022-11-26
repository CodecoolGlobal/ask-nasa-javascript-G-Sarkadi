import { useEffect, useState } from "react"
import Footer from "../Footer"
import GalleryContainer from "./GalleryContainer"
import LoadingPlaceholder from "../LoadingPlaceholder"
import NavButton from "../NavButton"
import Modal from "./Modal"

const Gallery = () => {
    const [cards, setCards] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});


    const numberOfCards = 20;
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=${numberOfCards}&thumbs=true`;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(URL, {
            signal: signal
        })
            .then((res) => res.json())
            .then(res => setCards(res));

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, [URL]);

    return (
        <>
            {modalOpen && <Modal setOpenModal={setModalOpen} modalContent={modalContent}/>}
            <div className="container">
                <h1>Gallery</h1>
                {cards ? <GalleryContainer galleryContent={cards} setModalOpen={setModalOpen} setModalContent={setModalContent}/> : <LoadingPlaceholder />}
                <NavButton text="Go to Main Page" route="/" />
            </div>
            <Footer />
        </>
    )
}

export default Gallery