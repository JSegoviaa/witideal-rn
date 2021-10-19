import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigation from './src/navigation/TabsNavigation';
import { GradientProvider } from './src/context/gradient/GradientContext';

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <TabsNavigation />
      </GradientProvider>
    </NavigationContainer>
  );
};

export default App;
