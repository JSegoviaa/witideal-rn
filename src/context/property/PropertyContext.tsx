import React, { createContext, FC } from 'react';

interface ContextProps {}

export const PropertyContext = createContext({} as ContextProps);

const PropertyProvider: FC = ({ children }) => {
  return (
    <PropertyContext.Provider value={{}}>{children}</PropertyContext.Provider>
  );
};

export default PropertyProvider;
