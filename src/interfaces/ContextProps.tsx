import { Dispatch, SetStateAction } from 'react';
import { Location } from './Location';

type onChangeValues =
  | 'price'
  | 'route'
  | 'postal_code'
  | 'int_number'
  | 'street_number'
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
  banks: string | undefined;
  bath: string | undefined;
  bussinessCentre: boolean | undefined;
  carElevator: boolean | undefined;
  cctv: boolean | undefined;
  cellar: boolean | undefined;
  cistern: boolean | undefined;
  closedStreet: boolean | undefined;
  deliverydate: string | undefined;
  electricFence: boolean | undefined;
  electricity: boolean | undefined;
  elevator: boolean | undefined;
  equipment: boolean | undefined;
  extras: string | undefined;
  familyRoom: boolean | undefined;
  fireAlarm: boolean | undefined;
  floorNumber: string | undefined;
  floors: string | undefined;
  garden: boolean | undefined;
  gasType: string | undefined;
  gym: boolean | undefined;
  halfBath: string | undefined;
  hospitals: string | undefined;
  insideCorp: boolean | undefined;
  insideIndust: boolean | undefined;
  insideMall: boolean | undefined;
  isMantainceIncluded: boolean | undefined;
  janitor: boolean | undefined;
  kitchen: string;
  landUseCode: string | undefined;
  laundry: boolean | undefined;
  m2Build: string | undefined;
  m2Office: string | undefined;
  m2Storage: string | undefined;
  m2Terrain: string | undefined;
  mDepth: string | undefined;
  mFront: string | undefined;
  mHeight: string | undefined;
  mainavs: string | undefined;
  malls: string | undefined;
  mantainance: number | undefined;
  metrobus: string | undefined;
  onstreet: boolean | undefined;
  parkingSlots: string | undefined;
  partyRoom: boolean | undefined;
  petFriendly: boolean | undefined;
  playground: boolean | undefined;
  pool: boolean | undefined;
  preservationState: string;
  privateOffice: string | undefined;
  propertyDescription: string | undefined;
  propertyTitle: string | undefined;
  roofGarden: boolean | undefined;
  room: string | undefined;
  schools: string | undefined;
  security247: boolean | undefined;
  locationInBuilding: string;
  serviceRoom: boolean | undefined;
  shops: string | undefined;
  sportsField: boolean | undefined;
  study: boolean | undefined;
  subway: string | undefined;
  swimmingLane: boolean | undefined;
  terrace: boolean | undefined;
  totalBuildingFloors: string | undefined;
  totalUnits: string | undefined;
  tvRoom: boolean | undefined;
  trailerPlat: boolean | undefined;
  water: boolean | undefined;
  wireFence: boolean | undefined;
}

export interface ContextProps {
  uploadingProperty: boolean;
  price: string;
  street_number: string | undefined;
  int_number: string | undefined;
  postal_code: string | undefined;
  route: string | undefined;
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
  isExactLocation: boolean;
  setTrailerPlat: Dispatch<SetStateAction<boolean | undefined>>;
  setAntiquity: Dispatch<SetStateAction<string>>;
  setIsExactLocation: Dispatch<SetStateAction<boolean>>;
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
  tempUris: (string | undefined)[] | undefined;
  fileNames: (string | undefined)[] | undefined;
  setTempUris: any;
  setFileNames: any;
  uploadProperty: () => void;
  uploadPicture: (pid: string) => Promise<void>;
  uploadPictures: (pid: string) => Promise<void>;
  cleanState: () => void;
  specificData: SpecificData;
}
