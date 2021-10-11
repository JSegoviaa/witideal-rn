import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const BtnList = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Payments');
          }}>
          <Text style={styles.btn}>Mis pagos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyFavorites');
          }}>
          <Text style={styles.btn}>Mis favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 15,
    marginTop:20
  },
  btn: {
    backgroundColor: '#F5F5F5',
    borderColor: '#41B8F9',
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 10,
    paddingVertical: 8,
    textAlign: 'center',
    width: 320,
    color:'#3F19F9',
    fontWeight:'700'
  },
});

export default BtnList;
