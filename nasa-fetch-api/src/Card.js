import { useEffect, useState } from "react"
import Picture from "./Picture";

const Card = () => {
  // const [title, setTitle] = useState()
  // const [date, setDate] = useState()
  // const [url, setUrl] = useState()
  // const [explanation, setExplanation] = useState()
  const [data, setData] = useState();

  const newDate = new Date();
  let currentDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
  let date = currentDate;

  const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`;

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
    "date": currentDate,
    "explanation": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit possimus pariatur excepturi facilis necessitatibus, aut cumque perspiciatis corporis aliquam officia ipsum repellat neque maiores libero dicta sapiente sunt totam similique.",
    "url": "https://www.youtube.com/embed/7dh5VL5YGoA",
    "title": "Fake title",
    "media_type": "video"
  }


  // console.log(data)

  // console.log(dummyData)


  return (
    <div>
      <p>
        {dummyData.date}
      </p>
      <Picture url={dummyData.url} media_type={dummyData.media_type}/>
      <h4>
        {dummyData.title}
      </h4>
      <p className="starExplanation">
        <strong>Explanation: </strong>{dummyData.explanation}
      </p>
    </div>
  )
}

export default Card