import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MapScreen from '../screens/MapScreen';
import MyDestPropertiesScreen from '../screens/MyDestPropertiesScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';

export type RootMyDestPropertiesScreenStack = {
  MyDestPropertiesScreen: undefined;
  MyDestPropertiesScreenDetail: {
    id: string;
    action: string;
    propertyType: string;
  };
  MapScreen: { latitude: number; longitude: number; isExactLocation: boolean };
};

const Stack = createStackNavigator<RootMyDestPropertiesScreenStack>();

const MyDestPropertiesScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: 'Mis propiedades destacadas', headerShown: false }}
        name="MyDestPropertiesScreen"
        component={MyDestPropertiesScreen}
      />
      <Stack.Screen
        options={{ title: '', headerShown: false }}
        name="MyDestPropertiesScreenDetail"
        component={PropertyDetailScreen}
      />
      <Stack.Screen
        options={{ title: '', headerShown: false }}
        name="MapScreen"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export default MyDestPropertiesScreenStack;
