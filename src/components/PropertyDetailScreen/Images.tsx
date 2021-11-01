import React from 'react';
import { FlatList, Image, useWindowDimensions, View } from 'react-native';
import { useProperty } from '../../hooks/useProperty';

interface Props {
  id: string;
}

const Images = ({id}: Props) => {
  const { width } = useWindowDimensions();
  const { property } = useProperty(id);
  console.log(id, 'desde iamges');

  return (
    <View>
      {property && (
        <FlatList
          data={property.photos.extras}
          renderItem={({ item }: any) => (
            <View>
              <Image
                width={width}
                height={100}
                style={{ width, height: 320 }}
                source={{ uri: item }}
              />
            </View>
          )}
          keyExtractor={item => item}
          horizontal={true}
        />
      )}
    </View>
  );
};

export default Images;
