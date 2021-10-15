import React from 'react';
import { View } from 'react-native';
import PropertiesListItem from './PropertiesListItem';

interface Props {
  id: Number;
  title: String;
  img: String;
}

const PropertiesList = ({ inmueble }: Props) => {
  return (
    <View>
      <PropertiesListItem inmueble={inmueble} />
    </View>
  );
};

export default PropertiesList;
