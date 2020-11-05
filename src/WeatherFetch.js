import React, { useState, useEffect } from "react";
import './WeatherFetch.css';

const WeatherFetch = (props) => {

  const [feels_like, setFeelsLike] = useState('');
  const [mainTemp, setMainTemp] = useState('');
  const [description, setDescription] = useState('');
  const [main, setMain] = useState('');
  const [iconID, setIconID] = useState('');
  const [weekly, setWeekly] = useState([]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=25.05&lon=121.53&appid=${props.apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setFeelsLike(data.current.feels_like);
        setMainTemp(data.current.temp);
        setDescription(data.current.weather[0].description);
        setMain(data.current.weather[0].main);
        setIconID(data.current.weather[0].icon);
        setWeekly(data.daily);
      })
  }, []);

  return (
    <>
      <div className="weatherCard">
        <h1>{props.city}</h1>
        <h2>Main Temperature:{mainTemp} &#8451;</h2>
        <h2>Feels Like:{feels_like} &#8451;</h2>
        <h2>Weather Parameter:{main}</h2>
        <h3>Description:{description}</h3>
        <img alt={description} src={`http://openweathermap.org/img/wn/${iconID}@2x.png`} />
        <div className="weatherList">
          <ul>
            {weekly && weekly.map((item, index) => {
              return <li key={index}>
                <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
            Temperature:{item.temp.day},Feels like:{item.feels_like.day},weather:{item.weather[0].main}
              </li>
            })}
          </ul>
        </div >
      </div>
    </>
  )
}
export default WeatherFetch;
