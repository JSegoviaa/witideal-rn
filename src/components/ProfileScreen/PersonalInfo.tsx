import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context/auth/AuthContext';
import { appStyles } from '../../theme/appTheme';
import { useUserInfo } from '../../hooks/useUserInfo';
import Loading from '../ui/Loading';
import { useSubscription } from '../../hooks/useSubscription';
import { risingStar, rockStar, superStar } from '../../constant/role';

const PersonalInfo = () => {
  const { user, logOut } = useContext(AuthContext);
  const { subscription } = useSubscription(user?.uid!);
  const { userInfo } = useUserInfo(user?.uid!);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: `https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif`,
            }}
          />
        </View>
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
            {subscription && (
              <Text style={styles.center}>
                {subscription && subscription.role === risingStar
                  ? 'Plan Rising Star'
                  : ''}
                {subscription && subscription.role === rockStar
                  ? 'Plan Rock Star'
                  : ''}
                {subscription && subscription.role === superStar
                  ? 'Plan Super Star'
                  : ''}
              </Text>
            )}

            <Text style={styles.uid}>UID: {user?.uid} </Text>

            <Text style={styles.center}>
              <Icon name="call-outline" size={20} />
              {userInfo?.phone}
            </Text>

            <Text style={styles.center}>
              <Icon name="mail-open-outline" size={20} />
              {user?.email}
            </Text>
          </>
        )}

        <TouchableOpacity style={appStyles.btnPrimary}>
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
    borderRadius: 100,
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
