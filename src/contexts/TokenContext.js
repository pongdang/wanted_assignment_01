import { createContext, useContext, useState } from 'react';

const tokenStorage = {
  get: () => {
    return localStorage.getItem('access_token') || '';
  },
  set: accessToken => {
    localStorage.setItem('access_token', accessToken);
  },
  remove: () => {
    localStorage.removeItem('access_token');
  },
};

const TokenContext = createContext({
  isLogin: false,
  accessToken: '',
  setAccessToken: () => undefined,
  clearAccessToken: () => undefined,
});

export const TokenContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(tokenStorage.get());

  const value = {
    isLogin: accessToken !== '',
    accessToken,
    setAccessToken: accessToken => {
      tokenStorage.set(accessToken);

      setAccessToken(accessToken);
    },
    clearAccessToken: () => {
      tokenStorage.remove();

      setAccessToken('');
    },
  };

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
};

export const useTokenContext = () => {
  return useContext(TokenContext);
};
