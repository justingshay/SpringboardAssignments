import React, { useState } from 'react';
import ItemForm from './ItemForm';
import InventoryDisplay from './InventoryDisplay';

const SpacecraftBuilder = () => {
    const [inventory, setInventory] = useState([]);

    function addItem(item) {
        setInventory((prev) => [...prev, item]);
    }

    function deleteItem(id) {
        setInventory((prev) => prev.filter((item) => item.id !== id));
    }

  return (
    <div>
        <h1>SpacecraftBuilder</h1>
        <div className='item-form'>
            <ItemForm onItemSubmit={addItem}/>
        </div>
        <div className='inventory-display'>
            <InventoryDisplay
                inventory={inventory}
                onDeleteItem={deleteItem}
            />
        </div>
    </div>
  );
}

export default SpacecraftBuilder;