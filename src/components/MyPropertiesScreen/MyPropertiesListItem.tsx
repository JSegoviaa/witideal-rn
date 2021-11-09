import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { toggleEnable } from '../../helpers/enableProperty';
import { RootMyPropertiesStackNavigation } from '../../navigation/MyPropertiesStackNavigation';
import { useRole } from '../../hooks/useRole';
import { deleteMyProperty, deleteProperty } from '../../helpers/deleteProperty';
import { updateDestProperty } from '../../helpers/updateDestProperty';

const MyPropertiesListItem = ({ inmueble }: any) => {
  const [isDestProperty, setIsDestProperty] = useState(
    inmueble.data.isDestProperty,
  );

  const navigation =
    useNavigation<
      StackNavigationProp<
        RootMyPropertiesStackNavigation,
        'MyPropertiesScreenDetail'
      >
    >();
  const [isEnable, setIsEnable] = useState(inmueble.data.isEnabled);
  const { role } = useRole(inmueble.data.uId);

  const handleEnable = () => {
    setIsEnable(!isEnable);
    toggleEnable(!isEnable, inmueble.id, inmueble.data.uId);
  };

  const handleDisable = () => {
    setIsEnable(!isEnable);
    toggleEnable(!isEnable, inmueble.id, inmueble.data.uId);
  };

  const handleDelete = () => {
    Alert.alert('Eliminar inmueble', '¿Está seguro de eliminar el inmueble?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        onPress: () => {
          deleteProperty(
            inmueble.data.propertyType,
            inmueble.data.action,
            inmueble.id,
          );

          deleteMyProperty(inmueble.id, inmueble.data.uId);

          navigation.push('MyPropertiesScreen');
        },
      },
    ]);
  };

  const handleDestacado = () => {
    Alert.alert(
      'Destacar inmueble',
      '¿Está seguro de destacar este inmueble?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Destacar',
          onPress: () => {
            setIsDestProperty(!isDestProperty);
            updateDestProperty(!isDestProperty, inmueble.id, inmueble.data.uId);
            navigation.push('MyPropertiesScreen');
            Toast.show({
              type: 'success',
              text1: 'La propiedad se ha destacado con éxito',
            });
          },
        },
      ],
    );
  };

  return (
    <>
      <View style={isEnable ? styles.card : styles.disableCard}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyPropertiesScreenDetail', {
              id: inmueble.id,
              action: inmueble.data.action,
              propertyType: inmueble.data.propertyType,
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
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  Activar inmueble
                </Text>
              </TouchableOpacity>
            )}

            {!isEnable && (
              <TouchableOpacity style={styles.btnDanger} onPress={handleDelete}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  Eliminar inmueble
                </Text>
              </TouchableOpacity>
            )}

            {isEnable && !isDestProperty && (
              <TouchableOpacity
                style={styles.btnDest}
                onPress={handleDestacado}>
                <Text style={{ color: '#3F19F9', textAlign: 'center' }}>
                  Destacar inmueble
                </Text>
              </TouchableOpacity>
            )}

            {isDestProperty && (
              <TouchableOpacity
                disabled
                style={styles.btnDest}
                onPress={handleDestacado}>
                <Text style={{ color: '#c5c5c5', textAlign: 'center' }}>
                  Propiedad destacada
                </Text>
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
    marginRight: 10,
    padding: 7,
  },
  btnDanger: {
    alignItems: 'center',
    backgroundColor: '#C93131',
    borderRadius: 50,
    flex: 1,
    marginRight: 10,
    padding: 7,
  },
  btnDest: {
    alignItems: 'center',
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    flex: 1,
    marginLeft: 10,
    padding: 7,
  },
  card: {
    borderRadius: 2,
    elevation: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  disableCard: {
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderRadius: 2,
    elevation: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  image: { height: 200, width: '100%' },
  disableimage: { height: 200, opacity: 0.5, width: '100%' },
  subtitle: {
    color: '#000',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
  },
  textCenter: {
    color: '#1e0e6f',
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
    fontWeight: '700',
  },
  textCenterDisabled: {
    color: '#1e0e6f',
    fontSize: 18,
    fontWeight: '700',
    opacity: 0.5,
    padding: 5,
    textAlign: 'center',
  },
});

export default MyPropertiesListItem;
