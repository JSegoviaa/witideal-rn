import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react';
import { rent } from '../../constant/action';
import { mxn } from '../../constant/currency';
import { lp } from '../../constant/gasType';
import { abierta } from '../../constant/kitchen';
import { interior } from '../../constant/locationBuilding';
import { excelente } from '../../constant/propertyConvervation';
import { singleHouse } from '../../constant/propertyType';
import { useForm } from '../../hooks/useForm';

type onChangeValues =
  | 'precio'
  | 'route'
  | 'postal_code'
  | 'int_number'
  | 'ext_number'
  | 'banks'
  | 'bath'
  | 'deliverydate'
  | 'extras'
  | 'floorNumber'
  | 'floors'
  | 'halfBath'
  | 'hospitals'
  | 'landUseCode'
  | 'm2build'
  | 'm2Office'
  | 'm2Storage'
  | 'm2terrain'
  | 'mainavs'
  | 'malls'
  | 'mantainance'
  | 'mDepth'
  | 'mFront'
  | 'metrobus'
  | 'mHeight'
  | 'parkingSlots'
  | 'privateOffice'
  | 'propertyDescription'
  | 'propertyTitle'
  | 'room'
  | 'schools'
  | 'shops'
  | 'subway'
  | 'totalBuidingFloors'
  | 'totalUnits';

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
  banks: string;
  bath: string;
  deliverydate: string;
  extras: string;
  floorNumber: string;
  floors: string;
  halfBath: string;
  hospitals: string;
  landUseCode: string;
  m2build: string;
  m2Office: string;
  m2Storage: string;
  m2terrain: string;
  mainavs: string;
  malls: string;
  mantainance: number;
  mDepth: string;
  mFront: string;
  metrobus: string;
  mHeight: string;
  parkingSlots: string;
  privateOffice: string;
  propertyDescription: string;
  propertyTitle: string;
  room: string;
  schools: string;
  shops: string;
  subway: string;
  totalBuidingFloors: string;
  totalUnits: string;
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
  locationBuilding: string;
  setLocationBuilding: Dispatch<SetStateAction<string>>;
  preservationState: string;
  setPreservationState: Dispatch<SetStateAction<string>>;
  kitchen: string;
  setKitchen: Dispatch<SetStateAction<string>>;
  serviceRoom: boolean | undefined;
  setServiceRoom: Dispatch<SetStateAction<boolean | undefined>>;
  laundry: boolean | undefined;
  setLaundry: Dispatch<SetStateAction<boolean | undefined>>;
  cellar: boolean | undefined;
  setCellar: Dispatch<SetStateAction<boolean | undefined>>;
  balcony: boolean | undefined;
  setBalcony: Dispatch<SetStateAction<boolean | undefined>>;
  terrace: boolean | undefined;
  setTerrace: Dispatch<SetStateAction<boolean | undefined>>;
  roofGarden: boolean | undefined;
  setRoofGarden: Dispatch<SetStateAction<boolean | undefined>>;
  familyRoom: boolean | undefined;
  setFamilyRoom: Dispatch<SetStateAction<boolean | undefined>>;
  study: boolean | undefined;
  setStudy: Dispatch<SetStateAction<boolean | undefined>>;
  tvRoom: boolean | undefined;
  setTvRoom: Dispatch<SetStateAction<boolean | undefined>>;
  carElevator: boolean | undefined;
  setCarElevator: Dispatch<SetStateAction<boolean | undefined>>;
  wireFence: boolean | undefined;
  setWireFence: Dispatch<SetStateAction<boolean | undefined>>;
  electricFence: boolean | undefined;
  setElectricFence: Dispatch<SetStateAction<boolean | undefined>>;
  closedStreet: boolean | undefined;
  setClosedStreet: Dispatch<SetStateAction<boolean | undefined>>;
  cctv: boolean | undefined;
  setCctv: Dispatch<SetStateAction<boolean | undefined>>;
  alarm: boolean | undefined;
  setAlarm: Dispatch<SetStateAction<boolean | undefined>>;
  janitor: boolean | undefined;
  setJanitor: Dispatch<SetStateAction<boolean | undefined>>;
  security247: boolean | undefined;
  setSecurity247: Dispatch<SetStateAction<boolean | undefined>>;
  pool: boolean | undefined;
  setPool: Dispatch<SetStateAction<boolean | undefined>>;
  sportsField: boolean | undefined;
  setSportsField: Dispatch<SetStateAction<boolean | undefined>>;
  swimmingLane: boolean | undefined;
  setSwimmingLane: Dispatch<SetStateAction<boolean | undefined>>;
  bussinessCentre: boolean | undefined;
  setBussinessCentre: Dispatch<SetStateAction<boolean | undefined>>;
  playground: boolean | undefined;
  setPlayground: Dispatch<SetStateAction<boolean | undefined>>;
  partyRoom: boolean | undefined;
  setPartyRoom: Dispatch<SetStateAction<boolean | undefined>>;
  gym: boolean | undefined;
  setGym: Dispatch<SetStateAction<boolean | undefined>>;
  elevator: boolean | undefined;
  setElevator: Dispatch<SetStateAction<boolean | undefined>>;
  airConditioner: boolean | undefined;
  setAirConditioner: Dispatch<SetStateAction<boolean | undefined>>;
  isMantainceIncluded: boolean | undefined;
  setIsMantainceIncluded: Dispatch<SetStateAction<boolean | undefined>>;
  gasType: string;
  setGasType: Dispatch<SetStateAction<string>>;
  petFriendly: boolean | undefined;
  setPetFriendly: Dispatch<SetStateAction<boolean | undefined>>;
  garden: boolean | undefined;
  setGarden: Dispatch<SetStateAction<boolean | undefined>>;
  cistern: boolean | undefined;
  setCistern: Dispatch<SetStateAction<boolean | undefined>>;
  equipment: boolean | undefined;
  setEquipment: Dispatch<SetStateAction<boolean | undefined>>;
  onstreet: boolean | undefined;
  setOnstreet: Dispatch<SetStateAction<boolean | undefined>>;
  insideMall: boolean | undefined;
  setInsideMall: Dispatch<SetStateAction<boolean | undefined>>;
  insideCorp: boolean | undefined;
  setInsideCorp: Dispatch<SetStateAction<boolean | undefined>>;
  fireAlarm: boolean | undefined;
  setFireAlarm: Dispatch<SetStateAction<boolean | undefined>>;
  insideIndust: boolean | undefined;
  setInsideIndust: Dispatch<SetStateAction<boolean | undefined>>;
  electricity: boolean | undefined;
  setElectricity: Dispatch<SetStateAction<boolean | undefined>>;
  water: boolean | undefined;
  setWater: Dispatch<SetStateAction<boolean | undefined>>;
}

