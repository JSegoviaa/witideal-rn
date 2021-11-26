import React, { createContext, FC, useContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { rent } from '../../constant/action';
import { mxn } from '../../constant/currency';
import { lp } from '../../constant/gasType';
import { abierta } from '../../constant/kitchen';
import { interior } from '../../constant/locationBuilding';
import { excelente } from '../../constant/propertyConvervation';
import { singleHouse } from '../../constant/propertyType';
import { useForm } from '../../hooks/useForm';
import { ContextProps } from '../../interfaces/ContextProps';
import { Location } from '../../interfaces/Location';
import { AuthContext } from '../auth/AuthContext';

export const PropertyContext = createContext({} as ContextProps);

const PropertyProvider: FC = ({ children }) => {
  const { user } = useContext(AuthContext);

  const { form, onChange } = useForm({
    price: '',
    antiquity: undefined,
    int_number: undefined,
    street_number: undefined,
    postal_code: undefined,
    route: undefined,
    banks: undefined,
    bath: undefined,
    deliverydate: undefined,
    extras: undefined,
    floorNumber: undefined,
    floors: undefined,
    halfBath: undefined,
    hospitals: undefined,
    landUseCode: undefined,
    m2Build: undefined,
    m2Office: undefined,
    m2Storage: undefined,
    m2Terrain: undefined,
    mainavs: undefined,
    malls: undefined,
    mantainance: undefined,
    mDepth: undefined,
    mFront: undefined,
    metrobus: undefined,
    numDepBuilding: undefined,
    mHeight: undefined,
    parkingSlots: undefined,
    privateOffice: undefined,
    propertyDescription: undefined,
    propertyTitle: undefined,
    room: undefined,
    schools: undefined,
    shops: undefined,
    subway: undefined,
    totalBuildingFloors: undefined,
    totalUnits: undefined,
  });
  const {
    price,
    street_number,
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
    m2Build,
    m2Office,
    m2Storage,
    m2Terrain,
    mainavs,
    malls,
    mantainance,
    mDepth,
    mFront,
    metrobus,
    mHeight,
    numDepBuilding,
    parkingSlots,
    privateOffice,
    propertyDescription,
    propertyTitle,
    room,
    schools,
    shops,
    subway,
    totalBuildingFloors,
    totalUnits,
  } = form;

  const [uploadingProperty, setUploadingProperty] = useState(false);

  const [antiquity, setAntiquity] = useState('0-5');
  const [currency, setCurrency] = useState(mxn);
  const [propertyType, setPropertyType] = useState(singleHouse);
  const [actionSelected, setActionSelected] = useState(false);
  const [sharesCom, setSharesCom] = useState<boolean | undefined>(true);
  const [bankSale, setBankSale] = useState<boolean | undefined>(false);
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
  const [isExactLoaction, setIsExactLoaction] = useState(true);

  const [locationInBuilding, setLocationInBuilding] = useState(interior);
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
  const [trailerPlat, setTrailerPlat] = useState<boolean | undefined>(
    undefined,
  );
  const [tempUri, setTempUri] = useState<string>('');
  const [fileName, setFileName] = useState<string | undefined>('');
  const [tempUris, setTempUris] = useState<any>();
  const [fileNames, setFileNames] = useState<any>();

  const uploadPicture = async () => {
    console.log('Se subió una imagen');
  };

  const uploadPictures = async () => {
    console.log('Se subieron muchas imágenes');
  };

  const uploadToUserInfo = async () => {
    try {
      await firestore()
        .collection('production')
        .doc('Users')
        .collection(user?.uid!)
        .doc('properties')
        .collection('ownedProperties')
        .add(property);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadToAllProperties = async () => {
    try {
      await firestore()
        .collection('production')
        .doc('witideal')
        .collection('genders')
        .doc(propertyType)
        .collection(action)
        .add(property);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadProperty = () => {
    setUploadingProperty(true);
    //Esto sube las imágenes
    uploadPicture();
    uploadPictures();

    firestore().settings({ ignoreUndefinedProperties: true });
    //Esto sube el inmueble
    uploadToUserInfo();
    setUploadingProperty(false);
  };

  const specificData = {
    airConditioner,
    alarm,
    antiquity,
    banks,
    balcony,
    bath,
    bussinessCentre,
    carElevator,
    cctv,
    cellar,
    cistern,
    closedStreet,
    deliverydate,
    electricFence,
    electricity,
    elevator,
    equipment,
    extras,
    familyRoom,
    fireAlarm,
    floorNumber,
    floors,
    garden,
    gasType,
    gym,
    halfBath,
    hospitals,
    insideCorp,
    insideIndust,
    insideMall,
    isMantainceIncluded,
    janitor,
    kitchen,
    landUseCode,
    laundry,
    locationInBuilding,
    m2Build,
    m2Office,
    m2Storage,
    m2Terrain,
    mDepth,
    mFront,
    mHeight,
    mainavs,
    malls,
    mantainance,
    metrobus,
    numDepBuilding,
    onstreet,
    parkingSlots,
    partyRoom,
    petFriendly,
    playground,
    pool,
    preservationState,
    privateOffice,
    propertyDescription,
    propertyTitle,
    room,
    roofGarden,
    schools,
    security247,
    serviceRoom,
    shops,
    sportsField,
    study,
    subway,
    swimmingLane,
    terrace,
    totalBuildingFloors,
    totalUnits,
    trailerPlat,
    tvRoom,
    water,
    wireFence,
  };

  const { latitude: lat, longitude: lng } = coordinates;
  const property = {
    action,
    administrative_area_level_1,
    bankSale,
    lat,
    lng,
    price: parseInt(price),
    country,
    currency,
    street_number,
    int_number,
    isCommercial,
    isExactLoaction,
    locality,
    postal_code,
    route,
    propertyType,
    sharesCom,
    specificData,
    principalPhotoPath: tempUri,
    photos: { extras: tempUris },
    uId: user?.uid,
    isEnabled: true,
    isActive: true,
    isDestProperty: false,
    uploadDate: new Date(),
  };

  return (
    <PropertyContext.Provider
      value={{
        uploadingProperty,
        price,
        street_number,
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
        setAntiquity,
        setIsExactLoaction,
        setLocationInBuilding,
        setPreservationState,
        setKitchen,
        setServiceRoom,
        setLaundry,
        setCellar,
        setBalcony,
        setTerrace,
        setRoofGarden,
        setFamilyRoom,
        setStudy,
        setTvRoom,
        setCarElevator,
        setWireFence,
        setElectricFence,
        setClosedStreet,
        setCctv,
        setAlarm,
        setJanitor,
        setSecurity247,
        setPool,
        setSportsField,
        setSwimmingLane,
        setBussinessCentre,
        setPlayground,
        setPartyRoom,
        setGym,
        setElevator,
        setAirConditioner,
        setIsMantainceIncluded,
        setGasType,
        setPetFriendly,
        setGarden,
        setCistern,
        setTrailerPlat,
        setEquipment,
        setOnstreet,
        setInsideMall,
        setInsideCorp,
        setFireAlarm,
        setInsideIndust,
        setElectricity,
        setWater,
        tempUri,
        setTempUri,
        fileName,
        setFileName,
        specificData,
        uploadProperty,
        tempUris,
        fileNames,
        setTempUris,
        setFileNames,
      }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
