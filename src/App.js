import React from 'react'
import './App.css'
import WeatherFetch from './WeatherFetch'
import CitySelect from './CitySelect'

const App = () => {
  const city = 'Taipei, TW';
  const APP_Key = '5a41d35c009c3bb73c52b6817d03b311';

  return (
    <div className="App">
      <CitySelect />
      <WeatherFetch city={city} apiKey={APP_Key} />
    </div>
  );
}

export default App;
