import React from 'react';

const ItemAction = ({itemId, onDeleteItem}) => {
  return (
    <>
        <button onClick={() => onDeleteItem(itemId)}>
            Delete
        </button>
    </>
  );
}

export default ItemAction;