import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("HELLO WORLD");
    // (
    //     // fetch("https://fakestoreapi.com/products/")
    //     //   .then((res) => {
    //     //     return res.json();
    //     //   })
    //     //   .then((data) => {
    //     //     console.log("data", data);
    //     //   })
    //     //   .catch((error) => console.log(error));

    // )
    callAPI("karachi");
  }, []);

  const [weatherData, setWeatherData] = useState({});
  const [searchInput, setSearchInput] = useState("");

  const callAPI = async (cityName) => {
    //  (
    //  // axios
    //   //   .get("https://fakestoreapi.com/products/")
    //   //   .then((data) => {
    //   //     console.log(data.data);
    //   //   })
    //   //   .catch((err) => {
    //   //     console.log("err", err);
    //   //   });
    //   // try {
    //   //   const data = await axios.get("https://fakestoreapi.com/productsasdasd/");
    //   //   console.log("data", data.data);
    //   // } catch (error) {
    //   //   console.log("error", error);
    //   // }
    //   // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //   // a0a105825f17b834cce823cdd8f4aad7
    //  )

    try {
      console.log("cityName", cityName);
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric`
      );
      console.log("data", data);
      setWeatherData(data.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  console.log("weatherData", weatherData);

  const handlerWeatherApi = (e) => {
    e.preventDefault();
    console.log("searchInput", searchInput);
    callAPI(searchInput);
  };

  return (
    <>
      <h1>WEATHER APP</h1>
      <div>
        <form onSubmit={handlerWeatherApi}>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter your city name..."
          />
        </form>
      </div>

      <div>
        <h1>CITY NAME: {weatherData?.name} </h1>
        <h3>Temp :{weatherData?.main?.temp} </h3>
        <h3>{weatherData?.weather && weatherData?.weather[0].main}</h3>
        {/* <h3>{weatherData?.weather[0]?.main}</h3> */}
      </div>
    </>
  );
}

export default App;
