import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropertyType from '../components/AddPropertyScreen/PropertyType';
import SpecificData from '../components/AddPropertyScreen/SpecificData';
import Summary from '../components/AddPropertyScreen/Summary';
import Ubicacion from '../components/AddPropertyScreen/Ubicacion';
import UploadPropertyPictures from '../components/AddPropertyScreen/UploadPropertyPictures';

const AddPropertyScreen = () => {
  return (
    <ScrollView>
      <PropertyType />
      <Ubicacion />
      <SpecificData />
      <UploadPropertyPictures />
      <Summary />
    </ScrollView>
  );
};

export default AddPropertyScreen;

const styles = StyleSheet.create({});
