import React, { Component } from 'react';

class CitySelect extends Component {
  state = {
    inputValue: '',
    noData: false
  };

  search = () => {
    if (this.state.inputValue.length === 0) {
      this.setState({
        noData: true
      })
      return
    }
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.inputValue}&key=${this.props.apiKey}`)
      .then(res => res.json())
      .then(data => {
        this.props.setLocation({
          coord: data.results[0].geometry,
          cityName: data.results[0].formatted,
          flag: data.results[0].annotations.flag
        });
      });
  };

  clear = () => {
    this.setState({
      inputValue: '',
      noData: false
    });
  };

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div className="px-4 py-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="City Name"
            value={this.state.inputValue} onChange={this.onInputChange} />
        </div>
        <button className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out" onClick={this.search} >Search</button>
        <button className="bg-white hover:bg-indigo-100 text-indigo-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={this.clear} >Clear</button>
      </div>
    );
  }
};

export default CitySelect;
