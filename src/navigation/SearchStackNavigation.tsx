import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import PropertiesListScreen from '../screens/PropertiesListScreen';
import SearchScreen from '../screens/SearchScreen';

export type RootSearchStackNavigation = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  PropertiesListScreen:undefined
};

const Stack = createStackNavigator<RootSearchStackNavigation>();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="SearchScreen"
        options={{ headerShown: false }}
        component={SearchScreen}
      />
      <Stack.Screen
        name="PropertiesListScreen"
        options={{ headerShown: false }}
        component={PropertiesListScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;
