import { useEffect, useState } from "react"

const Card = () => {
    // const [title, setTitle] = useState()
    // const [date, setDate] = useState()
    // const [url, setUrl] = useState()
    // const [explanation, setExplanation] = useState()
    const [data,setData] = useState(null);

    const date = new Date();
    let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=2022-11-01`;

    useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
  
          fetch(URL, {
              signal: signal
          })
          .then((response) => response.json())
          .then(data => setData(data));

      return () => {
          // cancel the request before component unmounts
          controller.abort();
      };
  }, []);

  console.log(data)


  return (
    <div>
      <p>
        hello
      </p>
    </div>
  )
}

export default Card