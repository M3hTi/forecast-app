import { useState } from "react";

import Form from "./Form";
import ShowWeather from "./ShowWeather";
import Loader from "./Loader";

const apiKey = "a084759fbe9642c6987115928251703";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!query) return;
    setIsLoading(true)
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeather(data);
        setIsLoading(false)
      })
      .catch((err) => console.log(err));

    setQuery("");
  }
  return (
    <div>
      <Form onHandler={handleSubmitForm} query={query} setQuery={setQuery} />
      {isLoading ? <Loader /> : <ShowWeather weatherObj={weather} />}
    </div>
  );
}

export default App;
