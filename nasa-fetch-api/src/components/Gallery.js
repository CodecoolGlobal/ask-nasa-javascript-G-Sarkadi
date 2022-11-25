import { useEffect, useState } from "react"
import Footer from "./Footer"
import GalleryContainer from "./GalleryContainer"
import NavButton from "./NavButton"

const Gallery = () => {
    // const [cards, setCards] = useState();

    const numberOfCards = 20;
    // const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=${numberOfCards}`;

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetch(URL, {
    //         signal: signal
    //     })
    //         .then((res) => res.json())
    //         .then(res => setCards(res));

    //     return () => {
    //         // cancel the request before component unmounts
    //         controller.abort();
    //     };
    // }, [URL]);

    // console.log(cards)

    let dummyCard = {
        "url": "https://apod.nasa.gov/apod/image/1506/sh155walter_z66_1024x720.jpg",
        "title": "dummy title",
        "explanation": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic id ratione minus quae, quis rerum similique porro autem atque recusandae iste libero tenetur impedit animi consequatur maxime fugit quod mollitia.",
        "date": "2000-01-01",
    }

    let dummyData = [];

    for (let i = 0; i < numberOfCards; i++) {
        dummyData.push(dummyCard);
    }

    console.log(dummyData)

    return (
        <>
            <div className="container">
                <h1>Gallery</h1>
                <GalleryContainer galleryContent={dummyData}/>
                <NavButton text="Go to Home" route="/" />
            </div>
            <Footer />
        </>
    )
}

export default Gallery