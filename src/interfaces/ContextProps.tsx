import { Dispatch, SetStateAction } from 'react';
import { Location } from './Location';

type onChangeValues =
  | 'price'
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
  | 'm2Terrain'
  | 'mainavs'
  | 'malls'
  | 'mantainance'
  | 'mDepth'
  | 'mFront'
  | 'metrobus'
  | 'mHeight'
  | 'numDepBuilding'
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
  airConditioner: boolean | undefined;
  alarm: boolean | undefined;
  antiquity: string | undefined;
  balcony: boolean | undefined;
  banks: string;
  bath: string;
  bussinessCentre: boolean | undefined;
  carElevator: boolean | undefined;
  cctv: boolean | undefined;
  cellar: boolean | undefined;
  cistern: boolean | undefined;
  closedStreet: boolean | undefined;
  deliverydate: string;
  electricFence: boolean | undefined;
  electricity: boolean | undefined;
  elevator: boolean | undefined;
  equipment: boolean | undefined;
  extras: string;
  familyRoom: boolean | undefined;
  fireAlarm: boolean | undefined;
  floorNumber: string;
  floors: string;
  garden: boolean | undefined;
  gasType: string;
  gym: boolean | undefined;
  halfBath: string;
  hospitals: string;
  insideCorp: boolean | undefined;
  insideIndust: boolean | undefined;
  insideMall: boolean | undefined;
  isMantainceIncluded: boolean | undefined;
  janitor: boolean | undefined;
  kitchen: string;
  landUseCode: string;
  laundry: boolean | undefined;
  m2Build: string;
  m2Office: string;
  m2Storage: string;
  m2Terrain: string;
  mDepth: string;
  mFront: string;
  mHeight: string;
  mainavs: string;
  malls: string;
  mantainance: number;
  metrobus: string;
  onstreet: boolean | undefined;
  parkingSlots: string;
  partyRoom: boolean | undefined;
  petFriendly: boolean | undefined;
  playground: boolean | undefined;
  pool: boolean | undefined;
  preservationState: string;
  privateOffice: string;
  propertyDescription: string;
  propertyTitle: string;
  roofGarden: boolean | undefined;
  room: string;
  schools: string;
  security247: boolean | undefined;
  locationInBuilding: string;
  serviceRoom: boolean | undefined;
  shops: string;
  sportsField: boolean | undefined;
  study: boolean | undefined;
  subway: string;
  swimmingLane: boolean | undefined;
  terrace: boolean | undefined;
  totalBuildingFloors: string;
  totalUnits: string;
  tvRoom: boolean | undefined;
  trailerPlat: boolean | undefined;
  water: boolean | undefined;
  wireFence: boolean | undefined;
}

export interface ContextProps {
  price: string;
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
  setTrailerPlat: Dispatch<SetStateAction<boolean | undefined>>;
  setAntiquity: Dispatch<SetStateAction<string>>;
  setIsExactLoaction: Dispatch<SetStateAction<boolean>>;
  setLocationInBuilding: Dispatch<SetStateAction<string>>;
  setPreservationState: Dispatch<SetStateAction<string>>;
  setKitchen: Dispatch<SetStateAction<string>>;
  setServiceRoom: Dispatch<SetStateAction<boolean | undefined>>;
  setLaundry: Dispatch<SetStateAction<boolean | undefined>>;
  setCellar: Dispatch<SetStateAction<boolean | undefined>>;
  setBalcony: Dispatch<SetStateAction<boolean | undefined>>;
  setTerrace: Dispatch<SetStateAction<boolean | undefined>>;
  setRoofGarden: Dispatch<SetStateAction<boolean | undefined>>;
  setFamilyRoom: Dispatch<SetStateAction<boolean | undefined>>;
  setStudy: Dispatch<SetStateAction<boolean | undefined>>;
  setTvRoom: Dispatch<SetStateAction<boolean | undefined>>;
  setCarElevator: Dispatch<SetStateAction<boolean | undefined>>;
  setWireFence: Dispatch<SetStateAction<boolean | undefined>>;
  setElectricFence: Dispatch<SetStateAction<boolean | undefined>>;
  setClosedStreet: Dispatch<SetStateAction<boolean | undefined>>;
  setCctv: Dispatch<SetStateAction<boolean | undefined>>;
  setAlarm: Dispatch<SetStateAction<boolean | undefined>>;
  setJanitor: Dispatch<SetStateAction<boolean | undefined>>;
  setSecurity247: Dispatch<SetStateAction<boolean | undefined>>;
  setPool: Dispatch<SetStateAction<boolean | undefined>>;
  setSportsField: Dispatch<SetStateAction<boolean | undefined>>;
  setSwimmingLane: Dispatch<SetStateAction<boolean | undefined>>;
  setBussinessCentre: Dispatch<SetStateAction<boolean | undefined>>;
  setPlayground: Dispatch<SetStateAction<boolean | undefined>>;
  setPartyRoom: Dispatch<SetStateAction<boolean | undefined>>;
  setGym: Dispatch<SetStateAction<boolean | undefined>>;
  setElevator: Dispatch<SetStateAction<boolean | undefined>>;
  setAirConditioner: Dispatch<SetStateAction<boolean | undefined>>;
  setIsMantainceIncluded: Dispatch<SetStateAction<boolean | undefined>>;
  setGasType: Dispatch<SetStateAction<string>>;
  setPetFriendly: Dispatch<SetStateAction<boolean | undefined>>;
  setGarden: Dispatch<SetStateAction<boolean | undefined>>;
  setCistern: Dispatch<SetStateAction<boolean | undefined>>;
  setEquipment: Dispatch<SetStateAction<boolean | undefined>>;
  setOnstreet: Dispatch<SetStateAction<boolean | undefined>>;
  setInsideMall: Dispatch<SetStateAction<boolean | undefined>>;
  setInsideCorp: Dispatch<SetStateAction<boolean | undefined>>;
  setFireAlarm: Dispatch<SetStateAction<boolean | undefined>>;
  setInsideIndust: Dispatch<SetStateAction<boolean | undefined>>;
  setElectricity: Dispatch<SetStateAction<boolean | undefined>>;
  setWater: Dispatch<SetStateAction<boolean | undefined>>;
  tempUri: string;
  setTempUri: Dispatch<SetStateAction<string>>;
  fileName: string | undefined;
  setFileName: Dispatch<SetStateAction<string | undefined>>;
  uploadProperty: () => void;
  specificData: SpecificData;
}
