import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OwnerInfo = () => {
  const [showOwnerInfo, setShowOwnerInfo] = useState<Boolean>(true);

  const handleOwnerInfo = () => setShowOwnerInfo(!showOwnerInfo);

  const image = {
    uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
  };

  return (
    <View style={{ paddingTop: 30 }}>
      {showOwnerInfo ? (
        <>
          <Text style={styles.title}>Rentar Casa</Text>
          <Text style={styles.precio}>$22,750 MXN</Text>
          <TouchableOpacity style={styles.btnInfo} onPress={handleOwnerInfo}>
            <Text style={styles.infoBtn}>Ver información del promotor</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={image} />
                <Text style={styles.title}>RE/MAX Del Norte</Text>
              </View>
            </View>
            <Text style={styles.precio}>Teléfono 84 4439 2999</Text>
            <Text style={styles.precio}>contacto@remaxdelnorte.com</Text>
          </View>
          <Text style={styles.title}>Rentar Casa</Text>
          <Text style={styles.precio}>$22,750 MXN</Text>
          <TouchableOpacity style={styles.btnInfo} onPress={handleOwnerInfo}>
            <Text style={styles.infoBtn}>Ocultar información del promotor</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  btnInfo: {
    backgroundColor: '#3F19F9',
    borderRadius: 6,
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '65%',
  },
  infoBtn: {
    color: '#fff',
    textAlign: 'center',
    padding: 13,
    fontSize: 16,
    fontWeight: '700',
  },
  precio: {
    color: '#3F19F9',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  title: {
    color: '#1E0E6F',
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default OwnerInfo;
