import React from 'react';
import MyFavoristListItem from './MyFavoristListItem';

const MyFavoritesList = ({ favorites }: any) => {
  return <MyFavoristListItem favorites={favorites} />;
};

export default MyFavoritesList;
