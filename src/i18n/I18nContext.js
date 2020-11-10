import { createContext } from 'react';

const I18nContext = createContext({
  t: () => '',
  getLocale: () => { },
  setLocale: () => { },
});

export default I18nContext;
