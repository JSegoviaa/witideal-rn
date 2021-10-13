import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  id: Number;
  title: String;
  img: String;
}

const MyPropertiesListItem = ({ inmueble }: Props) => {
  return (
    <>
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

          <Text style={styles.subtitle}>{inmueble.desc}</Text>

          <View style={{ flexDirection: 'row',padding:10 }}>
            <TouchableOpacity style={styles.btnActivate} >
              <Text style={{ color: 'white' }}>Activar inmueble</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnDest}>
              <Text style={{ color: '#3F19F9' }}>Destacar inmueble</Text>
            </TouchableOpacity>
          </View>
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
    marginRight:10
  },
  btnDest: {
    padding: 7,
    alignItems: 'center',
    flex: 1,
    borderColor: '#63C5FA',
    borderRadius: 50,
    borderWidth: 1,
    marginLeft:10

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

export default MyPropertiesListItem;
