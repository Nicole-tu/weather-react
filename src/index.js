import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import { I18nProvider } from './i18n';

const locales = ['en', 'zh-TW'];
const translations = {
  'en': require('./locales/en').default,
  'zh-TW': require('./locales/zh-TW').default,
}

ReactDOM.render(
  <I18nProvider locales={locales} translations={translations}>
    <App />
  </I18nProvider>,
  document.getElementById('root')
);

