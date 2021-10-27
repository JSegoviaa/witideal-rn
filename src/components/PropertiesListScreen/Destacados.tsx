import React, { useContext, useEffect } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { GradientContext } from '../../context/gradient/GradientContext';
import { getImageColors } from '../../helpers/getColores';
import { useDestacados } from '../../hooks/useDestacados';
import DestacadosList from './DestacadosList';

const destacados = [
  {
    id: 0,
    title: 'Destacado 0',
    description: 'descripcion 0',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FT92IPz6HeNS1VCQZSL5CNajQc7H2%2FCDN40HhWS7MVulsrFDar%2Fthumb%401100_166686_RENTA%20DE%20RECA%CC%81MARAS.png?alt=media',
  },
  {
    id: 1,
    title: 'Destacado 1',
    description: 'descripcion 1',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },
  {
    id: 2,
    title: 'Destacado 2',
    description: 'descripcion 2',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FqsuXpbZ5EObrJ8TVQtpY2ofdl082%2FiuYaEVxIbsz4SRmBb1sm%2Fthumb%401100_881796_F01.jpg?alt=media',
  },
  {
    id: 3,
    title: 'Destacado 3',
    description: 'descripcion 3',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FinwB2EpYpjQ4dXAR3E8GKQeIFer2%2F49tCr01ATtIPhnqcZrhW%2Fthumb%401100_44002_1.JPG?alt=media',
  },
  {
    id: 4,
    title: 'Destacado 4',
    description: 'descripcion 4',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FinwB2EpYpjQ4dXAR3E8GKQeIFer2%2F9WtSSxTjxx3JltFYtXbV%2Fthumb%401100_789108_3.jpg?alt=media',
  },
  {
    id: 5,
    title: 'Destacado 5',
    description: 'descripcion 5',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJk1dAIZhPnMhZoF6kA40YGuwpy62%2F7VWGTnPryO8wrxK4s4k1%2Fthumb%401100_2018-04-02-PHOTO-00007909.jpg?alt=media',
  },
  {
    id: 6,
    title: 'Destacado 6',
    description: 'descripcion 6',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FFoXY3XlTAPSUi3CoQCcUleHcoaQ2%2FKyfZKkEp5mYTWgjGxOrz%2Fthumb%401100_336390_anatolefrance.png?alt=media',
  },
  {
    id: 7,
    title: 'Destacado 7',
    description: 'descripcion 7',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FinwB2EpYpjQ4dXAR3E8GKQeIFer2%2Ffirvl7ithn2CrbAAhus4%2Fthumb%401100_845541_1.jpg?alt=media',
  },
  {
    id: 8,
    title: 'Destacado 8',
    description: 'descripcion 8',
    price: 12345,
    img: 'https://s3-us-west-2.amazonaws.com/remax-sir/properties/439838/8a2605771e7331586536926fcc8bc7d7.JPG',
  },
  {
    id: 9,
    title: 'Destacado 9',
    description: 'descripcion 9',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FAD6LUP9cV4cQiVmbqbv32hTgMNp1%2F1GUPPh9iVD2JX2MLBxOO%2Fthumb%401100_98809_WhatsApp%20Image%202021-02-16%20at%2011.35.59%20AM%20(1).jpeg?alt=media',
  },
  {
    id: 10,
    title: 'Destacado 10',
    description: 'descripcion 10',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FinwB2EpYpjQ4dXAR3E8GKQeIFer2%2Fva2yb80rgYkvFOdxRi4N%2Fthumb%401100_776344_2.JPG?alt=media',
  },
  {
    id: 11,
    title: 'Destacado 11',
    description: 'descripcion 11',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FinwB2EpYpjQ4dXAR3E8GKQeIFer2%2FoRoJbBOS9NuSAuiYR4z9%2Fthumb%401100_369786_1.jpg?alt=media',
  },
  {
    id: 12,
    title: 'Destacado 12',
    description: 'descripcion 12',
    price: 12345,
    img: 'https://s3-us-west-2.amazonaws.com/remax-sir/properties/349832/962397962.JPG',
  },
  {
    id: 13,
    title: 'Destacado 13',
    description: 'descripcion 13',
    price: 12345,
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FAD6LUP9cV4cQiVmbqbv32hTgMNp1%2FgA7fwvMggIheLTreeLWN%2Fthumb%401100_437905_L1010794.JPG?alt=media',
  },
];

const { width: windowWidth } = Dimensions.get('window');

const Destacados = () => {
  const { setMainColors } = useContext(GradientContext);
  const { allDestacados } = useDestacados();

  const getDestColors = async (index: number) => {
    const destacado = destacados[index];
    const uri = destacados[index].img;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({ primary, secondary });
  };

  useEffect(() => {
    if (allDestacados.length > 0) {
      getDestColors(0);
    }
  }, [allDestacados]);

  allDestacados && console.log(allDestacados);

  return (
    <>
      {destacados.length > 0 && (
        <View style={{ height: 300 }}>
          <Text>{allDestacados.id}</Text>
          <Carousel
            data={destacados}
            // autoplay
            loop
            renderItem={({ item }: any) => <DestacadosList item={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            onSnapToItem={index => getDestColors(index)}
          />
        </View>
      )}
    </>
  );
};

export default Destacados;
