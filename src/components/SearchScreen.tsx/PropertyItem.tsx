import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import urlTranslator from '../../helpers/urlTranslator';

interface Props {
  action: string;
  baños: string;
  description: string;
  habitaciones: string;
  img: string;
  propertyType: string;
}

const PropertyItem = ({
  action,
  baños,
  description,
  img,
  habitaciones,
  propertyType,
}: Props) => {
  const width = useWindowDimensions().width;

  return (
    <TouchableOpacity style={[styles.container, { width }]}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: img }} />

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.bedrooms}>
            {urlTranslator(action)} {urlTranslator(propertyType)}{' '}
            {baños && `con ${baños} baños`}{' '}
            {habitaciones && `y ${habitaciones} habitaciones`}
          </Text>
          {description && (
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  bedrooms: {
    marginVertical: 10,
    color: '#000',
  },
  description: {
    fontSize: 15,
    color: '#000',
  },
});

export default PropertyItem;
