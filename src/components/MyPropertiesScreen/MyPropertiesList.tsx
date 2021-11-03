import React from 'react';
import MyPropertiesListItem from './MyPropertiesListItem';

const MyPropertiesList = ({ inmueble }: any) => {
  return <MyPropertiesListItem inmueble={inmueble} />;
};

export default MyPropertiesList;
