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
  latitude: number;
  longitude: number;
  propertyType: string;
}

interface PropertiesList {
  id: string;
  action: string;
  propertyType: string;
}

export type RootSearchStackNavigation = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  PropertiesListScreen: undefined;
  PropertyDetailScreen: PropertiesList;
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
