import { useEffect, useState } from "react"
import Footer from "./Footer"
import GalleryContainer from "./GalleryContainer"
import LoadingPlaceholder from "./LoadingPlaceholder"
import NavButton from "./NavButton"

const Gallery = () => {
    const [cards, setCards] = useState();

    const numberOfCards = 20;
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=${numberOfCards}`;

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
            <div className="container">
                <h1>Gallery</h1>
                {cards ? <GalleryContainer galleryContent={cards} /> : <LoadingPlaceholder />}
                <NavButton text="Go to Home" route="/" />
            </div>
            <Footer />
        </>
    )
}

export default Gallery