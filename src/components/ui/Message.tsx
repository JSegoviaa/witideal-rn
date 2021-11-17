import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
}

const Message = ({ title }: Props) => {
  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
});
