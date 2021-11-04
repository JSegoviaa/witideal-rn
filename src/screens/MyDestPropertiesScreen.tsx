import React, { useContext } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MyDestPropertiesList from '../components/MyDestPropertiesScreen/MyDestPropertiesList';
import Loading from '../components/ui/Loading';
import { AuthContext } from '../context/auth/AuthContext';
import { useDestProperties } from '../hooks/useDestProperties';
import { appStyles } from '../theme/appTheme';

//Este es el componente que se muestra si no se tiene propiedades destacadas
const NoDestacados = () => {
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
      <Text style={styles.title}>Aún no has agregado destacados</Text>
    </SafeAreaView>
  );
};

//Este es el componente que se muestra si se tiene propiedades destacadas
const Destacados = ({ destProperties }: any) => {
  return (
    <>
      {destProperties && destProperties.length > 0 ? (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
          <View style={appStyles.logoContainer}>
            <Image
              source={require('../assets/logo-brand.png')}
              style={appStyles.logo}
            />
          </View>
          <View style={appStyles.container}>
            <Text style={styles.textCenter}>Mis destacados</Text>

            <FlatList
              data={destProperties}
              renderItem={({ item }: any) => (
                <MyDestPropertiesList destacado={item} />
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      ) : (
        <NoDestacados />
      )}
    </>
  );
};

const MyDestPropertiesScreen = () => {
  const { user } = useContext(AuthContext);
  const { destProperties, loading } = useDestProperties(user?.uid!);

  return (
    <>
      {loading ? <Loading /> : <Destacados destProperties={destProperties} />}
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
    fontSize: 20,
    fontWeight: '700',
    color: '#1C006F',
  },
});

export default MyDestPropertiesScreen;
