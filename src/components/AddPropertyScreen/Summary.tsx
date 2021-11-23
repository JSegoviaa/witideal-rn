import React, { useContext } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PropertyContext } from '../../context/property/PropertyContext';
import { currencyFormat } from '../../helpers/currencyFormat';
import urlTranslator from '../../helpers/urlTranslator';
import { appStyles } from '../../theme/appTheme';

const Summary = () => {
  const {
    precio,
    currency,
    propertyType,
    action,
    coordinates,
    administrative_area_level_1,
    locality,
    propertyTitle,
    propertyDescription,
    laundry,
    deliverydate,
    totalBuildingFloors,
    preservationState,
    locationInBuilding,
    isMantainceIncluded,
    kitchen,
    specificData,
  } = useContext(PropertyContext);

  return (
    <ScrollView>
      <View style={appStyles.container}>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.title}>¡Su inmueble se ha publicado!</Text>
        </View>
        <Text>Imagen principal</Text>
        <Text style={styles.text}>El costo del inmueble es:</Text>
        <Text style={styles.title}>
          {currencyFormat(parseInt(precio))} {currency}
        </Text>
        <Text style={styles.text}>{urlTranslator(propertyType)}</Text>
        <Text style={styles.text}>{urlTranslator(action)} </Text>
        <Text style={styles.text}>{propertyTitle}</Text>
        <Text style={styles.text}>{propertyDescription}</Text>

        <View>
          {specificData.m2Build ? (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/build.png')}
              />

              <Text style={styles.data}>{specificData.m2Build}</Text>
              <Text style={styles.info}>M2 construidos</Text>
            </View>
          ) : null}

          {specificData.room ? (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/rooms.png')}
              />
              <Text style={styles.data}>{specificData.room}</Text>
              <Text style={styles.info}>Recamaras</Text>
            </View>
          ) : null}

          {specificData.bath ? (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/baths.png')}
              />
              <Text style={styles.data}>{specificData.bath}</Text>
              <Text style={styles.info}>Baños completos</Text>
            </View>
          ) : null}

          {specificData.parkingSlots ? (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/parking.png')}
              />
              <Text style={styles.data}>{specificData.parkingSlots}</Text>
              <Text style={styles.info}>Estacionamientos</Text>
            </View>
          ) : null}
        </View>

        <View>
          <Text style={styles.title}>Datos específicos</Text>

          {laundry ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Área de lavado</Text>
              {laundry ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {deliverydate ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Fecha de entrega</Text>
              <Text style={styles.specificaDataInfo}>{deliverydate}</Text>
            </View>
          ) : null}

          {/* {antiquity ? (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Antigüedad (años)</Text>
                <Text style={styles.specificaDataInfo}>
                  {antiquity}
                </Text>
              </View>
            ) : null} */}

          {totalBuildingFloors ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Niveles del edificio</Text>
              <Text style={styles.specificaDataInfo}>
                {totalBuildingFloors}
              </Text>
            </View>
          ) : null}

          {preservationState ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Estado de conservación
              </Text>
              <Text style={styles.specificaDataInfo}>{preservationState}</Text>
            </View>
          ) : null}

          {locationInBuilding ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Ubicación en Edificio
              </Text>
              <Text style={styles.specificaDataInfo}>{locationInBuilding}</Text>
            </View>
          ) : null}

          {isMantainceIncluded ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Mantenimiento incluido (solo renta)
              </Text>
              {isMantainceIncluded ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {isMantainceIncluded ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Cocina</Text>
              <Text style={styles.specificaDataInfo}>{kitchen}</Text>
            </View>
          ) : null}

          {specificData.banks ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Bancos</Text>
              <Text style={styles.specificaDataInfo}>{specificData.banks}</Text>
            </View>
          ) : null}

          {specificData.extras ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Otros</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.extras}
              </Text>
            </View>
          ) : null}

          {specificData.cctv ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>CCTV</Text>
              {specificData.cctv ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.elevator ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Elevador</Text>
              {specificData.elevator ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.schools ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Escuelas</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.schools}
              </Text>
            </View>
          ) : null}

          {specificData.mainavs ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Av. Principales</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.mainavs}
              </Text>
            </View>
          ) : null}

          {specificData.pool ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Alberca</Text>
              {specificData.pool ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.playground ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Juegos infantiles</Text>
              {specificData.playground ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.bussinessCentre ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Centro de negocios</Text>
              {specificData.bussinessCentre ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.balcony ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Balcón</Text>
              {specificData.balcony ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.gym ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Gym</Text>
              {specificData.gym ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.floorNumber ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Nivel en el que se encuentra
              </Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.floorNumber}
              </Text>
            </View>
          ) : null}

          {specificData.gasType ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Tipo de gas</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.gasType}
              </Text>
            </View>
          ) : null}

          {specificData.closedStreet ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Calle cerrada</Text>
              {specificData.closedStreet ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.partyRoom ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Salón de fiestas</Text>
              {specificData.partyRoom ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}

          {specificData.halfBath ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Medio baños</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.halfBath}
              </Text>
            </View>
          ) : null}

          {specificData.security247 ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Vigilancia 24/7</Text>
              {specificData.security247 ? (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="checkmark-outline" size={20} color="#160A53" />
                </View>
              ) : (
                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Icon name="close-outline" size={20} color="#160A53" />
                </View>
              )}
            </View>
          ) : null}
        </View>

        <Text style={styles.subtitle}>Ubicación</Text>
        <Text style={styles.text}>
          {locality}, {administrative_area_level_1}{' '}
        </Text>
        <Text style={styles.subtitle}>Coordenadas</Text>
        <Text style={styles.text}>Latitud: {coordinates.latitude}</Text>
        <Text style={styles.text}>Longitud: {coordinates.longitude}</Text>
        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity style={appStyles.btnPrimary}>
            <Text style={styles.textBtn}>Inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Summary;

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: '#F7F6FF',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    paddingVertical: 30,
    width: '80%',
  },
  data: {
    color: '#160A53',
    fontSize: 24,
    fontWeight: '700',
  },
  image: {
    width: 75,
    height: 75,
  },
  info: {
    color: '#160A53',
    fontSize: 18,
  },
  subtitle: {
    color: '#1E0E6F',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    color: '#1E0E6F',
    fontSize: 17,
    textAlign: 'center',
  },
  textBtn: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  title: {
    color: '#1E0E6F',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  specificaDataInfo: {
    color: '#160A53',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  specificaDataContainer: {
    backgroundColor: '#f7f6ff',
    borderRadius: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 5,
  },
});
