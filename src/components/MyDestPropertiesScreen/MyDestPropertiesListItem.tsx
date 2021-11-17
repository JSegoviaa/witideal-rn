import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RootMyDestPropertiesScreenStack } from '../../navigation/MyDestPropertiesScreenStack';

const MyDestPropertiesListItem = ({ destacado }: any) => {
  const navigation =
    useNavigation<
      StackNavigationProp<
        RootMyDestPropertiesScreenStack,
        'MyDestPropertiesScreenDetail'
      >
    >();

  return (
    <>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyDestPropertiesScreenDetail', {
              id: destacado.id,
              action: destacado.data.action,
              propertyType: destacado.data.propertyType,
            });
          }}>
          <Image
            width={500}
            height={50}
            style={{ width: '100%', height: 200 }}
            source={{
              uri: `${destacado.data.principalPhotoPath}`,
            }}
          />
          <Text style={styles.textCenter}>
            {destacado.data!.route && `${destacado.data!.route} `}
            {destacado.data!.street_number &&
              `${destacado.data!.street_number} `}
            {destacado.data!.int_number && `${destacado.data!.int_number}`}
            {destacado.data!.sublocality_level_1 &&
              `, ${destacado.data!.sublocality_level_1}`}
            {destacado.data!.administrative_area_level_2_3 &&
              `, ${destacado.data!.administrative_area_level_2_3}`}
            {destacado.data!.postal_code && `, ${destacado.data!.postal_code}`}
            {destacado.data!.administrative_area_level_1 &&
              `, ${destacado.data!.administrative_area_level_1}`}
          </Text>
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
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
    padding: 5,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 18,
    color: '#1e0e6f',
    fontWeight: '700',
    padding: 5,
  },
});

export default MyDestPropertiesListItem;
