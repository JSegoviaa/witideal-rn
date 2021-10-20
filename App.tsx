import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigation from './src/navigation/TabsNavigation';
import { GradientProvider } from './src/context/gradient/GradientContext';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/auth/AuthContext';

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
