import React from 'react';
import MyDestPropertiesListItem from './MyDestPropertiesListItem';

interface Props {
  id: Number;
  title: String;
  img: String;
}

const MyDestPropertiesList = ({ inmueble }: Props) => {
  return <MyDestPropertiesListItem inmueble={inmueble} />;
};

export default MyDestPropertiesList;
