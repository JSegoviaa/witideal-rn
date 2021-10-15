import React from 'react';
import { ScrollView, View } from 'react-native';
import Description from '../components/PropertyDetailScreen/Description';
import Images from '../components/PropertyDetailScreen/Images';
import SpecificDetails from '../components/PropertyDetailScreen/SpecificDetails';

const PropertyDetailScreen = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff' }}>
        <Images />
        <Description />
        <SpecificDetails />
      </View>
    </ScrollView>
  );
};

export default PropertyDetailScreen;
