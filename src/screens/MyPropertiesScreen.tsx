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

const MyProperties = ({ properties }: any) => {
  return (
    <>
      {properties.length > 0 ? (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
          <View style={appStyles.logoContainer}>
            <Image
              source={require('../assets/logo-brand.png')}
              style={appStyles.logo}
            />
          </View>
          <View style={appStyles.container}>
            <Text style={styles.textCenter}>Mis inmuebles</Text>

            <FlatList
              data={properties}
              renderItem={({ item }: any) => (
                <MyPropertiesList inmueble={item} />
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={true}
              initialNumToRender={6}
              maxToRenderPerBatch={6}
              updateCellsBatchingPeriod={100}
              windowSize={7}
              onEndReachedThreshold={0.5}
            />
          </View>
        </SafeAreaView>
      ) : (
        <NoProperties />
      )}
    </>
  );
};

const MyPropertiesScreen = () => {
  const { user } = useContext(AuthContext);
  const { loading, properties } = useMyProperties(user?.uid!);

  return (
    <>
      {loading ? (
        <Loading size="large" color="#1E0E9D" />
      ) : (
        <MyProperties properties={properties} />
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
