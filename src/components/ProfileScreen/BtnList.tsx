import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { appStyles } from '../../theme/appTheme';

const BtnList = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Payments');
          }}>
          <Text style={appStyles.btnSecondary}>Mis pagos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyFavorites');
          }}>
          <Text style={appStyles.btnSecondary}>Mis favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, paddingBottom: 15 },

})


export default BtnList;
