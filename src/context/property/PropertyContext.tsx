import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react';
import { rent } from '../../constant/action';
import { mxn } from '../../constant/currency';
import { singleHouse } from '../../constant/propertyType';
import { useForm } from '../../hooks/useForm';

interface ContextProps {
  currency: string;
  setCurrency: Dispatch<SetStateAction<string>>;
  propertyType: string;
  setPropertyType: Dispatch<SetStateAction<string>>;
  actionSelected: boolean;
  setActionSelected: Dispatch<SetStateAction<boolean>>;
  sharesCom: boolean | undefined;
  setSharesCom: Dispatch<SetStateAction<boolean | undefined>>;
  bankSale: boolean | undefined;
  setBankSale: Dispatch<SetStateAction<boolean | undefined>>;
  isCommercial: boolean;
  setIsCommercial: Dispatch<SetStateAction<boolean>>;
  propertyTypeSelected: boolean;
  setPropertyTypeSelected: Dispatch<SetStateAction<boolean>>;
  action: string;
  setAction: Dispatch<SetStateAction<string>>;
  precio: string;
  onChange: <K extends Object>(value: K, field: 'precio') => void;
}

export const PropertyContext = createContext({} as ContextProps);

const PropertyProvider: FC = ({ children }) => {
  const { form, onChange } = useForm({
    precio: '',
  });
  const { precio } = form;
  const [currency, setCurrency] = useState(mxn);
  const [propertyType, setPropertyType] = useState(singleHouse);
  const [actionSelected, setActionSelected] = useState<boolean>(false);
  const [sharesCom, setSharesCom] = useState<boolean | undefined>(undefined);
  const [bankSale, setBankSale] = useState<boolean | undefined>(undefined);
  const [isCommercial, setIsCommercial] = useState<boolean>(false);
  const [propertyTypeSelected, setPropertyTypeSelected] =
    useState<boolean>(false);
  const [action, setAction] = useState<string>(rent);

  return (
    <PropertyContext.Provider
      value={{
        currency,
        setCurrency,
        propertyType,
        setPropertyType,
        actionSelected,
        setActionSelected,
        sharesCom,
        setSharesCom,
        bankSale,
        setBankSale,
        isCommercial,
        setIsCommercial,
        propertyTypeSelected,
        setPropertyTypeSelected,
        action,
        setAction,
        precio,
        onChange,
      }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
