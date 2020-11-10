import React, { useState } from 'react'
import { useI18n } from './i18n'

const CitySelect = (props) => {
  const { t, getLocale } = useI18n();
  const [inputValue, setInputValue] = useState('');

  const search = () => {
    if (inputValue.length === 0) {
      return
    }
    let lang = getLocale() === 'en' ? 'en' : 'native';
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=${props.apiKey}&language=${lang}`)
      .then(res => res.json())
      .then(data => {
        props.setLocation({
          coord: data.results[0].geometry,
          cityName: data.results[0].formatted,
          flag: data.results[0].annotations.flag
        });
      });
  };

  const clear = () => {
    setInputValue('')
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="px-4 py-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder={t('input_search_placeholder')}
          value={inputValue} onChange={onInputChange} />
      </div>
      <button className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out" onClick={search} >{t('button_search')}</button>
      <button className="bg-white hover:bg-indigo-100 text-indigo-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={clear} >{t('button_clear')}</button>
    </div>
  );

};

export default CitySelect;
