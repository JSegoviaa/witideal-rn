import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { toggleEnable } from '../../helpers/enableProperty';
import { StackNavigationProp } from '@react-navigation/stack';

const MyPropertiesListItem = ({ inmueble }: any) => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const [isEnable, setIsEnable] = useState(inmueble.data.isEnabled);

  const handleEnable = () => {
    setIsEnable(!isEnable);
    toggleEnable(!isEnable, inmueble.id, inmueble.data.uId);
  };

  const handleDisable = () => {
    setIsEnable(!isEnable);
    toggleEnable(!isEnable, inmueble.id, inmueble.data.uId);
  };

  return (
    <>
      <View style={isEnable ? styles.card : styles.disableCard}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreenNavigation', {
              screen: 'PropertyDetailScreen',
            });
          }}>
          <Image
            width={500}
            height={50}
            style={isEnable ? styles.image : styles.disableimage}
            source={{
              uri: `${inmueble.data.principalPhotoPath}`,
            }}
          />

          {inmueble.data.specificData.propertyTitle && (
            <Text numberOfLines={1} style={styles.textCenter}>
              {inmueble.data.specificData.propertyTitle}
            </Text>
          )}

          {inmueble.data && (
            <Text
              style={isEnable ? styles.textCenter : styles.textCenterDisabled}>
              {inmueble.data.sublocality_level_1 !== undefined
                ? inmueble.data.sublocality_level_1 + ','
                : ''}{' '}
              {inmueble.data.administrative_area_level_2_3 !== undefined
                ? inmueble.data.administrative_area_level_2_3 + ','
                : ''}{' '}
              {inmueble.data.administrative_area_level_1 !== undefined
                ? inmueble.data.administrative_area_level_1
                : ''}
            </Text>
          )}

          {inmueble.desc && (
            <Text style={styles.subtitle}>{inmueble.desc}</Text>
          )}

          {!isEnable && (
            <Text style={styles.subtitle}>
              Si deseas activar este anuncio, solo presiona el botón "Activar
              anuncio"{' '}
            </Text>
          )}

          <View style={{ flexDirection: 'row', padding: 10 }}>
            {isEnable ? (
              <TouchableOpacity style={styles.btnDest} onPress={handleDisable}>
                <Text style={{ color: '#3F19F9' }}>Desactivar Inmueble</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.btnActivate}
                onPress={handleEnable}>
                <Text style={{ color: 'white' }}>Activar inmueble</Text>
              </TouchableOpacity>
            )}

            {isEnable ? (
              <TouchableOpacity style={styles.btnDest}>
                <Text style={{ color: '#3F19F9' }}>Destacar inmueble</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity disabled={true} style={styles.btnDest}>
                <Text style={{ color: '#3F19F9' }}>Destacar inmueble</Text>
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.subtitle}> ID:{inmueble.id}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnActivate: {
    alignItems: 'center',
    backgroundColor: '#3F19F9',
    borderRadius: 50,
    flex: 1,
    padding: 7,
    marginRight: 10,
  },
  btnDest: {
    padding: 7,
    alignItems: 'center',
    flex: 1,
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: 10,
  },
  card: {
    elevation: 1,
    borderRadius: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  disableCard: {
    elevation: 1,
    borderRadius: 2,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
  },
  image: { width: '100%', height: 200 },
  disableimage: { width: '100%', height: 200, opacity: 0.5 },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 18,
    color: '#1e0e6f',
    fontWeight: '700',
    padding: 5,
  },
  textCenterDisabled: {
    textAlign: 'center',
    fontSize: 18,
    color: '#1e0e6f',
    fontWeight: '700',
    padding: 5,
    opacity: 0.5,
  },
});

export default MyPropertiesListItem;
