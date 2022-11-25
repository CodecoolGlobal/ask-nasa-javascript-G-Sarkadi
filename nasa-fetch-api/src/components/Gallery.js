import Footer from "./Footer"
import NavButton from "./NavButton"

const Gallery = () => {

    return (
        <>
        <div className="container">
            <h1>Gallery</h1>
            <NavButton text="Go to Home" route="/" />
        </div>
        <Footer />
        </>
    )
}

export default Gallery