import React from 'react';
import { Image, View } from 'react-native';

const CarouselPictures = ({ item }: any) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <Image
        style={{
          width: 300,
          height: 200,
          borderRadius: 5,
        }}
        source={{ uri: item }}
      />
    </View>
  );
};

export default CarouselPictures;
