import { useEffect, useState } from "react"
import Picture from "./Picture";

const Card = ({ date }) => {
  const [data, setData] = useState({});

  const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(URL, {
      signal: signal
    })
      .then((res) => res.json())
      .then(res => setData(res));

    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, [URL]);


  const dummyData = {
    "date": date,
    "explanation": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit possimus pariatur excepturi facilis necessitatibus, aut cumque perspiciatis corporis aliquam officia ipsum repellat neque maiores libero dicta sapiente sunt totam similique.",
    "url": "https://apod.nasa.gov/apod/image/2211/LDN1251v7social1024.png",
    "title": "Fake title",
    "media_type": "image"
  }

  function formatDate(data) {
    let dateObject = new Date(data.date + "z");
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return dateObject.toLocaleDateString("hu", options)
  }

  return (
    <div className="card">
      <p>
        {formatDate(data)}
      </p>
      <Picture url={data.url} media_type={data.media_type} />
      <h4>
        {data.title}
      </h4>
      <h5>
        Image Credit & Copyright: {data.copyright}
      </h5>
      <p className="starExplanation">
        <strong>Explanation: </strong>{data.explanation}
      </p>
    </div>
  )
}

export default Card