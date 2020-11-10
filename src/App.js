import React, { Component } from 'react'
import WeatherFetch from './WeatherFetch'
import CityFetch from './CityFetch'

const WEATHER_APP_Key = '5a41d35c009c3bb73c52b6817d03b311';
const CITY_APP_KEY = '6b13d976714f488792b849709ed745b8';
class App extends Component {
  state = {
    cityName: '',
    coord: [],
    flag: ''
  };

  onCityChange = (value) => {
    this.setState({
      cityName: value.cityName,
      coord: value.coord,
      flag: value.flag
    });
  }

  render() {
    const { cityName, coord, flag } = this.state;
    return (
      <div className="container px-8 mx-auto text-center items-center">
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 uppercase">
                The weather</h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                Current weather and forecast </p>
            </div>
          </div>
          <div className="mt-10">
            <CityFetch setLocation={this.onCityChange} apiKey={CITY_APP_KEY} />
            <WeatherFetch city={cityName} coord={coord} flag={flag} apiKey={WEATHER_APP_Key} />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
