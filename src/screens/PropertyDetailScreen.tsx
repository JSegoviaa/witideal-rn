import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Description from '../components/PropertyDetailScreen/Description';
import Images from '../components/PropertyDetailScreen/Images';
// import Map from '../components/PropertyDetailScreen/Map';
import SpecificDetails from '../components/PropertyDetailScreen/SpecificDetails';
import { useProperty } from '../hooks/useProperty';
import Loading from '../components/ui/Loading';

const PropertyDetailScreen = () => {
  const navigation = useNavigation();
  const { loading } = useProperty();

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
            <Images />
            <Description />
            <SpecificDetails />
            {/* <Map/> */}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default PropertyDetailScreen;
