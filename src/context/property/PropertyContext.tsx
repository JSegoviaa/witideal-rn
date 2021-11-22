import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react';
import { mxn } from '../../constant/currency';

interface ContextProps {
  currency: string;
  setCurrency: Dispatch<SetStateAction<string>>;
}

export const PropertyContext = createContext({} as ContextProps);

const PropertyProvider: FC = ({ children }) => {
  const [currency, setCurrency] = useState(mxn);

  return (
    <PropertyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
