import React from 'react';
import MyPropertiesListItem from './MyPropertiesListItem';

interface Props {
  id: Number;
  title: String;
  img: String;
}

const MyPropertiesList = ({ inmueble }: Props) => {
  return <MyPropertiesListItem inmueble={inmueble}  />;
};

export default MyPropertiesList;
