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

const SpecificData = () => {
  const { form, onChange } = useForm({
    mantainance: 0,
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
        <TextInput style={appStyles.input} placeholder="M2 construidos" />
        <TextInput
          style={appStyles.input}
          placeholder="Total de unidades del conjunto"
        />
        <TextInput style={appStyles.input} placeholder="Niveles del edificio" />
        <TextInput
          style={appStyles.input}
          placeholder="Nivel en el que se encuentra"
        />
        <TextInput style={appStyles.input} placeholder="Niveles del edificio" />
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
        <TextInput style={appStyles.input} placeholder="Recámaras" />
        <TextInput style={appStyles.input} placeholder="Baños completos" />
        <TextInput style={appStyles.input} placeholder="Medio baños" />
        <TextInput style={appStyles.input} placeholder="Estacionamientos" />
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
          selectedValue={kitchen}
          style={{ color: '#000' }}
          onValueChange={(itemValue, itemIndex) => setKitchen(itemValue)}>
          <Picker.Item label="Abierta" value={abierta} />
          <Picker.Item label="Cerrada" value={cerrada} />
          <Picker.Item label="Cerrada" value={cerrada} />
        </Picker>
      </View>
      <BouncyCheckbox
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Pet friendly"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
      />
      <View>
        <Text>Características de la zona</Text>
        <TextInput placeholder="Centros comerciales" />
        <TextInput placeholder="Tiendes de autoservicio" />
        <TextInput placeholder="Bancos" />
        <TextInput placeholder="Escuelas" />
        <TextInput placeholder="Hospitales" />
        <TextInput placeholder="Avs. principales" />
        <TextInput placeholder="Estaciones de metro" />
        <TextInput placeholder="Estaciones de metrobús" />
      </View>
      <View>
        <Text>Tiempo</Text>
        <TextInput placeholder="Fecha de entrega" />
      </View>
      <View>
        <Text>Antigüedad (años)</Text>
        <Text>0-5 / 6-10 / 11-25 / 25+</Text>
      </View>
      <View>
        <Text>Título del inmueble</Text>
        <TextInput placeholder="Título" />
      </View>
      <View>
        <Text>Descripción del inmueble</Text>
        <TextInput placeholder="Descripción" />
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
