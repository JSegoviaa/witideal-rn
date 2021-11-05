import React, { useEffect } from 'react';
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
  const { userPosition, loading } = useLocation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTransparent: true });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <Text>Estamos ubicándote en el mapa</Text>
      ) : (
        <MapView
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
        onPress={() => {
          console.log('hola');
        }}
        style={{ position: 'absolute', bottom: 10, right: 10 }}
      />
    </View>
  );
};

export default MapScreen;
