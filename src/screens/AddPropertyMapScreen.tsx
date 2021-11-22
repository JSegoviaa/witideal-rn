import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface Location {
  latitude: number;
  longitude: number;
}

const AddPropertyMapScreen = () => {
  const [coordinates, setCoordinates] = useState<Location>({
    latitude: 21.1742,
    longitude: -86.8466,
  });
  const { latitude, longitude } = coordinates;

  return (
    <View>
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
          draggable
          onDragStart={() => {
            console.log('start');
          }}
          onDragEnd={() => {
            console.log('end');
          }}
          coordinate={{ latitude: 21.1742, longitude: -86.8466 }}>
          <Image
            source={require('../assets/ubicacion-01.png')}
            style={{ width: 50, height: 50 }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default AddPropertyMapScreen;

const styles = StyleSheet.create({});
