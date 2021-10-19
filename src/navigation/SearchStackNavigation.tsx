import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
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
        options={{ title: '' }}
        component={SearchScreen}
      />
      <Stack.Screen
        name="PropertiesListScreen"
        options={{
          title: 'Witideal',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#3f19f9' },
          headerTitle: () => (
            <Image
              source={require('../assets/witideal-logo.png')}
              style={{ width: 200, height: 39 }}
            />
          ),
        }}
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
