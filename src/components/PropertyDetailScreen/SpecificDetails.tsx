import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useProperty } from '../../hooks/useProperty';
import OwnerInfo from './OwnerInfo';

interface Props {
  id: string;
}

const SpecificDetails = ({ id }: Props) => {
  const { property } = useProperty();
  console.log(id, 'desde specific details');

  return (
    <>
      {property && (
        <View>
          {property.specificData.m2Build && (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/build.png')}
              />

              <Text style={styles.data}>{property.specificData.m2Build}</Text>
              <Text style={styles.info}>M2 construidos</Text>
            </View>
          )}
          {property.specificData.room && (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/rooms.png')}
              />
              <Text style={styles.data}>{property.specificData.room}</Text>
              <Text style={styles.info}>Recamaras</Text>
            </View>
          )}
          {property.specificData.bath && (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/baths.png')}
              />
              <Text style={styles.data}>{property.specificData.bath}</Text>
              <Text style={styles.info}>Baños completos</Text>
            </View>
          )}
          {property.specificData.parkingSlots && (
            <View style={styles.box}>
              <Image
                width={75}
                height={75}
                style={styles.image}
                source={require('../../assets/parking.png')}
              />
              <Text style={styles.data}>
                {property.specificData.parkingSlots}
              </Text>
              <Text style={styles.info}>Estacionamientos</Text>
            </View>
          )}

          <View>
            <Text style={styles.title}>Datos específicos</Text>

            {property.specificData.laundry && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Área de lavado</Text>
                {property.specificData.laundry ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.deliverydate && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Fecha de entrega</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.deliverydate}
                </Text>
              </View>
            )}

            {property.specificData.antiquity && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Antigüedad (años)</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.antiquity}
                </Text>
              </View>
            )}

            {property.specificData.totalBuildingFloors && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>
                  Niveles del edificio
                </Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.totalBuildingFloors}
                </Text>
              </View>
            )}

            {property.specificData.preservationState && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>
                  Estado de conservación
                </Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.preservationState}
                </Text>
              </View>
            )}

            {property.specificData.locationInBuilding && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>
                  Ubicación en Edificio
                </Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.locationInBuilding}
                </Text>
              </View>
            )}

            {property.specificData.isMantainceIncluded && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>
                  Mantenimiento incluido (solo renta)
                </Text>
                {property.specificData.isMantainceIncluded ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.kitchen && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Cocina</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.kitchen}
                </Text>
              </View>
            )}

            {property.specificData.banks && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Bancos</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.banks}
                </Text>
              </View>
            )}

            {property.specificData.extras && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Otros</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.extras}
                </Text>
              </View>
            )}

            {property.specificData.cctv && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>CCTV</Text>
                {property.specificData.cctv ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.elevator && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Elevador</Text>
                {property.specificData.elevator ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.schools && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Escuelas</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.schools}
                </Text>
              </View>
            )}

            {property.specificData.mainavs && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Av. Principales</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.mainavs}
                </Text>
              </View>
            )}

            {property.specificData.pool && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Alberca</Text>
                {property.specificData.pool ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.playground && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Juegos infantiles</Text>
                {property.specificData.playground ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.bussinessCentre && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Centro de negocios</Text>
                {property.specificData.bussinessCentre ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.balcony && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Balcón</Text>
                {property.specificData.balcony ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.gym && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Gym</Text>
                {property.specificData.gym ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.floorNumber && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>
                  Nivel en el que se encuentra
                </Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.floorNumber}
                </Text>
              </View>
            )}

            {property.specificData.gasType && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Tipo de gas</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.gasType}
                </Text>
              </View>
            )}

            {property.specificData.closedStreet && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Calle cerrada</Text>
                {property.specificData.closedStreet ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.partyRoom && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Salón de fiestas</Text>
                {property.specificData.partyRoom ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}

            {property.specificData.halfBath && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Medio baños</Text>
                <Text style={styles.specificaDataInfo}>
                  {property.specificData.halfBath}
                </Text>
              </View>
            )}

            {property.specificData.security247 && (
              <View style={styles.specificaDataContainer}>
                <Text style={styles.specificaDataInfo}>Vigilancia 24/7</Text>
                {property.specificData.security247 ? (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="checkmark-outline" size={20} color="#160A53" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="close-outline" size={20} color="#160A53" />
                  </View>
                )}
              </View>
            )}
          </View>

          {/* Muestra la información del dueño de la propiedad */}
          <OwnerInfo property={property} />
        </View>
      )}
    </>
  );
};

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
  info: {
    color: '#160A53',
    fontSize: 18,
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    color: '#160A53',
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
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
export default SpecificDetails;
