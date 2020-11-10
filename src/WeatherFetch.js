import React, { Component } from "react";

class WeatherFetch extends Component {
  state = {
    showForecast: false,
    feels_like: '',
    mainTemp: '',
    description: '',
    main: '',
    iconID: '',
    weekly: ''
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.coord !== this.props.coord) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.coord.lat}&lon=${this.props.coord.lng}&appid=${this.props.apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            feels_like: data.current.feels_like,
            mainTemp: data.current.temp,
            description: data.current.weather[0].description,
            main: data.current.weather[0].main,
            iconID: data.current.weather[0].icon,
            weekly: data.daily.slice(1)
          });
        });
    }
  };

  formatDate = (date) => {
    let newDate = new Date(date * 1000);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    return `${year}/${month}/${day}`;
  }

  toggleForecast = () => {
    this.setState({
      showForecast: !this.state.showForecast
    })
  }

  render() {
    const { city, flag } = this.props;
    const { showForecast, mainTemp, feels_like, main, description, iconID, weekly } = this.state;

    return (
      <>
        {
          (city.length === 0) ?

            <h3>Search city first</h3>
            :
            <div className="mx-auto max-w-full rounded overflow-hidden shadow-lg md:px-20 sm:py-6 md:py-8 sm:px-8 bg-indigo-100">
              <div className="sm:flex">
                <div className="sm:w-1/2 lg:w-1/5">
                  <h2 className="mb-5">{flag} {city}</h2>
                  <h3>{mainTemp} &#8451;</h3>
                  <h3>Feels Like {feels_like} &#8451;</h3>
                  <p>{description}</p>
                </div>
                <div className="sm:w-1/2 lg:w-1/5">
                  <img className="inline object-center" alt={description} src={`http://openweathermap.org/img/wn/${iconID}@2x.png`} />
                  <h3>{main}</h3>
                </div>
                <div className="lg:w-3/5 flex items-end justify-end align-bottom">
                  <div>
                    <span className="text-gray-500" onClick={this.toggleForecast}>
                      {showForecast
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                          <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                          <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      }
                    </span>
                  </div>
                </div>
              </div>
              {!showForecast
                ? null
                :
                <div className="mt-8">
                  <ul className="inline-grid sm:gap-y-3 md:grid-cols-7 md:gap-x-1 lg:gap-x-3">
                    {weekly && weekly.map((item, index) => {
                      return <li key={index}
                      >
                        <div className="sm:flex sm:items-center md:block md:text-xs lg:text-base">
                          <p>{this.formatDate(item.dt)}</p>
                          <img className="inline object-center" alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                          <p>{item.weather[0].main}</p>
                          <p>{item.temp.day} &#8451;</p>
                          <p className="sm:ml-3 sm:text-base md:text-sm lg:text-sm xl:text-base">Feels like {item.feels_like.day} &#8451;</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </div >
              }
            </div>
        }
      </>
    )
  }
}
export default WeatherFetch;
