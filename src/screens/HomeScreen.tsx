import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { appStyles } from '../theme/appTheme';

const image = { uri: 'https://i.imgur.com/QxTLA6l.jpg' };

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={image} resizeMode="cover">
        <View style={appStyles.container}>
          <View style={{ paddingTop: 30 }}>
            <View style={appStyles.logoContainer}>
              <Image
                style={appStyles.logo}
                source={require('../assets/logo-brand.png')}
              />
            </View>
          </View>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 50,
              paddingTop: 20,
            }}>
            ¡Hola!
          </Text>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 50 }}>
            bienvenido a Witideal.
          </Text>
          <Text style={{ color: '#32FFD2', fontSize: 18, paddingTop: 10 }}>
            Realiza tu primera búsqueda,
          </Text>
          <Text style={{ color: '#32FFD2', fontSize: 18 }}>
            te ayudamos a encontrar el inmueble que necesitas
          </Text>

          <View
            style={{
              alignItems: 'flex-end',
              alignSelf: 'center',
              flexDirection: 'row',
              paddingBottom: 30,
              paddingTop: 30,
              flex: 1,
            }}>
            <TouchableOpacity
              style={appStyles.btnPrimary}
              onPress={() => {
                navigation.navigate('SearchScreen');
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Empezar búsqueda
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;
