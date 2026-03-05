import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { WiStrongWind, WiHumidity, WiBarometer } from "react-icons/wi";
import { FaEye } from "react-icons/fa";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiDayCloudy,
} from "react-icons/wi";


const Weather = () => {
  let [weather, setWeather] = useState({});
  let [search, setSearch] = useState("");
  let [error, setError] = useState(false);
  let api = {
    key: import.meta.env.VITE_WEATHER_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  function getWeather() {
    fetch(`${api.base}?q=${search}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.cod === "404") {
          setError(true);
          setWeather({});
        } else {
          setError(false);
          setWeather(data);
        }
        setSearch("");
      })
      .catch((err) => console.log(err));
  }
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <WiDaySunny size={50} />;

      case "Clouds":
        return <WiCloudy size={50} />;

      case "Rain":
      case "Drizzle":
        return <WiRain size={50} />;

      case "Thunderstorm":
        return <WiThunderstorm size={50} />;

      case "Snow":
        return <WiSnow size={50} />;

      case "Fog":
      case "Mist":
      case "Haze":
        return <WiFog size={50} />;

      default:
        return <WiDayCloudy size={50} />;
    }
  };

  const getWeatherBackgroundImage = (condition) => {
    switch (condition) {
      case "Clear":
        return "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=1920&q=80";

      case "Clouds":
        return "https://images.openai.com/static-rsc-3/c1SR3z2yxFJVMmZMAoWN8VwcbQtkGURdwPyt_ayOkNnsioGqX4QdfVXwaN7IF2f4BEvw4q-4vgvwXONtRksSI-4lqVwGL9uUkBRlUjYR8XM?purpose=fullsize";

      case "Rain":
      case "Drizzle":
        return "https://t4.ftcdn.net/jpg/01/63/96/63/360_F_163966311_qh3qSk57mw9oLPOklZigzX9zlB5DgdaM.jpg";

      case "Thunderstorm":
        return "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1920&q=80";

      case "Snow":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEEjBDgRPJSP1CVzRsjkM7cO3meeCzOeYiA&s";

      case "Mist":
      case "Fog":
      case "Haze":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZPAoNq2SC21R3pG-tT-7qd_eptQtfUWMVw&s";

      case "Night":
        return "data:image/jpeg;base64,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";

      default:
        return "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=1920&q=80";
    }
  };

  return (
    <div className="h-screen w-screen p-5">
      {/* header */}
      <div className="h-15 bg-gray-300 flex flex-row justify-evenly items-center">
        <h1 className="text-3xl font-bold"> Weather forecast</h1>
        <div className="relative left-38 flex flex-row">
          <span>
            <MdLocationOn size={25} />
          </span>
          <h2 className="font-bold">
            {weather.name}
            {weather.sys && `, ${weather.sys.country}`}
          </h2>
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="Search City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-70 border-b p-1"
          />
          <button
            onClick={getWeather}
            className=" w-15 ml-2 border rounded cursor-pointer transition-all  duration-200 ease-in-out active:scale-95 active:bg-gray-400"
          >
            Search
          </button>
        </div>
      </div>

      <div
        className="h-185 pt-30 bg-blue-100 flex justify-evenly shadow-2xl shadow-gray/20"
        style={{
          backgroundImage: weather.weather
            ? `url(${getWeatherBackgroundImage(weather.weather[0].main)})`
            : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" w-110 h-100 p-5 bg-gray-100 rounded-2xl">
          <div
            className="h-60 p-5  rounded-2xl"
            style={{
              backgroundImage: weather.weather
                ? `url(${getWeatherBackgroundImage(weather.weather[0].main)})`
                : "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {" "}
            {error && (
              <p className=" text-2xl text-center text-red-500">
                ❌City not Found
              </p>
            )}
            {weather.main && (
              <>
                <div className="relative top-20 flex flex-row ">
                  <div className="absolute bottom-20 left-60">
                    {weather.weather && (
                      <div className="flex text justify-center items-center">
                        {getWeatherIcon(weather.weather[0].main)}
                      </div>
                    )}
                  </div>
                  <p className=" text-6xl font-bold">
                    {weather.main && weather.main.temp}°
                  </p>
                  <p className="text-2xl font-bold capitalize mt-2 relative bottom-5 left-5">
                    {weather.weather[0].description}
                  </p>
                </div>
                <span className="relative text-2xl top-20 left-50">
                  Feels like: {Math.round(weather?.main?.feels_like)}°C
                </span>
                <div className="relative top-22 flex flex-row justify-evenly items-center">
                  <span>Low:{Math.round(weather?.main?.temp_min)}°C</span>
                  <span>H:{Math.round(weather?.main?.temp_max)}°C</span>
                </div>
              </>
            )}
          </div>
          <div className="h-20 mt-5 pt-3 pl-2 grid grid-cols-4 grid-rows-2">
            <div className="w-23 h-15 rounded-2xl bg-amber-200 flex flex-col justify-center items-center">
              <span>
                <WiStrongWind size={20} className="relative right-5 top-5" />
                Wind
              </span>
              <span> {weather.wind?.speed} m/s</span>
            </div>
            <div className="w-23 h-15 rounded-2xl bg-amber-200 flex flex-col justify-center items-center">
              <WiHumidity size={30} className="relative right-9.5 top-5" />
              <span>Humidity</span>
              <span>{weather.main?.humidity}%</span>
            </div>
            <div className="w-23 h-15 rounded-2xl bg-amber-200 flex flex-col justify-center items-center">
              <FaEye size={22} className="relative right-9 top-5" />
              <span>Visibility</span>
              <span>{(weather.visibility / 1000).toFixed(1) + " km"}</span>
            </div>
            <div className="w-23 h-15 rounded-2xl bg-amber-200 flex flex-col justify-center items-center">
              <WiBarometer size={50} className="relative right-9.5 top-5" />
              <span>Pressure</span>
              <span>{weather.main?.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
