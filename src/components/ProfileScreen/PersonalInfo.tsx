import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { appStyles } from '../../theme/appTheme';

const PersonalInfo = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: `https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif`,
            }}
          />
        </View>
        <Text style={styles.center}>¡Hola!</Text>

        <Text style={styles.name}>José Manuel Acosta Segovia</Text>

        <Text style={styles.center}>Plan RisingStar</Text>
        <Text style={styles.uid}>UID: asf6546as5f1435sd</Text>

        <Text style={styles.center}>
          <Icon name="call-outline" size={20} />
          9982626821
        </Text>

        <Text style={styles.center}>
          <Icon name="mail-open-outline" size={20} />
          140300177@ucaribe.edu.mx
        </Text>
        <TouchableOpacity style={appStyles.btnPrimary}>
          <Text style={appStyles.textCenter}>Editar perfil</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}></View>
        <TouchableOpacity>
          <Text style={{ color: 'gray' }}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  center: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#1E0E6F',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: { alignItems: 'center', flex: 1, paddingBottom: 15 },
  name: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#1E0E6F',
    fontSize: 30,
    fontWeight: '700',
  },
  uid: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#808080',
  },
});

export default PersonalInfo;
