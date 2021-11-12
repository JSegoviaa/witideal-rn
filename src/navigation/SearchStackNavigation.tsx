import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PropertiesListScreen from '../screens/PropertiesListScreen';
import PropertiesMapScreen from '../screens/PropertiesMapScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';
import SearchScreen from '../screens/SearchScreen';

interface PropertiesMap {
  action: string;
  currency: string;
  isCommercial: boolean;
  latitude: number;
  longitude: number;
  propertyType: string;
  locality: string;
}

interface PropertiesList {
  action: string;
  currency: string;
  isCommercial: boolean;
  propertyType: string;
}

export type RootSearchStackNavigation = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  PropertiesListScreen: PropertiesList;
  PropertyDetailScreen: undefined;
  PropertiesMapScreen: PropertiesMap;
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
              style={{ width: 179, height: 35 }}
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
      <Stack.Screen
        name="PropertiesMapScreen"
        options={{ title: '', headerShown: false }}
        component={PropertiesMapScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;
