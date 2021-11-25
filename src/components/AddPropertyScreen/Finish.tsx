import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootTabsNavigation } from '../../navigation/TabsNavigation';
import { appStyles } from '../../theme/appTheme';

interface Props
  extends StackScreenProps<RootTabsNavigation, 'AddPropertyScreen'> {}

const Finish = ({ navigation }: Props) => {
  const seeMyProperties = () => navigation.navigate('MyPropertiesScreenStack');
  const addProperty = () => navigation.popToTop();

  return (
    <SafeAreaView>
      <View style={appStyles.logoContainer}>
        <Image
          source={require('../../assets/logo-brand.png')}
          style={appStyles.logo}
        />
      </View>
      <View>
        <Text style={styles.title}>Muchas gracias por agregar un inmueble</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={appStyles.btnPrimary}>
          <Text style={styles.btnText} onPress={addProperty}>
            Añadir otro inmueble
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={appStyles.btnPrimary}>
          <Text style={styles.btnText} onPress={seeMyProperties}>
            Ver mis inmuebles
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Finish;

const styles = StyleSheet.create({
  title: {
    color: '#1E0E6F',
    fontSize: 27,
    fontWeight: '700',
    paddingTop: 50,
    textAlign: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
});
