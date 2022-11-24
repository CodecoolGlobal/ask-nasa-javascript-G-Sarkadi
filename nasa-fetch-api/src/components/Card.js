import { useEffect, useState } from "react"
import Credits from "./Credits";
import Picture from "./Picture";

const Card = ({ date }) => {
  const [starData, setStarData] = useState({});

  const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`;
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(URL, {
      signal: signal
    })
      .then((res) => res.json())
      .then(res => setStarData(res));

    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, [URL]);

  function formatDate(date) {
    let dateObject = new Date(date + "z");
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
        {formatDate(date)}
      </p>
      <Picture starData={starData} />
      <h4>
        {starData.title}
      </h4>
      <Credits starData={starData} />
      <p className="starExplanation">
        <strong>Explanation: </strong>{starData.explanation}
      </p>
    </div>
  )
}

export default Card