import React, { createContext, FC, useState } from 'react';
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
    m2Build: '',
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
    totalBuildingFloors: '',
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
    m2Build,
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
    totalBuildingFloors,
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

  const uploadPicture = () => {
    console.log('Se subió una imagen');
  };

  const uploadPictures = () => {
    console.log('Se subieron muchas imágenes');
  };
  const specificData = {
    banks,
    m2Build,
    room,
    bath,
    parkingSlots,
    extras,
    cctv,
    elevator,
    schools,
    mainavs,
    pool,
    playground,
    bussinessCentre,
    balcony,
    gym,
    floorNumber,
    gasType,
    closedStreet,
    partyRoom,
    halfBath,
    security247,
  };

  return (
    <PropertyContext.Provider
      value={{
        precio,
        ext_number,
        route,
        postal_code,
        int_number,
        deliverydate,
        floors,
        hospitals,
        landUseCode,
        m2Office,
        m2Storage,
        m2terrain,
        malls,
        mantainance,
        mDepth,
        mFront,
        metrobus,
        mHeight,
        privateOffice,
        propertyDescription,
        propertyTitle,
        shops,
        subway,
        totalBuildingFloors,
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
        locationInBuilding,
        setLocationInBuilding,
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
        setClosedStreet,
        setCctv,
        alarm,
        setAlarm,
        janitor,
        setJanitor,
        setSecurity247,
        setPool,
        sportsField,
        setSportsField,
        swimmingLane,
        setSwimmingLane,
        setBussinessCentre,
        setPlayground,
        setPartyRoom,
        setGym,
        setElevator,
        airConditioner,
        setAirConditioner,
        isMantainceIncluded,
        setIsMantainceIncluded,
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
        uploadPicture,
        uploadPictures,
        specificData,
      }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
