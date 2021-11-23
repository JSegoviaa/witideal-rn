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

type onChangeValues =
  | 'precio'
  | 'route'
  | 'postal_code'
  | 'int_number'
  | 'ext_number';

interface Location {
  latitude: number;
  longitude: number;
}

interface ContextProps {
  precio: string;
  ext_number: string;
  int_number: string;
  postal_code: string;
  route: string;
  onChange: <K extends Object>(value: K, field: onChangeValues) => void;
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
  coordinates: Location;
  setCoordinates: Dispatch<SetStateAction<Location>>;
  administrative_area_level_1: string;
  setAdministrative_area_level_1: Dispatch<SetStateAction<string>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  locality: string;
  setLocality: Dispatch<SetStateAction<string>>;
  isExactLoaction: boolean;
  setIsExactLoaction: Dispatch<SetStateAction<boolean>>;
}

export const PropertyContext = createContext({} as ContextProps);

const PropertyProvider: FC = ({ children }) => {
  const { form, onChange } = useForm({
    precio: '',
    int_number: '',
    ext_number: '',
    postal_code: '',
    route: '',
  });
  const { precio, ext_number, int_number, postal_code, route } = form;
  const [currency, setCurrency] = useState(mxn);
  const [propertyType, setPropertyType] = useState(singleHouse);
  const [actionSelected, setActionSelected] = useState(false);
  const [sharesCom, setSharesCom] = useState<boolean | undefined>(undefined);
  const [bankSale, setBankSale] = useState<boolean | undefined>(undefined);
  const [isCommercial, setIsCommercial] = useState(false);
  const [propertyTypeSelected, setPropertyTypeSelected] = useState(false);
  const [action, setAction] = useState(rent);
  const [coordinates, setCoordinates] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });
  const [administrative_area_level_1, setAdministrative_area_level_1] =
    useState('');
  const [country, setCountry] = useState('');
  const [locality, setLocality] = useState('');
  const [isExactLoaction, setIsExactLoaction] = useState(false);

  return (
    <PropertyContext.Provider
      value={{
        precio,
        ext_number,
        route,
        postal_code,
        int_number,
        onChange,
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
        coordinates,
        setCoordinates,
        administrative_area_level_1,
        setAdministrative_area_level_1,
        country,
        setCountry,
        locality,
        setLocality,
        isExactLoaction,
        setIsExactLoaction,
      }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
