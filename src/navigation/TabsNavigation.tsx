import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchStackNavigation from './SearchStackNavigation';
import LoginStackNavigation from './LoginStackNavigation';
import { AuthContext } from '../context/auth/AuthContext';
import MyPropertiesStackNavigation from './MyPropertiesStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';
import MyDestPropertiesScreenStack from './MyDestPropertiesScreenStack';

export type RootTabsNavigation = {
  SearchStackNavigation: undefined;
  LoginStackScreen: undefined;
  MyDestPropertiesScreenStack: undefined;
  MyPropertiesScreenStack: undefined;
  ProfileStackNavigation: undefined;
};

const Tab = createBottomTabNavigator<RootTabsNavigation>();

// Componente que se muestra si no tengo sesión iniciada

const TabNoLogin = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#3f19f9',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 12, textAlign: 'center' },
        tabBarIcon: ({ focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'SearchStackNavigation':
              iconName = 'home-outline';
              break;

            case 'LoginStackScreen':
              iconName = 'person-circle-outline';
              break;
          }

          return (
            <Icon
              name={iconName}
              size={25}
              color={focused ? '#3f19f9' : 'black'}
            />
          );
        },
      })}>
      <Tab.Screen
        name="SearchStackNavigation"
        options={{ title: 'Inicio', headerShown: false }}
        component={SearchStackNavigation}
      />

      <Tab.Screen
        name="LoginStackScreen"
        options={{ title: 'Mi Perfil', headerShown: false }}
        component={LoginStackNavigation}
      />
    </Tab.Navigator>
  );
};

// Componente que se muestra si tengo sesión iniciada

const TabLogin = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#3f19f9',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 12, textAlign: 'center' },
        tabBarIcon: ({ focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'SearchStackNavigation':
              iconName = 'home-outline';
              break;

            case 'MyDestPropertiesScreenStack':
              iconName = 'star-outline';
              break;
            case 'MyPropertiesScreenStack':
              iconName = 'business-outline';
              break;
            case 'ProfileStackNavigation':
              iconName = 'person-circle-outline';
              break;
          }

          return (
            <Icon
              name={iconName}
              size={25}
              color={focused ? '#3f19f9' : 'black'}
            />
          );
        },
      })}>
      <Tab.Screen
        name="SearchStackNavigation"
        options={{ title: 'Inicio', headerShown: false }}
        component={SearchStackNavigation}
      />
      <Tab.Screen
        name="MyDestPropertiesScreenStack"
        options={{ title: 'Mis destacados', headerShown: false }}
        component={MyDestPropertiesScreenStack}
      />
      <Tab.Screen
        name="MyPropertiesScreenStack"
        options={{ title: 'Mis propiedades', headerShown: false }}
        component={MyPropertiesStackNavigation}
      />
      <Tab.Screen
        name="ProfileStackNavigation"
        options={{ title: 'Mi perfil', headerShown: false }}
        component={ProfileStackNavigation}
      />
    </Tab.Navigator>
  );
};

const TabsNavigation = () => {
  const { user } = useContext(AuthContext);

  return <>{user ? <TabLogin /> : <TabNoLogin />}</>;
};

export default TabsNavigation;
