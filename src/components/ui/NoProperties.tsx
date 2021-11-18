import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

interface Props {
  title: string;
}

const NoProperties = ({ title }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <Image
        width={10}
        height={10}
        style={{
          width: 200,
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        source={require('../../assets/warning.png')}
      />
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#1C006F',
  },
});

export default NoProperties;
