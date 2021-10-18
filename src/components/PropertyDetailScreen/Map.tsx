import React from 'react';
import { Image, View } from 'react-native';

const mapa = {
  uri: 'https://maps.googleapis.com/maps/api/staticmap?size=350x350&zoom=17&scale=1&center=19.4278121,-99.1981029&format=png&maptype=roadmap&key=AIzaSyCVzD2DnsLYxkD5sNF_IOSF24h5r6JiR9o&markers=size:normal%7Cicon:https://tinyurl.com/y4wlmdeb%7C19.4278121,-99.1981029',
};
const Map = () => {
  return (
    <View style={{ alignItems: 'center', paddingVertical: 40 }}>
      <Image source={mapa} style={{ width: 300, height: 300 }} />
    </View>
  );
};

export default Map;
