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
import NoProperties from '../components/ui/NoProperties';
import { AuthContext } from '../context/auth/AuthContext';
import { useDestProperties } from '../hooks/useDestProperties';
import { appStyles } from '../theme/appTheme';

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
              initialNumToRender={6}
              maxToRenderPerBatch={6}
              updateCellsBatchingPeriod={100}
              windowSize={7}
              onEndReachedThreshold={0.5}
            />
          </View>
        </SafeAreaView>
      ) : (
        <NoProperties title="Aún no has agregado destacados" />
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
});

export default MyDestPropertiesScreen;
