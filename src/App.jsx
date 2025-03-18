import { useState } from "react";

import Form from "./Form";
import ShowWeather from "./ShowWeather";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const apiKey = "693706a377c449ff848110424251803";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!query) return;
    setIsLoading(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`)
      .then((res) => {
        console.log(res)
        if (!res.ok) throw new Error(`something wrong!`);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setWeather(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false)
      });

    setQuery("");
  }
  return (
    <div className="app">
      <Form onHandler={handleSubmitForm} query={query} setQuery={setQuery} />
      {isLoading && <Loader />}
      {!isLoading && !error && <ShowWeather weatherObj={weather} />}
      {error && <ErrorMessage msg={error} />}
    </div>
  );
}

export default App;
