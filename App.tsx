import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigation from './src/navigation/TabsNavigation';
import { GradientProvider } from './src/context/gradient/GradientContext';
import { StatusBar } from 'react-native';

const App = () => {
  return (
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
  );
};

export default App;
