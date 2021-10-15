import React from 'react';
import DestacadosListItem from './DestacadosListItem';


interface Props {
    id:Number,
    title:String,
    img:String,
    price: Number
    description:String
}


const DestacadosList = ({item}:Props) => {
  return <DestacadosListItem item={item} />
};

export default DestacadosList;
