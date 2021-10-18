import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

export type RootSearchStackNavigation = {
  HomeScreen: undefined;
  SearchScreen: undefined;
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
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;
