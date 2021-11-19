import React from 'react';
import { ScrollView, View } from 'react-native';
import PropertyType from '../components/AddPropertyScreen/PropertyType';
import SpecificData from '../components/AddPropertyScreen/SpecificData';
import Summary from '../components/AddPropertyScreen/Summary';
import Ubicacion from '../components/AddPropertyScreen/Ubicacion';
import UploadPropertyPictures from '../components/AddPropertyScreen/UploadPropertyPictures';
import { appStyles } from '../theme/appTheme';

const AddPropertyScreen = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      nestedScrollEnabled
      style={{ backgroundColor: '#fff' }}>
      <View style={appStyles.container}>
        <PropertyType />
        <Ubicacion />
        <SpecificData />
        <UploadPropertyPictures />
        <Summary />
      </View>
    </ScrollView>
  );
};

export default AddPropertyScreen;
