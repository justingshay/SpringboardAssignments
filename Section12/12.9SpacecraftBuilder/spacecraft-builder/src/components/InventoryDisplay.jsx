import ItemCard from './ItemCard';
import ItemAction from './ItemAction';

const InventoryDisplay = ({inventory, onDeleteItem}) => {
  return (
    <div>
        <h2>Inventory</h2>
        {
            inventory.map((item) => (
                <div
                    className='item-container'
                    key={item.id}
                >
                    <div className='item-card'>
                        <ItemCard 
                            name={item.name}
                            qty={item.qty}
                            purpose={item.purpose}
                        />
                    </div>
                    <div className='item-action'>
                        <ItemAction 
                            itemId={item.id}
                            onDeleteItem={onDeleteItem}
                        />
                    </div>
                </div>
            ))
        }
    </div>
  );
}

export default InventoryDisplay;