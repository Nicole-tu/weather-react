// AIzaSyBZdclS-us_eVQ0Wz6L_eLE4SI5eW0tm-M
import React, { Component } from 'react';
// import './CitySelect.css';

class CitySelect extends Component {
  state = {
    cityName: ''
  };;

  search = () => {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=YOUR-API-KEY`)
      .then(res => res.json())
      .then(data => { console.log(data) });
  };

  clear = () => {
    this.setState({
      cityName: ''
    });
  };

  render() {
    return (
      <>
        <input type="text" value={this.state.cityName} onChange={() => { }} />
        <button onClick={this.search} >Search</button>
        <button onClick={this.clear} >Clear</button>
      </>
    );
  }
};

export default CitySelect;
