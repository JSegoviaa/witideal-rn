import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
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

const PropertyDetailScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const { id, action, propertyType } = route.params;
  const { loading } = useProperty(id, action, propertyType);

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTransparent: true });
  }, []);

  return (
    <>
      {loading ? (
        <Loading size="large" color="#1E0E9D" />
      ) : (
        <ScrollView>
          <View style={{ backgroundColor: '#fff' }}>
            <Images id={id} action={action} propertyType={propertyType} />
            <Description id={id} action={action} propertyType={propertyType} />
            <SpecificDetails
              id={id}
              action={action}
              propertyType={propertyType}
            />
            {/* <Map/> */}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default PropertyDetailScreen;
