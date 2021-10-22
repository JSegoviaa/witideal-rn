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

const destacados = [
  {
    id: 1,
    title: 'Inmueble 1',
    desc: 'Descripción 1',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2Fx9LUhwIgP8EM3aBR626C%2Fthumb%401100_275716_125400261.jpg?alt=media',
  },
  {
    id: 2,
    title: 'Inmueble 2',
    desc: 'Descripción 2',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FxpBJNkkSSUzm3gRzjyxS%2Fthumb%401100_399429_descarga.jpg?alt=media',
  },
  {
    id: 3,
    title: 'Inmueble 3',
    desc: 'Descripción 3',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },
  {
    id: 4,
    title: 'Inmueble 4',
    desc: 'Descripción 4',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FbToynbJrydhGQXHaBwge%2Fthumb%401100_330959__FI.jpg?alt=media',
  },
  {
    id: 5,
    title: 'Inmueble 5',
    desc: 'Descripción 5',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FSlmQwNroraXIloP6EzKn%2Fthumb%401100_301215_3.jpg?alt=media',
  },
  {
    id: 6,
    title: 'Inmueble 6',
    desc: 'Descripción 6',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },
];

const Destacados = () => {
  const { user } = useContext(AuthContext);
  const { loading } = useDestProperties(user?.uid!);

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={appStyles.logoContainer}>
        <Image
          source={require('../assets/logo-brand.png')}
          style={appStyles.logo}
        />
      </View>
      <View style={appStyles.container}>
        <Text style={styles.textCenter}>Mis destacados</Text>
        {loading ? (
          <Loading size="large" color="#1E0E9D" />
        ) : (
          <FlatList
            data={destacados}
            renderItem={({ item }: any) => (
              <MyDestPropertiesList inmueble={item} />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const NoDestacados = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.title}>Aún no has agregado destacados</Text>
    </SafeAreaView>
  );
};

const MyDestPropertiesScreen = () => {
  const { user } = useContext(AuthContext);
  const { destProperties } = useDestProperties(user?.uid!);

  return (
    <>
      {destProperties && destProperties.length > 0 ? (
        <Destacados />
      ) : (
        <NoDestacados />
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
    fontSize: 20,
    fontWeight: '700',
    color: '#1C006F',
  },
});

export default MyDestPropertiesScreen;
