import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MyPropertiesScreen from '../screens/MyPropertiesScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';

export type RootMyPropertiesStackNavigation = {
  MyPropertiesScreen: undefined;
  MyPropertiesScreenDetail: undefined;
};

const Stack = createStackNavigator<RootMyPropertiesStackNavigation>();

const MyPropertiesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: 'Mis propiedades', headerShown: false }}
        name="MyPropertiesScreen"
        component={MyPropertiesScreen}
      />
      <Stack.Screen
        options={{ title: '', headerShown: false }}
        name="MyPropertiesScreenDetail"
        component={PropertyDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MyPropertiesStackNavigation;
