import React from 'react';
import MyFavoristListItem from './MyFavoristListItem';

interface Props {
  id: Number;
  title: String;
  img: String;
}

const MyFavoritesList = ({ favoritos }: Props) => {
  return <MyFavoristListItem favoritos={favoritos} />;
};

export default MyFavoritesList;
