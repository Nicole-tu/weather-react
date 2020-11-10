import React, { useState } from 'react'
import WeatherFetch from './WeatherFetch'
import CityFetch from './CityFetch'
import { useI18n } from './i18n'

const WEATHER_APP_Key = '5a41d35c009c3bb73c52b6817d03b311';
const CITY_APP_KEY = '6b13d976714f488792b849709ed745b8';
const App = () => {
  const { t, setLocale } = useI18n();
  const [cityName, setCityName] = useState('');
  const [coord, setCoord] = useState([]);
  const [flag, setFlag] = useState('');

  const onCityChange = (value) => {
    setCityName(value.cityName);
    setCoord(value.coord);
    setFlag(value.flag);
  }

  return (
    <div className="container px-8 mx-auto text-center items-center">
      <div className="text-right">
        <span className={`no-underline hover:underline text-blue-500`} onClick={() => setLocale('en')}>English</span>&nbsp;|&nbsp;
          <span href="#" className={`no-underline hover:underline text-blue-500`} onClick={() => setLocale('zh-TW')}>中文</span>
      </div>
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <h1 className="mt-2 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 uppercase ">
              {t('system_header')}</h1>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto" dangerouslySetInnerHTML={{ __html: t('system_description') }} />
          </div>
        </div>
        <div className="mt-10">
          <CityFetch setLocation={onCityChange} apiKey={CITY_APP_KEY} />
          <WeatherFetch city={cityName} coord={coord} flag={flag} apiKey={WEATHER_APP_Key} />
        </div>
      </div>
    </div >
  );
}

export default App;
