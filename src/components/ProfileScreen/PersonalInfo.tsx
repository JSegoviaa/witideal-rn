import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PersonalInfo = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
            }}
          />
        </View>
        <Text style={styles.center}>¡Hola!</Text>
        <Text style={styles.center}>Plan RisingStar</Text>
        <Text style={styles.name}>José Manuel Acosta Segovia</Text>
        <Text style={styles.uid}>UID: J7idPjx6jVMlYtzQVF3RbfiWre72</Text>
        <Text style={styles.center}>
          <Icon name="call-outline" size={20} />
          9982626821
        </Text>
        <Text style={styles.center}>
          <Icon name="mail-open-outline" size={20} />
          140300177@ucaribe.edu.mx
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textCenter}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: -30
  },
  btn: {
    backgroundColor: '#3F19F9',
    borderColor: '#3F19F9',
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 10,
    paddingVertical: 8,
    textAlign: 'center',
    width: 320,
    fontWeight: '700',
  },
  center: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#1E0E6F',
    fontSize: 20,
    paddingTop:10,
    paddingBottom:10
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 15,
  },
  name: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#1E0E6F',
    fontSize: 30,
    fontWeight: '700',
  },
  textCenter: {
    textAlign: 'center',
    color: 'white',
  },
  uid: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#808080',
  },
});

export default PersonalInfo;
