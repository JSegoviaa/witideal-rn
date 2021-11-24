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
import EspaciosLocal from './local/EspaciosLocal';
import CocinaLocal from './local/CocinaLocal';
import CaracteristicasLocal from './local/CaracteristicasLocal';
import SecurityLocal from './local/SecurityLocal';
import ServiciosLocal from './local/ServiciosLocal';
import EspaciosBuilding from './building/EspaciosBuilding';
import SecurityBuiling from './building/SecurityBuiling';
import ServicesBulding from './building/ServicesBulding';
import EspaciosOffice from './office/EspaciosOffice';
import CocinaOffice from './office/CocinaOffice';
import CaracteristicasOffice from './office/CaracteristicasOffice';
import SecurityOffice from './office/SecurityOffice';
import ServicesOffices from './office/ServicesOffices';
import AntiquityLocal from './local/AntiquityLocal';
import SecurityTerrain from './terrain/SecurityTerrain';
import ServicesTerrain from './terrain/ServicesTerrain';
import AntiquityCondo from './condoHouse/AntiquityCondo';
import ZoneOffice from './office/ZoneOffice';
import ZoneLocal from './local/ZoneLocal';

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
    setGasType,
    setPetFriendly,
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

        {propertyType !== terrain ? (
          <Text style={styles.subtitle}>Espacios internos</Text>
        ) : null}
        {propertyType === warehouse ? <EspaciosWarehouse /> : null}
        {propertyType === aparment ? <EspaciosAparment /> : null}
        {propertyType === singleHouse ? <EspaciosHouse /> : null}
        {propertyType === condoHouse ? <EspaciosCondo /> : null}
        {propertyType === local ? <EspaciosLocal /> : null}
        {propertyType === building ? <EspaciosBuilding /> : null}
        {propertyType === office ? <EspaciosOffice /> : null}

        {propertyType === aparment ? <CocinaAparment /> : null}
        {propertyType === singleHouse ? <CocinaHouse /> : null}
        {propertyType === condoHouse ? <CocinaCondo /> : null}
        {propertyType === local ? <CocinaLocal /> : null}
        {propertyType === office ? <CocinaOffice /> : null}

        {propertyType === aparment ? <CaracteristicasAparment /> : null}
        {propertyType === singleHouse ? <CaracteristicaHouse /> : null}
        {propertyType === condoHouse ? <CaracteristicaSCondos /> : null}
        {propertyType === local ? <CaracteristicasLocal /> : null}
        {propertyType === office ? <CaracteristicasOffice /> : null}

        <Text style={styles.subtitle}>Seguridad</Text>
        {propertyType === warehouse ? <SecurityWarehouse /> : null}
        {propertyType === aparment ? <SecurityAparment /> : null}
        {propertyType === singleHouse ? <SecurityHouse /> : null}
        {propertyType === condoHouse ? <SecurityCondo /> : null}
        {propertyType === local ? <SecurityLocal /> : null}
        {propertyType === building ? <SecurityBuiling /> : null}
        {propertyType === office ? <SecurityOffice /> : null}
        {propertyType === terrain ? <SecurityTerrain /> : null}

        {propertyType === aparment && propertyType === singleHouse ? (
          <Text style={styles.subtitle}>Amenidades</Text>
        ) : null}
        {propertyType === aparment ? <AmenidadesAparment /> : null}
        {propertyType === condoHouse ? <AmenidadesCondo /> : null}

        <Text style={styles.subtitle}>Servicios</Text>

        {propertyType === warehouse ? <ServicesWarehouse /> : null}
        {propertyType === aparment ? <ServicesAparment /> : null}
        {propertyType === singleHouse ? <ServicesHouse /> : null}
        {propertyType === condoHouse ? <ServicesCondo /> : null}
        {propertyType === local ? <ServiciosLocal /> : null}
        {propertyType === building ? <ServicesBulding /> : null}
        {propertyType === office ? <ServicesOffices /> : null}
        {propertyType === terrain ? <ServicesTerrain /> : null}

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

        <View>
          <Text style={styles.subtitle}>Características de la zona</Text>
          {propertyType === warehouse ? <ZoneWarehouse /> : null}
          {propertyType === office ? <ZoneOffice /> : null}
          {propertyType === local ? <ZoneLocal /> : null}

          <TextInput
            onChangeText={value => onChange(value, 'malls')}
            style={appStyles.input}
            placeholder="Centros comerciales"
            placeholderTextColor="#ccc"
          />
          <TextInput
            onChangeText={value => onChange(value, 'shops')}
            style={appStyles.input}
            placeholder="Tiendas de autoservicio"
            placeholderTextColor="#ccc"
          />
          <TextInput
            onChangeText={value => onChange(value, 'banks')}
            style={appStyles.input}
            placeholder="Bancos"
            placeholderTextColor="#ccc"
          />
          <TextInput
            onChangeText={value => onChange(value, 'schools')}
            style={appStyles.input}
            placeholder="Escuelas"
            placeholderTextColor="#ccc"
          />
          <TextInput
            onChangeText={value => onChange(value, 'hospitals')}
            style={appStyles.input}
            placeholder="Hospitales"
            placeholderTextColor="#ccc"
          />
          <TextInput
            onChangeText={value => onChange(value, 'mainavs')}
            style={appStyles.input}
            placeholder="Avs. principales"
            placeholderTextColor="#ccc"
          />
          <TextInput
            onChangeText={value => onChange(value, 'subway')}
            style={appStyles.input}
            placeholder="Estaciones de metro"
            placeholderTextColor="#ccc"
          />
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

        {propertyType === aparment ? <AntiquityAparment /> : null}
        {propertyType === warehouse ? <AntiquityWarehouse /> : null}
        {propertyType === singleHouse ? <AntiquityHouse /> : null}
        {propertyType === local ? <AntiquityLocal /> : null}
        {propertyType === condoHouse ? <AntiquityCondo /> : null}

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
