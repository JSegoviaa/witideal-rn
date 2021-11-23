import { Dispatch, SetStateAction } from 'react';
import { Location } from './Location';

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
  | 'm2Build'
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
  | 'totalBuildingFloors'
  | 'totalUnits';

interface SpecificData {
  banks: string;
  bath: string;
  m2Build: string;
  room: string;
  parkingSlots: string;
  extras: string;
  cctv: boolean | undefined;
  elevator: boolean | undefined;
  schools: string;
  mainavs: string;
  pool: boolean | undefined;
  playground: boolean | undefined;
  bussinessCentre: boolean | undefined;
  balcony: boolean | undefined;
  gym: boolean | undefined;
  floorNumber: string;
  gasType: string;
  closedStreet: boolean | undefined;
  partyRoom: boolean | undefined;
  halfBath: string;
  security247: boolean | undefined;
}

export interface ContextProps {
  precio: string;
  ext_number: string;
  int_number: string;
  postal_code: string;
  route: string;
  deliverydate: string;
  floors: string;
  hospitals: string;
  landUseCode: string;
  m2Office: string;
  m2Storage: string;
  m2terrain: string;
  malls: string;
  mantainance: number;
  mDepth: string;
  mFront: string;
  metrobus: string;
  mHeight: string;
  privateOffice: string;
  propertyDescription: string;
  propertyTitle: string;
  shops: string;
  subway: string;
  totalBuildingFloors: string;
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
  locationInBuilding: string;
  setLocationInBuilding: Dispatch<SetStateAction<string>>;
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
  setClosedStreet: Dispatch<SetStateAction<boolean | undefined>>;
  setCctv: Dispatch<SetStateAction<boolean | undefined>>;
  alarm: boolean | undefined;
  setAlarm: Dispatch<SetStateAction<boolean | undefined>>;
  janitor: boolean | undefined;
  setJanitor: Dispatch<SetStateAction<boolean | undefined>>;
  setSecurity247: Dispatch<SetStateAction<boolean | undefined>>;
  setPool: Dispatch<SetStateAction<boolean | undefined>>;
  sportsField: boolean | undefined;
  setSportsField: Dispatch<SetStateAction<boolean | undefined>>;
  swimmingLane: boolean | undefined;
  setSwimmingLane: Dispatch<SetStateAction<boolean | undefined>>;
  setBussinessCentre: Dispatch<SetStateAction<boolean | undefined>>;
  setPlayground: Dispatch<SetStateAction<boolean | undefined>>;
  setPartyRoom: Dispatch<SetStateAction<boolean | undefined>>;
  setGym: Dispatch<SetStateAction<boolean | undefined>>;
  setElevator: Dispatch<SetStateAction<boolean | undefined>>;
  airConditioner: boolean | undefined;
  setAirConditioner: Dispatch<SetStateAction<boolean | undefined>>;
  isMantainceIncluded: boolean | undefined;
  setIsMantainceIncluded: Dispatch<SetStateAction<boolean | undefined>>;
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
  uploadPicture: () => void;
  uploadPictures: () => void;
  specificData: SpecificData;
}
