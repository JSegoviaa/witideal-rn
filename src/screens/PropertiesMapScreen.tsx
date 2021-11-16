import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';
import { RootSearchStackNavigation } from '../navigation/SearchStackNavigation';
import { useProperties } from '../hooks/useProperties';
import Loading from '../components/ui/Loading';
import { currencyFormat } from '../helpers/currencyFormat';
import PropertyItem from '../components/SearchScreen.tsx/PropertyItem';

interface Props
  extends StackScreenProps<RootSearchStackNavigation, 'PropertiesMapScreen'> {}

const PropertiesMapScreen = ({ navigation, route }: Props) => {
  const {
    latitude,
    longitude,
    propertyType,
    action,
    currency,
    isCommercial,
    locality,
    bath,
    room,
    petFriendly,
    conservacion,
    desde,
    hasta,
  } = route.params;

  const { loading, properties } = useProperties(
    propertyType,
    action,
    currency,
    isCommercial,
    locality,
    bath,
    room,
    petFriendly,
    conservacion,
  );
  const [selectedPlaceId, setSelectedPlaceId] = useState('');

  const goToProperty = (id: string, action: string, propertyType: string) => {
    navigation.navigate('PropertySearchDetailScreen', {
      id,
      action,
      propertyType,
    });
  };

  const handleGoBack = () => navigation.goBack();

  const showSelectedPlace = (id: string) => {
    setSelectedPlaceId(id);
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {properties && (
            <MapView
              style={{
                flex: 1,
              }}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}>
              {properties &&
                properties
                  .filter(property => {
                    return (
                      property.data.lat !== undefined &&
                      property.data.lng !== undefined &&
                      property.data.price >= desde &&
                      property.data.price <= hasta
                    );
                  })
                  .map(property => (
                    <Marker
                      identifier={property.id}
                      onPress={() => {
                        showSelectedPlace(property.id);
                        // goToProperty(
                        //   property.id,
                        //   property.data.action,
                        //   property.data.propertyType,
                        // );
                      }}
                      key={property.id}
                      coordinate={{
                        latitude: property.data.lat,
                        longitude: property.data.lng,
                      }}>
                      <TouchableOpacity
                        style={
                          selectedPlaceId === property.id
                            ? styles.bgSelected
                            : styles.bg
                        }>
                        <Text
                          style={
                            selectedPlaceId === property.id
                              ? styles.textSelected
                              : styles.text
                          }>
                          {currencyFormat(property.data.price)}{' '}
                          {property.data.currency}{' '}
                          {property.data.isDestProperty && (
                            <Image
                              style={{ width: 18, height: 18 }}
                              source={require('../assets/logo_1-01.png')}
                            />
                          )}
                        </Text>
                      </TouchableOpacity>
                    </Marker>
                  ))}
            </MapView>
          )}
          <Icon
            onPress={handleGoBack}
            name="arrow-back-outline"
            size={28}
            color="#000"
            style={{ position: 'absolute', top: 60, left: 20 }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000',
    borderRadius: 20,
    borderWidth: 0.5,
  },
  bgSelected: {
    backgroundColor: '#000',
    borderColor: '#fff',
    borderRadius: 20,
    borderWidth: 0.5,
  },
  text: {
    color: '#000',
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  textSelected: {
    color: '#fff',
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});

export default PropertiesMapScreen;
