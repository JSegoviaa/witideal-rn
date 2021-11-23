import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddPropertyMapScreen from '../screens/AddPropertyMapScreen';
import PropertyType from '../components/AddPropertyScreen/PropertyType';
import Ubicacion from '../components/AddPropertyScreen/Ubicacion';
import SpecificData from '../components/AddPropertyScreen/SpecificData';
import UploadPropertyPictures from '../components/AddPropertyScreen/UploadPropertyPictures';
import Summary from '../components/AddPropertyScreen/Summary';

export type RootAddPropertyStackNavigation = {
  PropertyTypeScreen: undefined;
  UbicationScreen: undefined;
  AddPropertyMapScreen: { latitude: number; longitude: number };
  SpecificDataScreen: undefined;
  UploadPropertyPicTureScreen: undefined;
  SummaryScreen: undefined;
};

const Stack = createStackNavigator<RootAddPropertyStackNavigation>();

const AddPropertyStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        headerStyle: { elevation: 0, shadowColor: 'transparent' },
      }}>
      <Stack.Screen
        name="PropertyTypeScreen"
        options={{ headerShown: false }}
        component={PropertyType}
      />
      <Stack.Screen
        name="UbicationScreen"
        options={{
          title: 'Anuncio nuevo',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#1E0e6F', fontSize: 24 },
        }}
        component={Ubicacion}
      />
      <Stack.Screen
        name="AddPropertyMapScreen"
        options={{ headerShown: false }}
        component={AddPropertyMapScreen}
      />

      <Stack.Screen
        name="SpecificDataScreen"
        options={{
          title: 'Anuncio nuevo',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#1E0e6F', fontSize: 24 },
        }}
        component={SpecificData}
      />
      <Stack.Screen
        name="UploadPropertyPicTureScreen"
        options={{
          title: 'Anuncio nuevo',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#1E0e6F', fontSize: 24 },
        }}
        component={UploadPropertyPictures}
      />
      <Stack.Screen
        name="SummaryScreen"
        options={{
          title: 'Anuncio nuevo',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#1E0e6F', fontSize: 24 },
        }}
        component={Summary}
      />
    </Stack.Navigator>
  );
};

export default AddPropertyStackNavigation;
