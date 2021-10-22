import React, { useContext } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyFavoritesList from '../components/MyFavoritesScreen/MyFavoritesList';
import Loading from '../components/ui/Loading';
import { AuthContext } from '../context/auth/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import { appStyles } from '../theme/appTheme';

const favoritos = [
  {
    id: 1,
    title: 'Inmueble 1',
    desc: 'Favorito 1',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2Fx9LUhwIgP8EM3aBR626C%2Fthumb%401100_275716_125400261.jpg?alt=media',
  },
  {
    id: 2,
    title: 'Inmueble 2',
    desc: 'Favorito 2',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FxpBJNkkSSUzm3gRzjyxS%2Fthumb%401100_399429_descarga.jpg?alt=media',
  },
  {
    id: 3,
    title: 'Inmueble 3',
    desc: 'Favorito 3',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },
  {
    id: 4,
    title: 'Inmueble 4',
    desc: 'Favorito 4',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FbToynbJrydhGQXHaBwge%2Fthumb%401100_330959__FI.jpg?alt=media',
  },
  {
    id: 5,
    title: 'Inmueble 5',
    desc: 'Favorito 5',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FSlmQwNroraXIloP6EzKn%2Fthumb%401100_301215_3.jpg?alt=media',
  },
  {
    id: 6,
    title: 'Inmueble 6',
    desc: 'Favorito 6',
    img: 'https://firebasestorage.googleapis.com/v0/b/witideal-b1f99.appspot.com/o/witideal%2FJ7idPjx6jVMlYtzQVF3RbfiWre72%2FAdHaIDPSe3a2BGl5EdzB%2Fthumb%401100_488011_4.jpg?alt=media',
  },
];

// Componente que se muestra si aún no tienes favoritos
const NoFavorites = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.title}>Aún no tienes favoritos</Text>
    </View>
  );
};

//Componente que se muestra si tienes favoritos
const Favorites = () => {
  const { user } = useContext(AuthContext);
  const { loading } = useFavorites(user?.uid!);
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={appStyles.container}>
        <Text style={styles.textCenter}>Mis favoritos</Text>
        {loading ? (
          <Loading size="large" color="#1E0E9D" />
        ) : (
          <FlatList
            data={favoritos}
            renderItem={({ item }: any) => <MyFavoritesList favoritos={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const MyFavoritesScreen = () => {
  const { user } = useContext(AuthContext);
  const { favorites } = useFavorites(user?.uid!);

  return (
    <>{favorites && favorites.length > 0 ? <Favorites /> : <NoFavorites />}</>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    color: '#1E0E6F',
    fontSize: 30,
    fontWeight: '700',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#1C006F',
  },
});

export default MyFavoritesScreen;
