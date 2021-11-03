import React, { useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Description from '../components/PropertyDetailScreen/Description';
import Images from '../components/PropertyDetailScreen/Images';
import SpecificDetails from '../components/PropertyDetailScreen/SpecificDetails';
import { useProperty } from '../hooks/useProperty';
import Loading from '../components/ui/Loading';
import { RootMyPropertiesStackNavigation } from '../navigation/MyPropertiesStackNavigation';
import { appStyles } from '../theme/appTheme';

interface Props
  extends StackScreenProps<
    RootMyPropertiesStackNavigation,
    'MyPropertiesScreenDetail'
  > {}

//Este componente se muestra si la propiedad fue desactivada
const NoEnable = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Image
        width={10}
        height={10}
        style={{
          width: 200,
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          opacity: 0.4,
        }}
        source={require('../assets/warning.png')}
      />
      <Text style={styles.noPayments}>
        Lo sentimos, el promotor ha dado de baja este inmueble
      </Text>
    </View>
  );
};

//Este componente se muestra cuando la propiedad está activada
const PropertyDetailScreen = ({ route, navigation }: Props) => {
  const { id, action, propertyType } = route.params;
  const { loading, property } = useProperty(id, action, propertyType);

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTransparent: true });
  }, []);

  return (
    <>
      {loading ? (
        <Loading size="large" color="#1E0E9D" />
      ) : (
        <>
          {property && property.isEnabled ? (
            <ScrollView>
              <View style={{ backgroundColor: '#fff' }}>
                <Images id={id} action={action} propertyType={propertyType} />
                <Description
                  id={id}
                  action={action}
                  propertyType={propertyType}
                />
                {property && (
                  <View style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                    <TouchableOpacity
                      style={appStyles.btnPrimary}
                      onPress={() => {
                        navigation.navigate('MapScreen', {
                          latitude: property.lat,
                          longitude: property.lng,
                          isExactLocation: property.isExactLocation,
                        });
                      }}>
                      <Text style={{ textAlign: 'center', color: '#fff' }}>
                        Ver ubicación
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                <SpecificDetails
                  id={id}
                  action={action}
                  propertyType={propertyType}
                />
              </View>
            </ScrollView>
          ) : (
            <NoEnable />
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  noPayments: {
    color: '#1C006F',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    opacity: 0.4,
  },
});

export default PropertyDetailScreen;
