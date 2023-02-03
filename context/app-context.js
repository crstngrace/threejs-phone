import { createContext, useState, useRef } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [phoneRef, setPhoneRef] = useState(useRef(null));

  return (
    <AppContext.Provider value={{ phoneRef, setPhoneRef }}>
      {children}
    </AppContext.Provider>
  );
};
