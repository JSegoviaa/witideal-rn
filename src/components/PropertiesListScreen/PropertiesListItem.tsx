import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  id: Number;
  title: String;
  img: String;
}

const PropertiesListItem = ({ inmueble }: Props) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image
          width={500}
          height={50}
          style={{ width: '100%', height: 200 }}
          source={{
            uri: `${inmueble.img}`,
          }}
        />
        <Text style={styles.textCenter}>{inmueble.title}</Text>
        <Text style={styles.textCenter}>${inmueble.precio} MXN</Text>

        <Text style={styles.subtitle}>{inmueble.desc}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PropertiesListItem;
