import { useEffect, useState } from "react"
import "./cards.css"

const Card = () => {
    // const [title, setTitle] = useState()
    // const [date, setDate] = useState()
    // const [url, setUrl] = useState()
    // const [explanation, setExplanation] = useState()
    const [data,setData] = useState(null);

    const date = new Date();
    let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=2022-11-01`;

  //   useEffect(() => {
  //     const controller = new AbortController();
  //     const signal = controller.signal;
  
  //         fetch(URL, {
  //             signal: signal
  //         })
  //         .then((response) => response.json())
  //         .then(data => setData(data));

  //     return () => {
  //         // cancel the request before component unmounts
  //         controller.abort();
  //     };
  // }, [URL]);


  const dummyData = {
    "date": "2022-02-02",
    "explanation": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit possimus pariatur excepturi facilis necessitatibus, aut cumque perspiciatis corporis aliquam officia ipsum repellat neque maiores libero dicta sapiente sunt totam similique.",
    "url": "https://apod.nasa.gov/apod/image/2211/LDN1251v7social1024.png",
    "title": "Fake title"
  }


  console.log(data)


  return (
    <div>
      <h2>
        {dummyData.title}
      </h2>
      <p>{dummyData.date}</p>
      <img src={dummyData.url} alt="nice stars" className="starPicture"/>
      <p className="starExplanation">{dummyData.explanation}</p>
    </div>
  )
}

export default Card