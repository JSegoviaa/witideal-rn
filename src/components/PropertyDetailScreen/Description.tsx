import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useProperty } from '../../hooks/useProperty';

interface Props {
  id: string;
  action: string;
  propertyType: string;
}

const Description = ({ id, action, propertyType }: Props) => {
  const { property } = useProperty(id, action, propertyType);
  return (
    <>
      {property && (
        <View style={styles.container}>
          <Text style={styles.title}>Dirección</Text>
          <Text style={styles.description}>
            {property!.route && `${property!.route} `}
            {property!.street_number && `${property!.street_number} `}
            {property!.int_number && `${property!.int_number}`}
            {property!.sublocality_level_1 &&
              `, ${property!.sublocality_level_1}`}
            {property!.administrative_area_level_2_3 &&
              `, ${property!.administrative_area_level_2_3}`}
            {property!.postal_code && `, ${property!.postal_code}`}
            {property!.administrative_area_level_1 &&
              `, ${property!.administrative_area_level_1}`}
          </Text>

          {property!.specificData.propertyTitle && (
            <>
              <Text style={styles.title}>Título del inmueble</Text>
              <Text style={styles.description}>
                {property!.specificData.propertyTitle}
              </Text>
            </>
          )}
          {property!.specificData.propertyDescription && (
            <>
              <Text style={styles.title}>Descripción general</Text>
              <Text style={styles.description}>
                {property!.specificData.propertyDescription}
              </Text>
            </>
          )}
        </View>
      )}
    </>
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
