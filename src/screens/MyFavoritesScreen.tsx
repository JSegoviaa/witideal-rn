import React, { useContext } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyFavoritesList from '../components/MyFavoritesScreen/MyFavoritesList';
import Loading from '../components/ui/Loading';
import NoProperties from '../components/ui/NoProperties';
import { AuthContext } from '../context/auth/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import { appStyles } from '../theme/appTheme';

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
        <NoProperties title="Aún no tienes favoritos" />
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
});

export default MyFavoritesScreen;
