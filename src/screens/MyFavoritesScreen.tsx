import React, { useContext } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MyFavoritesList from '../components/MyFavoritesScreen/MyFavoritesList';
import Loading from '../components/ui/Loading';
import { AuthContext } from '../context/auth/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import { appStyles } from '../theme/appTheme';

// Componente que se muestra si aún no tienes favoritos
const NoFavorites = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
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
      <Text style={styles.title}>Aún no tienes favoritos</Text>
    </View>
  );
};

//Componente que se muestra si tienes favoritos
const Favorites = ({ favorites }: any) => {
  return (
    <>
      {favorites && favorites.length > 0 ? (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
          <View style={appStyles.container}>
            <Text style={styles.textCenter}>Mis favoritos</Text>

            <FlatList
              data={favorites}
              renderItem={({ item }: any) => (
                <MyFavoritesList favorites={item} />
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

const MyFavoritesScreen = () => {
  const { user } = useContext(AuthContext);
  const { favorites, loading } = useFavorites(user?.uid!);

  return <>{loading ? <Loading /> : <Favorites favorites={favorites} />}</>;
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
