import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootAddPropertyStackNavigation } from '../navigation/AddPropertyStackNavigation';

interface Location {
  latitude: number;
  longitude: number;
}

interface Props
  extends StackScreenProps<
    RootAddPropertyStackNavigation,
    'AddPropertyMapScreen'
  > {}

const AddPropertyMapScreen = ({ navigation, route }: Props) => {
  const [coordinates, setCoordinates] = useState<Location>({
    latitude: 21.1742,
    longitude: -86.8466,
  });
  const { latitude, longitude } = coordinates;

  const handleGoBack = () => navigation.goBack();

  const handleNext = () => navigation.navigate('SpecificDataScreen');

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
        <Marker
          icon={require('../assets/ubicacion-01.png')}
          draggable
          onDragStart={e => {
            console.log(e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setCoordinates({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
          coordinate={{ latitude: 21.1742, longitude: -86.8466 }}
        />
      </MapView>

      <Icon
        onPress={handleGoBack}
        name="arrow-back-outline"
        size={28}
        color="#000"
        style={{ position: 'absolute', top: 60, left: 20 }}
      />
      <Icon
        onPress={handleNext}
        name="arrow-forward-outline"
        size={40}
        color="#000"
        style={{ position: 'absolute', bottom: 20, right: 20 }}
      />
    </View>
  );
};

export default AddPropertyMapScreen;
