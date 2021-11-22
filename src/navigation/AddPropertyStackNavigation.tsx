import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddPropertyMapScreen from '../screens/AddPropertyMapScreen';

export type RootAddPropertyStackNavigation = {
  PropertyTypeScreen: undefined;
  UbicationScreen: undefined;
  AddPropertyMapScreen: undefined;
  SpecificDataScreen: undefined;
};

const Stack = createStackNavigator<RootAddPropertyStackNavigation>();

const AddPropertyStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PropertyTypeScreen"
        options={{ headerShown: false }}
        component={AddPropertyMapScreen}
      />
      <Stack.Screen name="UbicationScreen" component={AddPropertyMapScreen} />
      <Stack.Screen
        name="AddPropertyMapScreen"
        component={AddPropertyMapScreen}
      />
      <Stack.Screen
        name="SpecificDataScreen"
        component={AddPropertyMapScreen}
      />
    </Stack.Navigator>
  );
};

export default AddPropertyStackNavigation;
