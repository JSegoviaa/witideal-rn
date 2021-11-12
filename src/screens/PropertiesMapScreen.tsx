import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';
import { RootSearchStackNavigation } from '../navigation/SearchStackNavigation';
import { useProperties } from '../hooks/useProperties';
import Loading from '../components/ui/Loading';

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
  } = route.params;
  const handleGoBack = () => navigation.goBack();

  const { loading, properties } = useProperties(
    propertyType,
    action,
    currency,
    isCommercial,
    locality,
  );

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
                      property.data.lng !== undefined
                    );
                  })
                  .map(property => (
                    <Marker
                      key={property.id}
                      coordinate={{
                        latitude: property.data.lat,
                        longitude: property.data.lng,
                      }}
                    />
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

export default PropertiesMapScreen;
