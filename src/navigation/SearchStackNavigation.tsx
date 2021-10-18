import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import PropertiesListScreen from '../screens/PropertiesListScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';
import SearchScreen from '../screens/SearchScreen';

export type RootSearchStackNavigation = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  PropertiesListScreen: undefined;
  PropertyDetailScreen: undefined;
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
        options={{ title:'' }}
        component={SearchScreen}
      />
      <Stack.Screen
        name="PropertiesListScreen"
        options={{ title:'' }}
        component={PropertiesListScreen}
      />
      <Stack.Screen
        name="PropertyDetailScreen"
        options={{ title: '' }}
        component={PropertyDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;
