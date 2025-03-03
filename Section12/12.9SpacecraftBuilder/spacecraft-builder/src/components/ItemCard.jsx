import React from 'react';

const ItemCard = ({name, qty, purpose}) => {
  return (
    <>
        <h2>{name}</h2>
        <p>Quantity: {qty}</p>
        <p>Purpose: {purpose}</p>
    </>
  );
}

export default ItemCard;