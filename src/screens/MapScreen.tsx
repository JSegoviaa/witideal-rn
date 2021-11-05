import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { Circle, Marker } from 'react-native-maps';
import { RootMyPropertiesStackNavigation } from '../navigation/MyPropertiesStackNavigation';
import { useLocation } from '../hooks/useLocation';
import Fab from '../components/ui/Fab';

interface Props
  extends StackScreenProps<RootMyPropertiesStackNavigation, 'MapScreen'> {}

const MapScreen = ({ route, navigation }: Props) => {
  const { latitude, longitude, isExactLocation } = route.params;
  const { loading, getCurrentLocation } = useLocation();
  const mapViewRef = useRef<MapView>();

  const centerPosition = async () => {
    const { latitude, longitude } = await getCurrentLocation();

    mapViewRef.current?.animateCamera({
      center: { latitude, longitude },
    });
  };

  const propertyPosition = () => {
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude },
    });
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTransparent: true });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <Text>Estamos ubicándote en el mapa</Text>
      ) : (
        <MapView
          ref={e => {
            mapViewRef.current = e!;
          }}
          style={{
            flex: 1,
          }}
          showsUserLocation
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0151,
          }}>
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
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{ position: 'absolute', bottom: 10, right: 10 }}
      />
      <Fab
        iconName="location-outline"
        onPress={propertyPosition}
        style={{ position: 'absolute', bottom: 70, right: 10 }}
      />
    </View>
  );
};

export default MapScreen;
