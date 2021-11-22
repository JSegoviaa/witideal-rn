import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import TabsNavigation from './src/navigation/TabsNavigation';
import { GradientProvider } from './src/context/gradient/GradientContext';
import { AuthProvider } from './src/context/auth/AuthContext';
import PermissionsProvider from './src/context/permissions/PermissionsContext';
import PropertyProvider from './src/context/property/PropertyContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <AuthProvider>
        <PropertyProvider>
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
        </PropertyProvider>
      </AuthProvider>
      <Toast />
    </>
  );
};

export default App;
