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
    route,
    ext_number,
    int_number,
    postal_code,
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
        <Text style={styles.text}>{specificData.propertyTitle}</Text>
        <Text style={styles.text}>{specificData.propertyDescription}</Text>

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

          {specificData.airConditioner ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Aire acondicionado</Text>
              {specificData.airConditioner ? (
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

          {specificData.wireFence ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Alambrado</Text>
              {specificData.wireFence ? (
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

          {specificData.alarm ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Alarmas</Text>
              {specificData.alarm ? (
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

          {specificData.antiquity ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Antigüedad (años)</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.antiquity}
              </Text>
            </View>
          ) : null}

          {specificData.laundry ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Área de lavado</Text>
              {specificData.laundry ? (
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

          {specificData.mainavs ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Av. Principales</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.mainavs}
              </Text>
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

          {specificData.banks ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Bancos</Text>
              <Text style={styles.specificaDataInfo}>{specificData.banks}</Text>
            </View>
          ) : null}

          {specificData.cellar ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Bodega</Text>
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

          {specificData.sportsField ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Canchas</Text>
              {specificData.sportsField ? (
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

          {specificData.swimmingLane ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Carril de nado</Text>
              {specificData.swimmingLane ? (
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

          {specificData.malls ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Centros comerciales</Text>
              <Text style={styles.specificaDataInfo}>{specificData.malls}</Text>
            </View>
          ) : null}

          {specificData.kitchen ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Cocina</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.kitchen}
              </Text>
            </View>
          ) : null}

          {specificData.janitor ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Concerjería</Text>
              {specificData.janitor ? (
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

          {specificData.serviceRoom ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Cuarto de serivio</Text>
              {specificData.serviceRoom ? (
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

          {specificData.tvRoom ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Cuarto de TV</Text>
              {specificData.tvRoom ? (
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

          {specificData.carElevator ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Elevautos</Text>
              {specificData.carElevator ? (
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

          {specificData.subway ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Estaciones de metro</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.subway}
              </Text>
            </View>
          ) : null}

          {specificData.metrobus ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Estaciones de metrobús
              </Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.metrobus}
              </Text>
            </View>
          ) : null}

          {specificData.preservationState ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Estado de conservación
              </Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.preservationState}
              </Text>
            </View>
          ) : null}

          {specificData.study ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Estudio</Text>
              {specificData.study ? (
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

          {specificData.familyRoom ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Family Room</Text>
              {specificData.familyRoom ? (
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

          {specificData.deliverydate ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Fecha de entrega</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.deliverydate}
              </Text>
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

          {specificData.hospitals ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Hospitales</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.hospitals}
              </Text>
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

          {specificData.isMantainceIncluded ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Mantenimiento incluido
              </Text>
              {specificData.isMantainceIncluded ? (
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

          {specificData.mantainance ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Costo del mantenimiento
              </Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.mantainance}
              </Text>
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

          {specificData.totalBuildingFloors ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Niveles del edificio</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.totalBuildingFloors}
              </Text>
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

          {specificData.extras ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Otros</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.extras}
              </Text>
            </View>
          ) : null}

          {specificData.petFriendly ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Pet Friendly</Text>
              {specificData.petFriendly ? (
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

          {specificData.roofGarden ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Roof Garden</Text>
              {specificData.roofGarden ? (
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

          {specificData.shops ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Tiendas de autoservicio
              </Text>
              <Text style={styles.specificaDataInfo}>{specificData.shops}</Text>
            </View>
          ) : null}

          {specificData.locationInBuilding ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Ubicación en Edificio
              </Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.locationInBuilding}
              </Text>
            </View>
          ) : null}

          {specificData.terrace ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Terraza</Text>
              {specificData.terrace ? (
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

          {specificData.gasType ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Tipo de gas</Text>
              <Text style={styles.specificaDataInfo}>
                {specificData.gasType}
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
          {locality}, {administrative_area_level_1}, C. {route ? route : null}{' '}
          {ext_number ? ext_number : null} {int_number ? int_number : null} , CP{' '}
          {postal_code ? postal_code : null}
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
