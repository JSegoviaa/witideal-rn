import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { launchImageLibrary } from 'react-native-image-picker';
import { AuthContext } from '../../context/auth/AuthContext';
import { appStyles } from '../../theme/appTheme';
import { useUserInfo } from '../../hooks/useUserInfo';
import Loading from '../ui/Loading';
import { risingStar, rockStar, superStar } from '../../constant/role';
import { useRole } from '../../hooks/useRole';
import { RootProfileStackNavigation } from '../../navigation/ProfileStackNavigation';
import { updateProfilePicture } from '../../helpers/updateProfilePic';

const PersonalInfo = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<RootProfileStackNavigation, 'ProfileScreen'>
    >();
  const { user, logOut } = useContext(AuthContext);
  const { userInfo } = useUserInfo(user?.uid!);
  const { role } = useRole(user?.uid!);
  const [tempUri, setTempUri] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const takePhotoFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      resp => {
        if (resp.didCancel) return;
        if (!resp.assets![0].uri) return;
        setTempUri(resp.assets![0].uri);
        setFileName(resp.assets![0].fileName!);
        updateProfilePicture(tempUri, fileName, user?.uid!);
      },
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {userInfo && (
          <TouchableOpacity onPress={takePhotoFromGallery}>
            {userInfo.photo ? (
              <View style={styles.avatarContainer}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: `${userInfo.photo}`,
                  }}
                />
              </View>
            ) : (
              <View style={styles.avatarContainer}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: `https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/assets%2Ficons%2Fthumb%401100_profile_pic.png?alt=media&token=6050df5b-d889-4a21-9d77-e9e33511e376`,
                  }}
                />
              </View>
            )}
          </TouchableOpacity>
        )}
        <Text style={styles.center}>¡Hola!</Text>
        {!userInfo ? (
          <Loading size="large" color="#1E0E9D" />
        ) : (
          <>
            {userInfo && (
              <Text style={styles.name}>
                {userInfo.name} {userInfo.lastname}{' '}
              </Text>
            )}
            {role && (
              <Text style={styles.center}>
                {role && role.role === risingStar ? 'Plan Rising Star' : ''}
                {role && role.role === rockStar ? 'Plan Rock Star' : ''}
                {role && role.role === superStar ? 'Plan Super Star' : ''}
              </Text>
            )}

            <Text style={styles.uid}>UID: {user?.uid} </Text>

            <Text style={styles.center}>
              <Icon name="call" size={20} /> {userInfo?.phone}
            </Text>

            <Text style={styles.center}>
              <Icon name="mail" size={20} /> {user?.email}
            </Text>
          </>
        )}

        <TouchableOpacity
          style={appStyles.btnPrimary}
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text style={appStyles.textCenter}>Editar perfil</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}></View>
        <TouchableOpacity onPress={() => logOut()}>
          <Text style={{ color: 'gray' }}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  center: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#1E0E6F',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: { alignItems: 'center', flex: 1, paddingBottom: 15 },
  name: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#1E0E6F',
    fontSize: 30,
    fontWeight: '700',
  },
  uid: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#808080',
  },
});

export default PersonalInfo;
