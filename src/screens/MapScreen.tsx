import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootMyPropertiesStackNavigation } from '../navigation/MyPropertiesStackNavigation';
import { View } from 'react-native';
import MapView from 'react-native-maps';

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
        }}
      />
    </View>
  );
};

export default MapScreen;
