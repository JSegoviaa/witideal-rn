import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/Ionicons';
import urlTranslator from '../../helpers/urlTranslator';
import { useProperty } from '../../hooks/useProperty';
import Fab from '../ui/Fab';

interface Props {
  id: string;
  action: string;
  propertyType: string;
}

const Images = ({ id, action, propertyType }: Props) => {
  const { width } = useWindowDimensions();
  const { property } = useProperty(id, action, propertyType);

  const handleShare = () => {
    Share.open({
      url: `https://witideal.com/propiedad/${urlTranslator(
        propertyType,
      )}/${urlTranslator(action)}/${id}`,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

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

      <Fab
        iconName="share-social-outline"
        onPress={handleShare}
        style={styles.share}
        iconStyle={{ right: 1 }}
      />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  share: {
    bottom: 10,
    left: 10,
    padding: 4,
    position: 'absolute',
  },
});
