import React from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const images = [
  {
    id: 1,
    url: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FUsNTdvWAQHboIZJMN1ih%2Fthumb%401100_547867_F01.jpg?alt=media',
  },
  {
    id: 2,
    url: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FUsNTdvWAQHboIZJMN1ih%2Fextras%2Fthumb%401100_833022_F02.jpg?alt=media',
  },
  {
    id: 3,
    url: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FUsNTdvWAQHboIZJMN1ih%2Fextras%2Fthumb%401100_409152_F03.jpg?alt=media',
  },
  {
    id: 4,
    url: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FUsNTdvWAQHboIZJMN1ih%2Fextras%2Fthumb%401100_800298_F04.jpg?alt=media',
  },
  {
    id: 5,
    url: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FUsNTdvWAQHboIZJMN1ih%2Fextras%2Fthumb%401100_949888_F05.jpg?alt=media',
  },
  {
    id: 6,
    url: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FUsNTdvWAQHboIZJMN1ih%2Fextras%2Fthumb%401100_865912_F06.jpg?alt=media',
  },
  {
    id: 7,
    url: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FUsNTdvWAQHboIZJMN1ih%2Fextras%2Fthumb%401100_217257_F07.jpg?alt=media',
  },
  {
    id: 8,
    url: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FUsNTdvWAQHboIZJMN1ih%2Fextras%2Fthumb%401100_905416_F08.jpg?alt=media',
  },
];

const Images = () => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }: any) => (
          <View>
            <Image
              width={width}
              height={100}
              style={{ width, height: 320 }}
              source={{ uri: item.url }}
            />
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default Images;
