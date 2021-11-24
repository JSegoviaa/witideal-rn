import React, { useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { appStyles } from '../../theme/appTheme';
import {
  bueno,
  excelente,
  regular,
  remodelar,
} from '../../constant/propertyConvervation';
import { abierta, cerrada } from '../../constant/kitchen';
import { lp, natural, noGas } from '../../constant/gasType';
import { RootAddPropertyStackNavigation } from '../../navigation/AddPropertyStackNavigation';
import { PropertyContext } from '../../context/property/PropertyContext';
import urlTranslator from '../../helpers/urlTranslator';
import {
  aparment,
  building,
  condoHouse,
  local,
  office,
  singleHouse,
  terrain,
  warehouse,
} from '../../constant/propertyType';
import CaracteristicasFisicasAp from './aparment/CaracteristicasFisicasAp';
import CaracteristicasFisicasHouse from './singleHouse/CaracteristicasFisicasHouse';
import CaracteristicasFisicasBuilding from './building/CaracteristicasFisicasBuilding';
import CaracteristicasFisicasLocal from './local/CaracteristicasFisicasLocal';
import CaracteristicasWarehouse from './warehouse/CaracteristicasWarehouse';
import CaracteristicasTerrain from './terrain/CaracteristicasTerrain';
import CaracteristicasCondo from './condoHouse/CaracteristicasCondo';
import EspaciosWarehouse from './warehouse/EspaciosWarehouse';
import SecurityWarehouse from './warehouse/SecurityWarehouse';
import ServicesWarehouse from './warehouse/ServicesWarehouse';
import ZoneWarehouse from './warehouse/ZoneWarehouse';
import EspaciosAparment from './aparment/EspaciosAparment';
import CocinaAparment from './aparment/CocinaAparment';
import CaracteristicasAparment from './aparment/CaracteristicasAparment';
import SecurityAparment from './aparment/SecurityAparment';
import AmenidadesAparment from './aparment/AmenidadesAparment';
import ServicesAparment from './aparment/ServicesAparment';
import AntiquityAparment from './aparment/AntiquityAparment';
import AntiquityWarehouse from './warehouse/AntiquityWarehouse';
import EspaciosHouse from './singleHouse/EspaciosHouse';
import CocinaHouse from './singleHouse/CocinaHouse';
import CaracteristicaHouse from './singleHouse/CaracteristicaHouse';
import SecurityHouse from './singleHouse/SecurityHouse';
import ServicesHouse from './singleHouse/ServicesHouse';
import AntiquityHouse from './singleHouse/AntiquityHouse';
import EspaciosCondo from './condoHouse/EspaciosCondo';
import CocinaCondo from './condoHouse/CocinaCondo';
import CaracteristicaSCondos from './condoHouse/CaracteristicaSCondos';
import SecurityCondo from './condoHouse/SecurityCondo';
import AmenidadesCondo from './condoHouse/AmenidadesCondo';
import ServicesCondo from './condoHouse/ServicesCondo';

interface Props
  extends StackScreenProps<
    RootAddPropertyStackNavigation,
    'SpecificDataScreen'
  > {}

const SpecificData = ({ navigation }: Props) => {
  const {
    propertyType,
    onChange,
    setPreservationState,
    setKitchen,
    setCellar,
    setWireFence,
    setElectricFence,
    setClosedStreet,
    setCctv,
    setAlarm,
    setSecurity247,
    setElevator,
    setAirConditioner,
    setIsMantainceIncluded,
    setGasType,
    setPetFriendly,
    setAntiquity,
    setCistern,
    setEquipment,
    setOnstreet,
    setInsideMall,
    setInsideCorp,
    setFireAlarm,
    setElectricity,
    setWater,
    specificData,
  } = useContext(PropertyContext);

  const handleNext = () => navigation.navigate('UploadPropertyPicTureScreen');

  return (
    <ScrollView>
      <View style={appStyles.container}>
        <View style={{ paddingTop: 30 }}>
          <Text style={styles.title}>
            El tipo de inmueble que seleccionaste fue{' '}
            {urlTranslator(propertyType)}
          </Text>
          <Text style={styles.text}>
            Llena el siguiente formulario, mientras más completa la información,
            mejor oportunidad tendrá el anuncio de aparecer en la búsqueda de
            usuarios
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Características Físicas</Text>
          {propertyType === aparment ? <CaracteristicasFisicasAp /> : null}
          {propertyType === singleHouse ? (
            <CaracteristicasFisicasHouse />
          ) : null}
          {propertyType === building ? (
            <CaracteristicasFisicasBuilding />
          ) : null}
          {propertyType === local ? <CaracteristicasFisicasLocal /> : null}
          {propertyType === office ? <CaracteristicasFisicasLocal /> : null}
          {propertyType === warehouse ? <CaracteristicasWarehouse /> : null}
          {propertyType === terrain ? <CaracteristicasTerrain /> : null}
          {propertyType === condoHouse ? <CaracteristicasCondo /> : null}
        </View>

        {propertyType !== terrain ? (
          <>
            <Text style={styles.subtitle}>Estado de conservación</Text>
            <View style={appStyles.picker}>
              <Picker
                selectedValue={specificData.preservationState}
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
          </>
        ) : null}
        <View>
          <Text style={styles.subtitle}>Espacios internos</Text>
          {propertyType === warehouse ? <EspaciosWarehouse /> : null}
          {propertyType === aparment ? <EspaciosAparment /> : null}
          {propertyType === singleHouse ? <EspaciosHouse /> : null}
          {propertyType === condoHouse ? <EspaciosCondo /> : null}

          {/*  /  / Local /  / Edificio / */}
          <TextInput
            keyboardType="numeric"
            onChangeText={value => onChange(value, 'bath')}
            style={appStyles.input}
            placeholder="Baños completos"
            placeholderTextColor="#ccc"
          />
          {/*  /  / Local / Oficina /  / Edificio / */}
          <TextInput
            keyboardType="numeric"
            onChangeText={value => onChange(value, 'halfBath')}
            style={appStyles.input}
            placeholder="Medio baño"
            placeholderTextColor="#ccc"
          />
          {/*  /  / Local / Oficina /  / Edificio / */}
          <TextInput
            keyboardType="numeric"
            onChangeText={value => onChange(value, 'parkingSlots')}
            style={appStyles.input}
            placeholder="Estacionamientos"
            placeholderTextColor="#ccc"
          />
          {/* Edificio */}
          <TextInput
            keyboardType="numeric"
            onChangeText={value => onChange(value, 'numDepBuilding')}
            style={appStyles.input}
            placeholder="Número de departamentos / Oficinas"
            placeholderTextColor="#ccc"
          />
        </View>

        {/*  /  / Local / Oficina / */}
        {propertyType === aparment ? <CocinaAparment /> : null}
        {propertyType === singleHouse ? <CocinaHouse /> : null}
        {propertyType === condoHouse ? <CocinaCondo /> : null}
        <View>
          <Text style={styles.subtitle}>Cocina</Text>
          <View style={appStyles.picker}>
            <Picker
              selectedValue={specificData.kitchen}
              style={{ color: '#000' }}
              onValueChange={(itemValue, itemIndex) => setKitchen(itemValue)}>
              <Picker.Item label="Abierta" value={abierta} />
              <Picker.Item label="Cerrada" value={cerrada} />
            </Picker>
          </View>
        </View>
        <View>
          {propertyType === aparment ? <CaracteristicasAparment /> : null}
          {propertyType === singleHouse ? <CaracteristicaHouse /> : null}
          {propertyType === condoHouse ? <CaracteristicaSCondos /> : null}

          {/*  /  / Local / Oficina / */}
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
              setCellar(!specificData.cellar);
            }}
          />
          {/* Local */}
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
              setEquipment(!specificData.equipment);
            }}
          />

          {/* Oficina */}
          <TextInput
            keyboardType="numeric"
            onChangeText={value => onChange(value, 'privateOffice')}
            style={appStyles.input}
            placeholder="Oficinas privadas"
            placeholderTextColor="#ccc"
          />
        </View>
        <Text style={styles.subtitle}>Seguridad</Text>
        {propertyType === warehouse ? <SecurityWarehouse /> : null}
        {propertyType === aparment ? <SecurityAparment /> : null}
        {propertyType === singleHouse ? <SecurityHouse /> : null}
        {propertyType === condoHouse ? <SecurityCondo /> : null}

        {/*  /  / Local / Oficina /  / Terreno / Edificio / */}
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
            setWireFence(!specificData.wireFence);
          }}
        />
        {/*  /  / Local / Oficina /  / Terreno / Edificio / */}
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
            setElectricFence(!specificData.electricFence);
          }}
        />
        {/*   / Edificio*/}
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
            setFireAlarm(!specificData.fireAlarm);
          }}
        />
        {/*  /  / Local / Oficina /  / Terreno / Edificio /*/}
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
            setClosedStreet(!specificData.closedStreet);
          }}
        />
        {/*  /  / Local / Oficina /  / Terreno / Edificio / */}
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
            setCctv(!specificData.cctv);
          }}
        />
        {/*  /   / Oficina /  / Terreno / Edificio / */}
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
            setAlarm(!specificData.alarm);
          }}
        />

        {/*  / Local / Oficina /  / Terreno / Edificio / */}
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
            setSecurity247(!specificData.security247);
          }}
        />

        {propertyType === aparment && propertyType === singleHouse ? (
          <Text style={styles.subtitle}>Amenidades</Text>
        ) : null}
        {propertyType === aparment ? <AmenidadesAparment /> : null}
        {propertyType === condoHouse ? <AmenidadesCondo /> : null}

        {propertyType !== terrain ? (
          <Text style={styles.subtitle}>Servicios</Text>
        ) : null}
        {propertyType === warehouse ? <ServicesWarehouse /> : null}
        {propertyType === aparment ? <ServicesAparment /> : null}
        {propertyType === singleHouse ? <ServicesHouse /> : null}
        {propertyType === condoHouse ? <ServicesCondo /> : null}

        {/*  / Edificio*/}
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
            setElevator(!specificData.elevator);
          }}
        />
        {/*   /  / Local / Oficina /  / Edificio / */}
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
            setAirConditioner(!specificData.airConditioner);
          }}
        />
        {/*  / Local / Oficina /  / */}
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
            setIsMantainceIncluded(!specificData.isMantainceIncluded);
          }}
        />
        {/*  / Edificio */}
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
            setCistern(!specificData.cistern);
          }}
        />
        {/*   / Terreno*/}
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
            setElectricity(!specificData.electricity);
          }}
        />
        {/*  / Terreno*/}
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
            setWater(!specificData.water);
          }}
        />
        {/* Terreno */}
        <TextInput
          onChangeText={value => onChange(value, 'landUseCode')}
          style={appStyles.input}
          placeholder="Uso de suelo"
          placeholderTextColor="#ccc"
        />
        {/*  / Local / Oficina /  / */}
        {specificData.isMantainceIncluded ? (
          <TextInput
            style={appStyles.input}
            placeholder="Costo de mantenimiento"
            onChangeText={value => onChange(value, 'mantainance')}
            placeholderTextColor="#ccc"
          />
        ) : null}

        {propertyType !== terrain ? (
          <>
            <Text style={styles.subtitle}>Tipo de gas</Text>
            <View style={appStyles.picker}>
              <Picker
                selectedValue={specificData.gasType}
                style={{ color: '#000' }}
                onValueChange={(itemValue, itemIndex) => setGasType(itemValue)}>
                <Picker.Item label="LP" value={lp} />
                <Picker.Item label="Natural" value={natural} />
                <Picker.Item label="No instalado" value={noGas} />
              </Picker>
            </View>
          </>
        ) : null}

        {propertyType !== terrain && propertyType !== warehouse ? (
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
              setPetFriendly(!specificData.petFriendly);
            }}
          />
        ) : null}

        {/*  / Casa / Local / Oficina / Terreno / Edificio / */}
        <View>
          <Text style={styles.subtitle}>Características de la zona</Text>
          {propertyType === warehouse ? <ZoneWarehouse /> : null}

          {propertyType === local && propertyType === office ? (
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
                setInsideMall(!specificData.insideMall);
              }}
            />
          ) : null}

          {/* Oficina */}
          {propertyType === office ? (
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
                setInsideCorp(!specificData.insideCorp);
              }}
            />
          ) : null}

          {propertyType === local ? (
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
                setOnstreet(!specificData.onstreet);
              }}
            />
          ) : null}

          {/* Departamento / Casa / Local / Oficina / Bodega / Terreno / Edificio / Casa en condo*/}
          <TextInput
            onChangeText={value => onChange(value, 'malls')}
            style={appStyles.input}
            placeholder="Centros comerciales"
            placeholderTextColor="#ccc"
          />
          {/* Departamento / Casa / Local / Oficina / Bodega / Terreno / Edificio / Casa en condo*/}
          <TextInput
            onChangeText={value => onChange(value, 'shops')}
            style={appStyles.input}
            placeholder="Tiendas de autoservicio"
            placeholderTextColor="#ccc"
          />
          {/* Departamento / Casa / Local / Oficina / Bodega / Terreno / Edificio / Casa en condo*/}
          <TextInput
            onChangeText={value => onChange(value, 'banks')}
            style={appStyles.input}
            placeholder="Bancos"
            placeholderTextColor="#ccc"
          />
          {/* Departamento / Casa / Local / Oficina / Bodega / Terreno / Edificio / Casa en condo*/}
          <TextInput
            onChangeText={value => onChange(value, 'schools')}
            style={appStyles.input}
            placeholder="Escuelas"
            placeholderTextColor="#ccc"
          />
          {/* Departamento / Casa / Local / Oficina / Bodega / Terreno / Edificio / Casa en condo*/}
          <TextInput
            onChangeText={value => onChange(value, 'hospitals')}
            style={appStyles.input}
            placeholder="Hospitales"
            placeholderTextColor="#ccc"
          />
          {/* Departamento / Casa / Local / Oficina / Bodega / Terreno / Edificio / Casa en condo*/}
          <TextInput
            onChangeText={value => onChange(value, 'mainavs')}
            style={appStyles.input}
            placeholder="Avs. principales"
            placeholderTextColor="#ccc"
          />
          {/* Departamento / Casa / Local / Oficina / Bodega / Terreno / Edificio / Casa en condo*/}
          <TextInput
            onChangeText={value => onChange(value, 'subway')}
            style={appStyles.input}
            placeholder="Estaciones de metro"
            placeholderTextColor="#ccc"
          />
          {/* Departamento / Casa / Local / Oficina / Bodega / Terreno / Edificio / Casa en condo*/}
          <TextInput
            onChangeText={value => onChange(value, 'metrobus')}
            style={appStyles.input}
            placeholder="Estaciones de metrobús"
            placeholderTextColor="#ccc"
          />
        </View>
        {propertyType !== terrain ? (
          <>
            <Text style={styles.subtitle}>Tiempo</Text>
            <TextInput
              style={appStyles.input}
              onChangeText={value => onChange(value, 'deliverydate')}
              placeholder="Fecha de entrega"
              placeholderTextColor="#ccc"
            />
          </>
        ) : null}
        {/*  /  / Local / */}
        {propertyType === aparment ? <AntiquityAparment /> : null}
        {propertyType === warehouse ? <AntiquityWarehouse /> : null}
        {propertyType === singleHouse ? <AntiquityHouse /> : null}

        <View>
          <Text style={styles.subtitle}>Antigüedad (años)</Text>
          <View style={appStyles.picker}>
            <Picker
              selectedValue={specificData.antiquity}
              style={{ color: '#000' }}
              onValueChange={(itemValue, itemIndex) => setAntiquity(itemValue)}>
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
            placeholderTextColor="#ccc"
          />
        </View>
        <View>
          <Text style={styles.subtitle}>Descripción del inmueble</Text>
          <TextInput
            style={appStyles.input}
            onChangeText={value => onChange(value, 'propertyDescription')}
            placeholder="Descripción"
            placeholderTextColor="#ccc"
          />
        </View>
        <View style={{ paddingBottom: 20 }}>
          <TouchableOpacity onPress={handleNext} style={styles.btnActivate}>
            <Text style={styles.textActive}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SpecificData;

const styles = StyleSheet.create({
  btnActivate: {
    alignItems: 'center',
    backgroundColor: '#3F19F9',
    borderRadius: 50,
    flex: 1,
    marginVertical: 3,
    padding: 11,
  },
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
  textActive: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
  title: {
    color: '#1E0E6F',
    fontSize: 30,
    textAlign: 'center',
  },
});
