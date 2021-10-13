import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { appStyles } from '../theme/appTheme';

const image = { uri: 'https://i.imgur.com/QxTLA6l.jpg' };

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={image} resizeMode="cover">
        <View style={appStyles.container}>
          <View style={appStyles.logoContainer}>
            <Image
              style={appStyles.logo}
              source={{
                uri: 'https://i.imgur.com/nACtLME.png',
              }}
            />
          </View>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 45,
              paddingTop: 20,
            }}>
            ¡Hola!
          </Text>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 45 }}>
            bienvenido a Witideal.
          </Text>
          <Text style={{ color: '#32FFD2', fontSize: 15, paddingTop: 10 }}>
            Realiza tu primerea búsqueda,
          </Text>
          <Text style={{ color: '#32FFD2', fontSize: 15 }}>
            te ayudamos a encontrar el inmueble que necesitas
          </Text>
          <View
            style={{
              alignItems: 'flex-end',
              alignSelf: 'center',
              flexDirection: 'row',
              paddingBottom: 20,
              flex:1
            }}>
            <TouchableOpacity style={appStyles.btnPrimary}>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
