import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigation from './src/navigation/TabsNavigation';
import { GradientProvider } from './src/context/gradient/GradientContext';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/auth/AuthContext';
import PermissionsProvider from './src/context/permissions/PermissionsContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <PermissionsProvider>
        <NavigationContainer>
          <GradientProvider>
            <StatusBar
              barStyle={'dark-content'}
              backgroundColor={'transparent'}
              translucent={true}
            />
            <TabsNavigation />
          </GradientProvider>
        </NavigationContainer>
      </PermissionsProvider>
    </AuthProvider>
  );
};

export default App;
