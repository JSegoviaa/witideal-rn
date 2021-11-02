import React, { useEffect } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { Circle, Marker } from 'react-native-maps';
import { RootMyPropertiesStackNavigation } from '../navigation/MyPropertiesStackNavigation';

interface Props
  extends StackScreenProps<RootMyPropertiesStackNavigation, 'MapScreen'> {}

const MapScreen = ({ route, navigation }: Props) => {
  const { latitude, longitude, isExactLocation } = route.params;

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTransparent: true });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{
          flex: 1,
        }}
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
    </View>
  );
};

export default MapScreen;
