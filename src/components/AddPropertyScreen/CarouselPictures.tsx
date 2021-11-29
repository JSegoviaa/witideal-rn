import React from 'react';
import { Image, useWindowDimensions, View } from 'react-native';

const CarouselPictures = ({ item }: any) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ paddingVertical: 10 }}>
      <Image
        resizeMode="contain"
        style={{
          width: width * 0.9,
          height: 200,
          borderRadius: 5,
        }}
        source={{ uri: item }}
      />
    </View>
  );
};

export default CarouselPictures;
