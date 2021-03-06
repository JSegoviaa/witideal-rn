import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { Circle, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootMyPropertiesStackNavigation } from '../navigation/MyPropertiesStackNavigation';
import { useLocation } from '../hooks/useLocation';
import Fab from '../components/ui/Fab';
import Loading from '../components/ui/Loading';

interface Props
  extends StackScreenProps<RootMyPropertiesStackNavigation, 'MapScreen'> {}

const PropertySearchMapScreen = ({ route, navigation }: Props) => {
  const [iconsVisible, setIconsVisible] = useState<Boolean>(false);
  const [routeVisible, setRouteVisible] = useState<Boolean>(false);
  const { latitude, longitude, isExactLocation } = route.params;
  const {
    loading,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
  } = useLocation();
  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);
  const destination = { latitude, longitude };

  const origin = {
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
  };

  const toggleMenu = () => setIconsVisible(!iconsVisible);
  const createRoute = () => setRouteVisible(!routeVisible);

  const centerPosition = async () => {
    const { latitude, longitude } = await getCurrentLocation();
    following.current = true;

    mapViewRef.current?.animateCamera({
      center: { latitude, longitude },
    });
  };

  const propertyPosition = () => {
    following.current = false;
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude },
    });
  };

  useEffect(() => {
    following.current = false;
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) return;

    mapViewRef.current?.animateCamera({
      center: {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      },
    });
  }, [userLocation]);

  useEffect(() => {
    navigation.setOptions({ headerTransparent: true });
  }, []);

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <Loading />
      ) : (
        <MapView
          onTouchStart={() => {
            following.current = false;
          }}
          ref={e => {
            mapViewRef.current = e!;
          }}
          style={{
            flex: 1,
          }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0151,
          }}>
          {routeVisible ? (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={'AIzaSyAd22YBCutdzEZePBY2wbS2OawTZ1_H7-s'}
              strokeWidth={4}
              strokeColor="#3F19F9"
            />
          ) : (
            <></>
          )}
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}>
            <Icon name="car-sharp" size={28} color="#3F19F9" />
          </Marker>
          {isExactLocation ? (
            <Marker coordinate={{ latitude, longitude }} />
          ) : (
            <Circle
              center={{ latitude, longitude }}
              radius={250}
              fillColor={'rgba(63,25,249,0.5)'}
            />
          )}
        </MapView>
      )}

      {iconsVisible && (
        <>
          <Fab
            iconName="navigate-circle-outline"
            onPress={createRoute}
            style={{ position: 'absolute', bottom: 210, left: 15 }}
            iconStyle={{ left: 1 }}
          />
          <Fab
            iconName="location-outline"
            onPress={propertyPosition}
            style={{ position: 'absolute', bottom: 150, left: 15 }}
          />
          <Fab
            iconName="compass-outline"
            onPress={centerPosition}
            style={{ position: 'absolute', bottom: 90, left: 15 }}
            iconStyle={{ left: 1 }}
          />
        </>
      )}
      <Fab
        iconName={!iconsVisible ? 'chevron-up-outline' : 'chevron-down-outline'}
        onPress={toggleMenu}
        style={{ position: 'absolute', bottom: 30, left: 15 }}
      />
      <Icon
        onPress={handleGoBack}
        name="arrow-back-outline"
        size={28}
        color="#000"
        style={{ position: 'absolute', top: 60, left: 20 }}
      />
    </View>
  );
};

export default PropertySearchMapScreen;
