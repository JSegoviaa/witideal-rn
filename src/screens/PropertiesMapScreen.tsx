import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { Circle, Marker } from 'react-native-maps';
import { RootSearchStackNavigation } from '../navigation/SearchStackNavigation';

interface Props
  extends StackScreenProps<RootSearchStackNavigation, 'SearchScreen'> {}

const PropertiesMapScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({ headerTransparent: true });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{
          flex: 1,
        }}>
        <Text></Text>
      </MapView>
    </View>
  );
};

export default PropertiesMapScreen;
