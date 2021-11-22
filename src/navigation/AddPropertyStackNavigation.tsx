import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddPropertyMapScreen from '../screens/AddPropertyMapScreen';
import PropertyType from '../components/AddPropertyScreen/PropertyType';

export type RootAddPropertyStackNavigation = {
  PropertyTypeScreen: undefined;
  UbicationScreen: undefined;
  AddPropertyMapScreen: undefined;
  SpecificDataScreen: undefined;
  UploadPropertyPicTureScreen: undefined;
};

const Stack = createStackNavigator<RootAddPropertyStackNavigation>();

const AddPropertyStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PropertyTypeScreen"
        options={{ headerShown: false }}
        component={PropertyType}
      />
      <Stack.Screen name="UbicationScreen" component={AddPropertyMapScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AddPropertyMapScreen"
        component={AddPropertyMapScreen}
      />
      <Stack.Screen
        name="SpecificDataScreen"
        component={AddPropertyMapScreen}
      />
      <Stack.Screen
        name="UploadPropertyPicTureScreen"
        component={AddPropertyMapScreen}
      />
    </Stack.Navigator>
  );
};

export default AddPropertyStackNavigation;
