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
                  {currencyFormat(property.price)} {property.currency}
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
                      {userInfo && userInfo.photo ? (
                        <Image
                          style={styles.avatar}
                          source={{ uri: userInfo.photo }}
                        />
                      ) : (
                        <Image
                          style={styles.avatar}
                          source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/assets%2Ficons%2Fthumb%401100_profile_pic.png?alt=media&token=6050df5b-d889-4a21-9d77-e9e33511e376',
                          }}
                        />
                      )}
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
                <Text style={styles.precio}>
                  {currencyFormat(property.price)} {property.currency}
                </Text>
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
    width: 120,
    height: 120,
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
