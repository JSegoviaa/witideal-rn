import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { appStyles } from '../../theme/appTheme';
import {
  bueno,
  excelente,
  regular,
  remodelar,
} from '../../constant/propertyConvervation';
import { exterior, interior } from '../../constant/locationBuilding';
import { abierta, cerrada } from '../../constant/kitchen';
import { useForm } from '../../hooks/useForm';
import { lp, natural, noGas } from '../../constant/gasType';

const SpecificData = () => {
  const { form, onChange } = useForm({
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

  const [locationBuilding, setLocationBuilding] = useState<String>(interior);
  const [preservationState, setPreservationState] = useState<String>(excelente);
  const [kitchen, setKitchen] = useState<String>(abierta);
  const [serviceRoom, setServiceRoom] = useState<Boolean>(false);
  const [laundry, setLaundry] = useState<Boolean>(false);
  const [cellar, setCellar] = useState<Boolean>(false);
  const [balcony, setBalcony] = useState<Boolean>(false);
  const [terrace, setTerrace] = useState<Boolean>(false);
  const [roofGarden, setRoofGarden] = useState<Boolean>(false);
  const [familyRoom, setFamilyRoom] = useState<Boolean>(false);
  const [study, setStudy] = useState<Boolean>(false);
  const [tvRoom, setTvRoom] = useState<Boolean>(false);
  const [carElevator, setCarElevator] = useState<Boolean>(false);
  const [wireFence, setWireFence] = useState<Boolean>(false);
  const [electricFence, setElectricFence] = useState<Boolean>(false);
  const [closedStreet, setClosedStreet] = useState<Boolean>(false);
  const [cctv, setCctv] = useState<Boolean>(false);
  const [alarm, setAlarm] = useState<Boolean>(false);
  const [janitor, setJanitor] = useState<Boolean>(false);
  const [security247, setSecurity247] = useState<Boolean>(false);
  const [pool, setPool] = useState<Boolean>(false);
  const [sportsField, setSportsField] = useState<Boolean>(false);
  const [swimmingLane, setSwimmingLane] = useState<Boolean>(false);
  const [bussinessCentre, setBussinessCentre] = useState<Boolean>(false);
  const [playground, setPlayground] = useState<Boolean>(false);
  const [partyRoom, setPartyRoom] = useState<Boolean>(false);
  const [gym, setGym] = useState<Boolean>(false);
  const [elevator, setElevator] = useState<Boolean>(false);
  const [airConditioner, setAirConditioner] = useState<Boolean>(false);
  const [isMantainceIncluded, setIsMantainceIncluded] =
    useState<Boolean>(false);
  const [gasType, setGasType] = useState(lp);
  const [petFriendly, setPetFriendly] = useState<Boolean | undefined>(
    undefined,
  );
  const [garden, setGarden] = useState<Boolean | undefined>(undefined);
  const [cistern, setCistern] = useState<Boolean | undefined>(undefined);
  const [equipment, setEquipment] = useState<Boolean | undefined>(undefined);
  const [onstreet, setOnstreet] = useState<Boolean | undefined>(undefined);
  const [insideMall, setInsideMall] = useState<Boolean | undefined>(undefined);
  const [insideCorp, setInsideCorp] = useState<Boolean | undefined>(undefined);
  const [fireAlarm, setFireAlarm] = useState<Boolean | undefined>(undefined);
  const [insideIndust, setInsideIndust] = useState<Boolean | undefined>(
    undefined,
  );
  const [electricity, setElectricity] = useState<Boolean | undefined>(
    undefined,
  );
  const [water, setWater] = useState<Boolean | undefined>(undefined);

  const {
    propertyTitle,
    propertyDescription,
    deliverydate,
    metrobus,
    subway,
    mainavs,
    hospitals,
    schools,
    banks,
    shops,
    malls,
    privateOffice,
    parkingSlots,
    halfBath,
    bath,
    room,
    m2build,
    totalUnits,
    totalBuidingFloors,
    floorNumber,
    m2terrain,
    floors,
    landUseCode,
    mDepth,
    mFront,
    extras,
    m2Office,
    m2Storage,
    mHeight,
    mantainance,
  } = form;

  return (
    <View>
      <View>
        <Text style={styles.title}>
          El tipo de inmueble que seleccionaste fue Departamento
        </Text>
        <Text style={styles.text}>
          Llena el siguiente formulario, mientras más completa la información,
          mejor oportunidad tendrá el anuncion de aparecer en la búsqueda de
          usuarios
        </Text>
      </View>

      <View>
        <Text style={styles.subtitle}>Características Físicas</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'm2build')}
          style={appStyles.input}
          placeholder="M2 construidos"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'totalUnits')}
          style={appStyles.input}
          placeholder="Total de unidades del conjunto"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'totalBuidingFloors')}
          style={appStyles.input}
          placeholder="Niveles del edificio"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'm2terrain')}
          style={appStyles.input}
          placeholder="M2 del terreno"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'floors')}
          style={appStyles.input}
          placeholder="Niveles construidos"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'floorNumber')}
          style={appStyles.input}
          placeholder="Nivel en el que se encuentra"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'floorNumber')}
          style={appStyles.input}
          placeholder="Metros de altura"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'floorNumber')}
          style={appStyles.input}
          placeholder="M2 Bodega"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'm2Office')}
          style={appStyles.input}
          placeholder="M2 Oficina"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'm2Storage')}
          style={appStyles.input}
          placeholder="M2 Bodega"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'mHeight')}
          style={appStyles.input}
          placeholder="Metros de altura"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'mDepth')}
          style={appStyles.input}
          placeholder="Metros de fondo"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'mFront')}
          style={appStyles.input}
          placeholder="Metros de frente"
        />
      </View>

      <View>
        <Text style={styles.subtitle}>Ubicación en edificio</Text>
        <View style={appStyles.picker}>
          <Picker
            selectedValue={locationBuilding}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) =>
              setLocationBuilding(itemValue)
            }>
            <Picker.Item label="Interior" value={interior} />
            <Picker.Item label="Exterior" value={exterior} />
          </Picker>
        </View>
      </View>

      <View>
        <Text style={styles.subtitle}>Estado de conservación</Text>
        <View style={appStyles.picker}>
          <Picker
            selectedValue={preservationState}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) =>
              setPreservationState(itemValue)
            }>
            <Picker.Item label="Excelente" value={excelente} />
            <Picker.Item label="Bueno" value={bueno} />
            <Picker.Item label="Regular" value={regular} />
            <Picker.Item label="Remodelar" value={remodelar} />
          </Picker>
        </View>
      </View>

      <View>
        <Text style={styles.subtitle}>Espacios internos</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'room')}
          style={appStyles.input}
          placeholder="Recámaras"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'bath')}
          style={appStyles.input}
          placeholder="Baños completos"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'halfBath')}
          style={appStyles.input}
          placeholder="Medio baños"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'parkingSlots')}
          style={appStyles.input}
          placeholder="Estacionamientos"
        />
      </View>

      <View>
        <Text style={styles.subtitle}>Cocina</Text>
        <View style={appStyles.picker}>
          <Picker
            selectedValue={kitchen}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) => setKitchen(itemValue)}>
            <Picker.Item label="Abierta" value={abierta} />
            <Picker.Item label="Cerrada" value={cerrada} />
          </Picker>
        </View>
      </View>

      <View>
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Cuarto de servicio"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setServiceRoom(!serviceRoom);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Área de lavado"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setLaundry(!laundry);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Bodega"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setCellar(!cellar);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Equipamiento"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setEquipment(!equipment);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Balcón"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setBalcony(!balcony);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Terraza"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setTerrace(!terrace);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Roof garden"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setRoofGarden(!roofGarden);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Jardín"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setGarden(!garden);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Family room"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setFamilyRoom(!familyRoom);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Estudio"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setStudy(!study);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Cuarto de TV"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setTvRoom(!tvRoom);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Elevautos"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setCarElevator(!carElevator);
          }}
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={value => onChange(value, 'privateOffice')}
          style={appStyles.input}
          placeholder="Oficinas privadas"
        />
      </View>
      <Text style={styles.subtitle}>Seguridad</Text>
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Alambrado"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setWireFence(!wireFence);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Cerca eléctrica"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setElectricFence(!electricFence);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Alarma contra indencios"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setFireAlarm(!fireAlarm);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Calle cerrada"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setClosedStreet(!closedStreet);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="CCTV"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setCctv(!cctv);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Alarmas"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setAlarm(!alarm);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Concercejería"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setJanitor(!janitor);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Vigilancia 24/7"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setSecurity247(!security247);
        }}
      />
      <Text style={styles.subtitle}>Amenidades</Text>
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Piscina"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setPool(!pool);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Canchas"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setSportsField(!sportsField);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Carril de nado"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setSwimmingLane(!swimmingLane);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Centro de negocios"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setBussinessCentre(!bussinessCentre);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Juegos infantiles"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setPlayground(!playground);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Salón de fiestas"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setPartyRoom(!partyRoom);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Gym"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setGym(!gym);
        }}
      />
      <Text style={styles.subtitle}>Servicios</Text>
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Elevador"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setElevator(!elevator);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Aire acondicionado"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setAirConditioner(!airConditioner);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Mantenimiento incluido (solo renta)"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setIsMantainceIncluded(!isMantainceIncluded);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Cisterna"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setCistern(!cistern);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Electricidad"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setElectricity(!electricity);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Agua"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setWater(!water);
        }}
      />

      <TextInput
        onChangeText={value => onChange(value, 'landUseCode')}
        style={appStyles.input}
        placeholder="Uso de suelo"
      />

      {isMantainceIncluded ? (
        <TextInput
          style={appStyles.input}
          placeholder="Costo de mantenimiento"
          onChangeText={value => onChange(value, 'mantainance')}
        />
      ) : null}

      <Text style={styles.subtitle}>Tipo de gas</Text>
      <View style={appStyles.picker}>
        <Picker
          selectedValue={gasType}
          style={{ color: '#000' }}
          onValueChange={(itemValue, itemIndex) => setGasType(itemValue)}>
          <Picker.Item label="LP" value={lp} />
          <Picker.Item label="Natural" value={natural} />
          <Picker.Item label="No instalado" value={noGas} />
        </Picker>
      </View>

      <BouncyCheckbox
        style={{ paddingVertical: 10 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Pet friendly"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setPetFriendly(!petFriendly);
        }}
      />
      <View>
        <Text style={styles.subtitle}>Características de la zona</Text>
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="En centro comercial"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setInsideMall(!insideMall);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="En parque industrial"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setInsideIndust(!insideIndust);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="En centro corporativo"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setInsideCorp(!insideCorp);
          }}
        />
        <BouncyCheckbox
          style={{ paddingVertical: 5 }}
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="A pie de calle"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          onPress={() => {
            setOnstreet(!onstreet);
          }}
        />
        <TextInput
          onChangeText={value => onChange(value, 'malls')}
          style={appStyles.input}
          placeholder="Centros comerciales"
        />
        <TextInput
          onChangeText={value => onChange(value, 'shops')}
          style={appStyles.input}
          placeholder="Tiendes de autoservicio"
        />
        <TextInput
          onChangeText={value => onChange(value, 'banks')}
          style={appStyles.input}
          placeholder="Bancos"
        />
        <TextInput
          onChangeText={value => onChange(value, 'schools')}
          style={appStyles.input}
          placeholder="Escuelas"
        />
        <TextInput
          onChangeText={value => onChange(value, 'hospitals')}
          style={appStyles.input}
          placeholder="Hospitales"
        />
        <TextInput
          onChangeText={value => onChange(value, 'mainavs')}
          style={appStyles.input}
          placeholder="Avs. principales"
        />
        <TextInput
          onChangeText={value => onChange(value, 'subway')}
          style={appStyles.input}
          placeholder="Estaciones de metro"
        />
        <TextInput
          onChangeText={value => onChange(value, 'metrobus')}
          style={appStyles.input}
          placeholder="Estaciones de metrobús"
        />
      </View>
      <View>
        <Text style={styles.subtitle}>Tiempo</Text>
        <TextInput
          style={appStyles.input}
          onChangeText={value => onChange(value, 'deliverydate')}
          placeholder="Fecha de entrega"
        />
      </View>
      <View>
        <Text style={styles.subtitle}>Antigüedad (años)</Text>
        <View style={appStyles.picker}>
          <Picker
            selectedValue={gasType}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) => setGasType(itemValue)}>
            <Picker.Item label="0-5" value="0-5" />
            <Picker.Item label="5-10" value="5-10" />
            <Picker.Item label="10-25" value="10-25" />
            <Picker.Item label="25+" value="25+" />
          </Picker>
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>Título del inmueble</Text>
        <TextInput
          style={appStyles.input}
          onChangeText={value => onChange(value, 'propertyTitle')}
          placeholder="Título"
        />
      </View>
      <View>
        <Text style={styles.subtitle}>Descripción del inmueble</Text>
        <TextInput
          style={appStyles.input}
          onChangeText={value => onChange(value, 'propertyDescription')}
          placeholder="Descripción"
        />
      </View>
    </View>
  );
};

export default SpecificData;

const styles = StyleSheet.create({
  subtitle: {
    color: '#1E0E6F',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
  text: {
    color: '#1E0E6F',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
  },
  title: {
    color: '#1E0E6F',
    fontSize: 30,
    textAlign: 'center',
  },
});
