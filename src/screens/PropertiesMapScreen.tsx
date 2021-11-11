import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import { RootSearchStackNavigation } from '../navigation/SearchStackNavigation';

interface Props
  extends StackScreenProps<RootSearchStackNavigation, 'PropertiesMapScreen'> {}

const PropertiesMapScreen = ({ navigation, route }: Props) => {
  const { latitude, longitude } = route.params;

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1 }}>
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
        <Text></Text>
      </MapView>
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

export default PropertiesMapScreen;
