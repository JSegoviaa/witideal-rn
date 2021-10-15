import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MyPropertiesScreen from '../screens/MyPropertiesScreen';
import MyDestPropertiesScreen from '../screens/MyDestPropertiesScreen';
import SearchStackNavigation from './SearchStackNavigation';
import StackNavigation from './StackNavigation';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreenNavigation':
              iconName = 'home-outline';
              break;

            case 'MyDestPropertiesScreen':
              iconName = 'star-outline';
              break;
            case 'MyPropertiesScreen':
              iconName = 'business-outline';
              break;

            case 'ProfileScreen':
              iconName = 'person-circle-outline';
              break;
          }

          return <Icon name={iconName} size={20} />;
        },
      })}>
      <Tab.Screen
        name="HomeScreenNavigation"
        options={{ title: 'Inicio', headerShown: false }}
        component={SearchStackNavigation}
      />
      <Tab.Screen
        name="MyDestPropertiesScreen"
        options={{ title: 'Mis destacados', headerShown: false }}
        component={MyDestPropertiesScreen}
      />
      <Tab.Screen
        name="MyPropertiesScreen"
        options={{ title: 'Mis propiedades', headerShown: false }}
        component={MyPropertiesScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{ title: 'Mi perfil', headerShown: false }}
        component={StackNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
