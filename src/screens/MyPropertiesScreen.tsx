import React, { useContext } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MyPropertiesList from '../components/MyPropertiesScreen/MyPropertiesList';
import Loading from '../components/ui/Loading';
import { AuthContext } from '../context/auth/AuthContext';
import { useMyProperties } from '../hooks/useMyProperties';
import { appStyles } from '../theme/appTheme';

const NoProperties = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <Image
        width={10}
        height={10}
        style={{
          width: 200,
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        source={require('../assets/warning.png')}
      />
      <Text style={styles.title}>No tienes propiedades</Text>
    </SafeAreaView>
  );
};

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const { loading, properties } = useMyProperties(user?.uid!);

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={appStyles.logoContainer}>
        <Image
          source={require('../assets/logo-brand.png')}
          style={appStyles.logo}
        />
      </View>
      <View style={appStyles.container}>
        <Text style={styles.textCenter}>Mis inmuebles</Text>

        {loading ? (
          <Loading size="large" color="#1E0E9D" />
        ) : (
          <>
            <FlatList
              data={properties}
              renderItem={({ item }: any) => (
                <MyPropertiesList inmueble={item} />
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const MyPropertiesScreen = () => {
  const { user } = useContext(AuthContext);
  const { properties } = useMyProperties(user?.uid!);

  return (
    <>
      {properties && properties.length > 0 ? (
        <MyProperties />
      ) : (
        <NoProperties />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    color: '#1E0E6F',
    fontSize: 30,
    fontWeight: '700',
    padding: 15,
    marginTop: 70,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#1C006F',
  },
});

export default MyPropertiesScreen;
