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
    // const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY_VALUE}&count=${numberOfCards}&thumbs=true`;

    // TODO This is very cheesy, should be an easier way to point to the backend
    let backendURL = `${window.location.protocol}//${window.location.hostname}:5000/`

    const URL = `${backendURL}api?count=${numberOfCards}&thumbs=true`


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            console.log(URL)
            const res = await fetch(URL, { signal: signal })
            const data = await res.json()
            setCards(data)
        }

        fetchData();

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, [URL]);

    return (
        <>
            {modalOpen && <Modal setOpenModal={setModalOpen} modalContent={modalContent} />}
            <div className="container">
                <h1>Gallery</h1>
                {cards ? <GalleryContainer galleryContent={cards} setModalOpen={setModalOpen} setModalContent={setModalContent} /> : <LoadingPlaceholder />}
                <NavButton text="Go to Main Page" route="/" />
            </div>
            <Footer />
        </>
    )
}

export default Gallery