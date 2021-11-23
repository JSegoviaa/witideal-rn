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
    parkingSlots,
    room,
    bath,
    m2build,
    laundry,
    deliverydate,
    totalBuildingFloors,
    preservationState,
    locationInBuilding,
    isMantainceIncluded,
    kitchen,
    banks,
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
    halfBath,
    security247,
    partyRoom,
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
          {m2build ? (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/build.png')}
              />

              <Text style={styles.data}>{m2build}</Text>
              <Text style={styles.info}>M2 construidos</Text>
            </View>
          ) : null}
          {room ? (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/rooms.png')}
              />
              <Text style={styles.data}>{room}</Text>
              <Text style={styles.info}>Recamaras</Text>
            </View>
          ) : null}
          {bath ? (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/baths.png')}
              />
              <Text style={styles.data}>{bath}</Text>
              <Text style={styles.info}>Baños completos</Text>
            </View>
          ) : null}
          {parkingSlots ? (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/parking.png')}
              />
              <Text style={styles.data}>{parkingSlots}</Text>
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

          {banks ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Bancos</Text>
              <Text style={styles.specificaDataInfo}>{banks}</Text>
            </View>
          ) : null}

          {extras ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Otros</Text>
              <Text style={styles.specificaDataInfo}>{extras}</Text>
            </View>
          ) : null}

          {cctv ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>CCTV</Text>
              {cctv ? (
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

          {elevator ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Elevador</Text>
              {elevator ? (
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

          {schools ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Escuelas</Text>
              <Text style={styles.specificaDataInfo}>{schools}</Text>
            </View>
          ) : null}

          {mainavs ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Av. Principales</Text>
              <Text style={styles.specificaDataInfo}>{mainavs}</Text>
            </View>
          ) : null}

          {pool ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Alberca</Text>
              {pool ? (
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

          {playground ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Juegos infantiles</Text>
              {playground ? (
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

          {bussinessCentre ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Centro de negocios</Text>
              {bussinessCentre ? (
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

          {balcony ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Balcón</Text>
              {balcony ? (
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

          {gym ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Gym</Text>
              {gym ? (
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

          {floorNumber ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>
                Nivel en el que se encuentra
              </Text>
              <Text style={styles.specificaDataInfo}>{floorNumber}</Text>
            </View>
          ) : null}

          {gasType ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Tipo de gas</Text>
              <Text style={styles.specificaDataInfo}>{gasType}</Text>
            </View>
          ) : null}

          {closedStreet ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Calle cerrada</Text>
              {closedStreet ? (
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

          {partyRoom ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Salón de fiestas</Text>
              {partyRoom ? (
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

          {halfBath ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Medio baños</Text>
              <Text style={styles.specificaDataInfo}>{halfBath}</Text>
            </View>
          ) : null}

          {security247 ? (
            <View style={styles.specificaDataContainer}>
              <Text style={styles.specificaDataInfo}>Vigilancia 24/7</Text>
              {security247 ? (
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
