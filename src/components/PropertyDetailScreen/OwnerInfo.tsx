import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { currencyFormat } from '../../helpers/currencyFormat';
import urlTranslator from '../../helpers/urlTranslator';
import { useUserInfo } from '../../hooks/useUserInfo';
import Loading from '../ui/Loading';

interface Props {
  property: any;
}

const OwnerInfo = ({ property }: Props) => {
  const [showOwnerInfo, setShowOwnerInfo] = useState<Boolean>(true);
  const { userInfo, loading } = useUserInfo(property?.uId);

  const handleOwnerInfo = () => setShowOwnerInfo(!showOwnerInfo);

  const image = {
    uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
  };

  return (
    <>
      {property && (
        <View style={{ paddingTop: 30 }}>
          {showOwnerInfo ? (
            <>
              <Text style={styles.title}>
                {urlTranslator(property.action)}{' '}
                {urlTranslator(property.propertyType)}
              </Text>
              {property.price && (
                <Text style={styles.precio}>
                  {currencyFormat(property.price)} MXN
                </Text>
              )}
              <TouchableOpacity
                style={styles.btnInfo}
                onPress={handleOwnerInfo}>
                <Text style={styles.infoBtn}>Ver información del promotor</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {loading ? (
                <Loading size="large" color="#1E0E9D" />
              ) : (
                <View>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={styles.avatarContainer}>
                      <Image style={styles.avatar} source={image} />
                      {userInfo && (
                        <>
                          <Text style={styles.title}>{userInfo.name}</Text>
                          <Text style={styles.title}>{userInfo.lastname}</Text>
                        </>
                      )}
                    </View>
                  </View>
                  <Text style={styles.precio}>
                    Teléfono {userInfo && userInfo.phone}
                  </Text>
                  <Text style={styles.precio}>{userInfo && userInfo.mail}</Text>
                </View>
              )}

              <Text style={styles.title}>
                {urlTranslator(property.action)}{' '}
                {urlTranslator(property.propertyType)}
              </Text>
              {property.price && (
                <Text style={styles.precio}>{ currencyFormat(property.price) } MXN</Text>
              )}
              <TouchableOpacity
                style={styles.btnInfo}
                onPress={handleOwnerInfo}>
                <Text style={styles.infoBtn}>
                  Ocultar información del promotor
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  btnInfo: {
    backgroundColor: '#3F19F9',
    borderRadius: 6,
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '65%',
  },
  infoBtn: {
    color: '#fff',
    textAlign: 'center',
    padding: 13,
    fontSize: 16,
    fontWeight: '700',
  },
  precio: {
    color: '#3F19F9',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  title: {
    color: '#1E0E6F',
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default OwnerInfo;