export const PropertyContext = createContext({} as ContextProps);

const PropertyProvider: FC = ({ children }) => {
  const { form, onChange } = useForm({
    precio: '',
    int_number: '',
    ext_number: '',
    postal_code: '',
    route: '',
    banks: '',
    bath: '',
    deliverydate: '',
    extras: '',
    floorNumber: '',
    floors: '',
    halfBath: '',
    hospitals: '',
    landUseCode: '',
    m2build: '',
    m2Office: '',
    m2Storage: '',
    m2terrain: '',
    mainavs: '',
    malls: '',
    mantainance: 0,
    mDepth: '',
    mFront: '',
    metrobus: '',
    mHeight: '',
    parkingSlots: '',
    privateOffice: '',
    propertyDescription: '',
    propertyTitle: '',
    room: '',
    schools: '',
    shops: '',
    subway: '',
    totalBuidingFloors: '',
    totalUnits: '',
  });
  const {
    precio,
    ext_number,
    int_number,
    postal_code,
    route,
    banks,
    bath,
    deliverydate,
    extras,
    floorNumber,
    floors,
    halfBath,
    hospitals,
    landUseCode,
    m2build,
    m2Office,
    m2Storage,
    m2terrain,
    mainavs,
    malls,
    mantainance,
    mDepth,
    mFront,
    metrobus,
    mHeight,
    parkingSlots,
    privateOffice,
    propertyDescription,
    propertyTitle,
    room,
    schools,
    shops,
    subway,
    totalBuidingFloors,
    totalUnits,
  } = form;
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

  const [locationBuilding, setLocationBuilding] = useState(interior);
  const [preservationState, setPreservationState] = useState(excelente);
  const [kitchen, setKitchen] = useState(abierta);
  const [serviceRoom, setServiceRoom] = useState<boolean | undefined>(
    undefined,
  );
  const [laundry, setLaundry] = useState<boolean | undefined>(undefined);
  const [cellar, setCellar] = useState<boolean | undefined>(undefined);
  const [balcony, setBalcony] = useState<boolean | undefined>(undefined);
  const [terrace, setTerrace] = useState<boolean | undefined>(undefined);
  const [roofGarden, setRoofGarden] = useState<boolean | undefined>(undefined);
  const [familyRoom, setFamilyRoom] = useState<boolean | undefined>(undefined);
  const [study, setStudy] = useState<boolean | undefined>(undefined);
  const [tvRoom, setTvRoom] = useState<boolean | undefined>(undefined);
  const [carElevator, setCarElevator] = useState<boolean | undefined>(
    undefined,
  );
  const [wireFence, setWireFence] = useState<boolean | undefined>(undefined);
  const [electricFence, setElectricFence] = useState<boolean | undefined>(
    undefined,
  );
  const [closedStreet, setClosedStreet] = useState<boolean | undefined>(
    undefined,
  );
  const [cctv, setCctv] = useState<boolean | undefined>(undefined);
  const [alarm, setAlarm] = useState<boolean | undefined>(undefined);
  const [janitor, setJanitor] = useState<boolean | undefined>(undefined);
  const [security247, setSecurity247] = useState<boolean | undefined>(
    undefined,
  );
  const [pool, setPool] = useState<boolean | undefined>(undefined);
  const [sportsField, setSportsField] = useState<boolean | undefined>(
    undefined,
  );
  const [swimmingLane, setSwimmingLane] = useState<boolean | undefined>(
    undefined,
  );
  const [bussinessCentre, setBussinessCentre] = useState<boolean | undefined>(
    undefined,
  );
  const [playground, setPlayground] = useState<boolean | undefined>(undefined);
  const [partyRoom, setPartyRoom] = useState<boolean | undefined>(undefined);
  const [gym, setGym] = useState<boolean | undefined>(undefined);
  const [elevator, setElevator] = useState<boolean | undefined>(undefined);
  const [airConditioner, setAirConditioner] = useState<boolean | undefined>(
    undefined,
  );
  const [isMantainceIncluded, setIsMantainceIncluded] = useState<
    boolean | undefined
  >(undefined);
  const [gasType, setGasType] = useState(lp);
  const [petFriendly, setPetFriendly] = useState<boolean | undefined>(
    undefined,
  );
  const [garden, setGarden] = useState<boolean | undefined>(undefined);
  const [cistern, setCistern] = useState<boolean | undefined>(undefined);
  const [equipment, setEquipment] = useState<boolean | undefined>(undefined);
  const [onstreet, setOnstreet] = useState<boolean | undefined>(undefined);
  const [insideMall, setInsideMall] = useState<boolean | undefined>(undefined);
  const [insideCorp, setInsideCorp] = useState<boolean | undefined>(undefined);
  const [fireAlarm, setFireAlarm] = useState<boolean | undefined>(undefined);
  const [insideIndust, setInsideIndust] = useState<boolean | undefined>(
    undefined,
  );
  const [electricity, setElectricity] = useState<boolean | undefined>(
    undefined,
  );
  const [water, setWater] = useState<boolean | undefined>(undefined);

  return (
    <PropertyContext.Provider
      value={{
        precio,
        ext_number,
        route,
        postal_code,
        int_number,
        banks,
        bath,
        deliverydate,
        extras,
        floorNumber,
        floors,
        halfBath,
        hospitals,
        landUseCode,
        m2build,
        m2Office,
        m2Storage,
        m2terrain,
        mainavs,
        malls,
        mantainance,
        mDepth,
        mFront,
        metrobus,
        mHeight,
        parkingSlots,
        privateOffice,
        propertyDescription,
        propertyTitle,
        room,
        schools,
        shops,
        subway,
        totalBuidingFloors,
        totalUnits,
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
        locationBuilding,
        setLocationBuilding,
        preservationState,
        setPreservationState,
        kitchen,
        setKitchen,
        serviceRoom,
        setServiceRoom,
        laundry,
        setLaundry,
        cellar,
        setCellar,
        balcony,
        setBalcony,
        terrace,
        setTerrace,
        roofGarden,
        setRoofGarden,
        familyRoom,
        setFamilyRoom,
        study,
        setStudy,
        tvRoom,
        setTvRoom,
        carElevator,
        setCarElevator,
        wireFence,
        setWireFence,
        electricFence,
        setElectricFence,
        closedStreet,
        setClosedStreet,
        cctv,
        setCctv,
        alarm,
        setAlarm,
        janitor,
        setJanitor,
        security247,
        setSecurity247,
        pool,
        setPool,
        sportsField,
        setSportsField,
        swimmingLane,
        setSwimmingLane,
        bussinessCentre,
        setBussinessCentre,
        playground,
        setPlayground,
        partyRoom,
        setPartyRoom,
        gym,
        setGym,
        elevator,
        setElevator,
        airConditioner,
        setAirConditioner,
        isMantainceIncluded,
        setIsMantainceIncluded,
        gasType,
        setGasType,
        petFriendly,
        setPetFriendly,
        garden,
        setGarden,
        cistern,
        setCistern,
        equipment,
        setEquipment,
        onstreet,
        setOnstreet,
        insideMall,
        setInsideMall,
        insideCorp,
        setInsideCorp,
        fireAlarm,
        setFireAlarm,
        insideIndust,
        setInsideIndust,
        electricity,
        setElectricity,
        water,
        setWater,
      }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
