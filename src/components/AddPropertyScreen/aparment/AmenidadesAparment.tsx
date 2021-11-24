import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { PropertyContext } from '../../../context/property/PropertyContext';
import { appStyles } from '../../../theme/appTheme';

const AmenidadesAparment = () => {
  const {
    onChange,
    setPool,
    specificData,
    setSportsField,
    setSwimmingLane,
    setBussinessCentre,
    setPlayground,
    setPartyRoom,
    setGym,
  } = useContext(PropertyContext);

  return (
    <>
      <Text style={styles.subtitle}>Amenidades</Text>

      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Piscinas"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setPool(!specificData.pool);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Canchas"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setSportsField(!specificData.sportsField);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Carril de nado"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setSwimmingLane(!specificData.swimmingLane);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Centro de negocios"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setBussinessCentre(!specificData.bussinessCentre);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Juegos infantiles"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setPlayground(!specificData.playground);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Salón de fiestas"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setPartyRoom(!specificData.partyRoom);
        }}
      />
      <BouncyCheckbox
        style={{ paddingVertical: 5 }}
        size={25}
        fillColor="#3F19F9"
        unfillColor="#FFFFFF"
        text="Gym"
        iconStyle={{ borderColor: '#3F19F9' }}
        textStyle={{
          fontFamily: 'JosefinSans-Regular',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          setGym(!specificData.gym);
        }}
      />

      <TextInput
        onChangeText={value => onChange(value, 'extras')}
        style={appStyles.input}
        placeholder="Otros"
        placeholderTextColor="#ccc"
      />
    </>
  );
};

export default AmenidadesAparment;

const styles = StyleSheet.create({
  subtitle: {
    color: '#1E0E6F',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
});
