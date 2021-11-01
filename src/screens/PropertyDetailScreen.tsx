import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Description from '../components/PropertyDetailScreen/Description';
import Images from '../components/PropertyDetailScreen/Images';
// import Map from '../components/PropertyDetailScreen/Map';
import SpecificDetails from '../components/PropertyDetailScreen/SpecificDetails';
import { useProperty } from '../hooks/useProperty';
import Loading from '../components/ui/Loading';
import { RootSearchStackNavigation } from '../navigation/SearchStackNavigation';

interface Props
  extends StackScreenProps<RootSearchStackNavigation, 'PropertyDetailScreen'> {}

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
                <SpecificDetails
                  id={id}
                  action={action}
                  propertyType={propertyType}
                />
                {/* <Map/> */}
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
