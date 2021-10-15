import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const images = [
  {
    id: 1,
    info: 'M2 Construidos',
    data: '310',
    img: 'https://i.imgur.com/SoXYW6s.png',
  },
  {
    id: 2,
    info: 'Recámaras',
    data: '4',
    img: 'https://i.imgur.com/LqCk6WL.png',
  },
  {
    id: 3,
    info: 'Baños completos',
    data: '2',
    img: 'https://i.imgur.com/MzoiFYu.png',
  },
  {
    id: 4,
    info: 'Estacionamientos',
    data: '1',
    img: 'https://i.imgur.com/SoXYW6s.png',
  },
];

const info = [
  { id: 1, info: 'Niveles Construidos', data: '2' },
  { id: 2, info: 'Eestado de conversación', data: 'Bueno' },
  { id: 3, info: 'M2 Terreno', data: '204' },
  { id: 4, info: 'Área de lavado', data: 'Sí' },
  { id: 5, info: 'Tipo de Gas', data: 'LP' },
  { id: 6, info: 'Cocina', data: 'Cerrada' },
  { id: 7, info: 'Antigüedad (años)', data: '25+' },
  { id: 8, info: 'Estudio', data: 'Sí' },
  { id: 9, info: 'Jardín', data: 'Sí' },
  { id: 10, info: 'Pet Friendly', data: 'Sí' },
  { id: 11, info: 'Medio baños', data: '1' },
];

const SpecificDetails = () => {
  return (
    <View>
      {images.map(image => (
        <View key={image.id} style={styles.box}>
          <Image
            width={50}
            height={50}
            style={styles.image}
            source={{ uri: image.img }}
          />
          <Text style={styles.data}>{image.data}</Text>
          <Text style={styles.info}>{image.info}</Text>
        </View>
      ))}

      <View>
        <Text style={styles.title}>Datos específicos</Text>
        {info.map(inf => (
          <View key={inf.id} style={styles.specificaDataContainer}>
            <Text style={styles.specificaDataInfo}>{inf.info}</Text>
            <Text style={styles.specificaDataInfo}>{inf.data}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: '#F7F6FF',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    paddingVertical: 30,
    width: '80%',
  },
  data: {
    color: '#160A53',
    fontSize: 24,
    fontWeight: '700',
  },
  info: {
    color: '#160A53',
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    color: '#160A53',
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
    textAlign: 'center',
  },
  specificaDataInfo: {
    color: '#160A53',
    fontSize: 15,
    textAlign: 'center',
    fontWeight:'500'
  },
  specificaDataContainer: {
    backgroundColor: '#f7f6ff',
    borderRadius: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 5,
  },
});
export default SpecificDetails;
