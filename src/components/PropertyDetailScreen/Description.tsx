import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Description = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dirección</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, harum?
      </Text>
      <Text style={styles.title}>Título del inmueble</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, harum?
      </Text>
      <Text style={styles.title}>Descripción general</Text>
      <Text style={styles.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
        mollitia aut. Atque, tempore numquam provident quas fuga temporibus eius
        quo beatae quasi dolore illum autem natus, ea voluptates repellat, ut
        veniam. Eius eaque at accusamus voluptate quod, error sunt rem omnis
        tenetur veritatis. Quos porro maxime officia et odit aliquam maiores
        tempore, facilis voluptate id laudantium eius consequatur vel ea sit
        facere dignissimos culpa sapiente beatae incidunt cupiditate laborum
        quibusdam nemo! Inventore voluptatum voluptas recusandae fugit a
        perferendis maiores saepe ullam obcaecati excepturi maxime, commodi vero
        fugiat voluptatem. Mollitia ab dignissimos corporis consequuntur beatae
        maiores quasi eveniet fuga laboriosam. Incidunt.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description: {
    color: '#212121',
    fontSize: 17,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  title: {
    color: '#1E0E6F',
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
});
export default Description;
